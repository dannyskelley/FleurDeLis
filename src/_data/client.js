module.exports = {
    name: "Pro Tubs LLC",
    email: "bathtubs76@gmail.com",
    phoneForTel: "386.760.3515",
    phoneFormatted: "386.760.3515",
    address: {
        lineOne: "14350 Eureka Rd",
        lineTwo: "",
        city: "Southgate",
        state: "MI",
        zip: "48195",
        country: "US",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d376060.03206968214!2d-83.30923325!3d42.57718044999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa5c04c4ad6f2a3d5%3A0xa643d5c56ad54a24!2sA%20and%20A%20Outdoor%20LLC!5e0!3m2!1sen!2sus!4v1752513334459!5m2!1sen!2sus",
    },
    socials: {
        facebook: "https://www.facebook.com/Providencemichigan/",
        instagram: "https://www.instagram.com/providencemichigan/",
        google: "https://g.co/kgs/n4aSPHz",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://protubsllc.com/",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};

