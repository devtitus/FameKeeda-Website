document.addEventListener("DOMContentLoaded", function() {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = `
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Fame Keeda Networks",
    "image": "https://www.famekeeda.com/images/Logo-SVG-1.svg",
    "@id": "",
    "url": "https://www.famekeeda.com/",
    "telephone": "+91 8655734299",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1101, A-Wing, Fame Keeda, Rupa Renaissance, MIDC Industrial Area, Turbhe,",
      "addressLocality": "Navi Mumbai",
      "postalCode": "400705",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.066257907063147,
      "longitude": 73.02372578038806
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "10:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.facebook.com/famekeeda/",
      "https://in.linkedin.com/company/famekeeda",
      "https://www.instagram.com/famekeeda/"
    ] 
  }
  `;
  document.head.appendChild(script);
});
