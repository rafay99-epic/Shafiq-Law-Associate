import  SiteConfig  from "../config/SiteConfig/config.json";

/**
 * Generate Organization schema for structured data
 */
export function generateOrganizationSchema(
  siteUrl: string,
  config: {
    SITE_TITLE: string;
    organizationLogo: string;
    EmailAdress: string;
    PhoneNumber01: string;
    PhoneNumber02?: string;
    offices: Array<{ name: string; address: string; phone: string }>;
  }
) {
  const logoUrl = new URL(config.organizationLogo, siteUrl).toString();
  
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${siteUrl}#organization`,
    name: config.SITE_TITLE,
    logo: logoUrl,
    image: logoUrl,
    email: config.EmailAdress,
    telephone: [config.PhoneNumber01, config.PhoneNumber02].filter(Boolean).join(", "),
    address: config.offices.map((office) => ({
      "@type": "PostalAddress",
      streetAddress: office.address,
      addressLocality: "Rawalpindi",
      addressRegion: "Punjab",
      addressCountry: "PK",
    })),
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    url: siteUrl,
  };
}

/**
 * Generate LegalService schema for individual services
 */
export function generateLegalServiceSchema(
  service: { title: string; description: string; subServices?: Array<{ title: string; description: string }> },
  siteUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: service.title,
    description: service.description,
    serviceType: service.title,
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    ...(service.subServices && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${service.title} Services`,
        itemListElement: service.subServices.map((sub, index) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: sub.title,
            description: sub.description,
          },
          position: index + 1,
        })),
      },
    }),
  };
}

/**
 * Generate ContactPage schema
 */
export function generateContactPageSchema(
  siteUrl: string,
  config: {
    SITE_TITLE: string;
    EmailAdress: string;
    PhoneNumber01: string;
    PhoneNumber02?: string;
    offices: Array<{ name: string; address: string; phone: string; hours: string }>;
  }
) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact - ${config.SITE_TITLE}`,
    mainEntity: {
      "@type": "LegalService",
      name: config.SITE_TITLE,
      email: config.EmailAdress,
      telephone: [config.PhoneNumber01, config.PhoneNumber02].filter(Boolean).join(", "),
      address: config.offices.map((office) => ({
        "@type": "PostalAddress",
        name: office.name,
        streetAddress: office.address,
        addressLocality: "Rawalpindi",
        addressRegion: "Punjab",
        addressCountry: "PK",
      })),
      openingHoursSpecification: config.offices.map((office) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: office.hours.split(" - ")[0],
        closes: office.hours.split(" - ")[1],
      })),
    },
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
  siteUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.url, siteUrl).toString(),
    })),
  };
}

/**
 * Generate Person schema for team members
 */
export function generatePersonSchema(
  person: { name: string; position: string; description: string; image?: string },
  siteUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.position,
    description: person.description,
    ...(person.image && {
      image: new URL(person.image, siteUrl).toString(),
    }),
    worksFor: {
      "@type": "LegalService",
      name: "Shafiq Law Associates",
    },
  };
}

/**
 * Generate WebSite schema with search action
 */
export function generateWebSiteSchema(siteUrl: string, siteTitle: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteTitle,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Generate Service schema with offers for pricing
 */
export function generateServiceSchema(
  serviceName: string,
  description: string,
  offers: Array<{ name: string; price: string; currency?: string }>,
  siteUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: description,
    provider: {
      "@type": "LegalService",
      name: "Shafiq Law Associates",
    },
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    offers: offers.map((offer) => ({
      "@type": "Offer",
      name: offer.name,
      price: offer.price.replace(/[^\d.]/g, ""), // Extract numeric price
      priceCurrency: offer.currency || "PKR",
      availability: "https://schema.org/InStock",
    })),
  };
}
