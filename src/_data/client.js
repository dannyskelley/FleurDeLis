module.exports = {
    name: "Fleur de Lis Salon",
    email: "fdlgirl65@gmail.com",
    phoneForTel: "386.760.3515",
    phoneFormatted: "386.760.3515",
    address: {
        lineOne: "14350 Eureka Rd",
        lineTwo: "",
        city: "Southgate",
        state: "MI",
        zip: "48195",
        country: "US",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13766850.458597919!2d-88.43554367168856!3d32.60491823015112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e6d820acdc45e5%3A0xebc325d202a93e53!2sFleur%20De%20Lis%20Salon!5e0!3m2!1sen!2sus!4v1757336632974!5m2!1sen!2sus",
    },
    socials: {
        facebook: "https://www.facebook.com/Providencemichigan/",
        instagram: "https://www.instagram.com/providencemichigan/",
        google: "https://g.co/kgs/n4aSPHz",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://fdlsalon.com/",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};

