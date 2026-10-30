"""Render Casey's price list and extract rows for price verification."""
import json
import re
from pathlib import Path
import fitz

source = Path("attached_assets/Fleur_De_Lis_Salon_10_Percent_Price_Increase_1793376336442.pdf")
output = Path("/tmp/salon-price-list")
output.mkdir(exist_ok=True)
document = fitz.open(source)
rows = {}
for index, page in enumerate(document):
    page.get_pixmap(matrix=fitz.Matrix(1.5, 1.5)).save(output / f"page-{index + 1}.png")
    words = page.get_text("words", sort=True)
    lines = {}
    for word in words:
        lines.setdefault((word[5], word[6]), []).append(word[4])
    text = page.get_text(sort=True)
    for line in text.splitlines():
        match = re.match(r"^\s*(.+?)\s+\$(\d+\.\d{2})\s+\$(\d+)\s+(.+?)\s*$", line)
        if match:
            name, old, new, duration = match.groups()
            rows[name.strip()] = {"old": old, "new": int(new), "duration": duration}
(output / "prices.json").write_text(json.dumps(rows, indent=2))
print(f"Rendered {len(document)} pages; extracted {len(rows)} prices to {output}")
