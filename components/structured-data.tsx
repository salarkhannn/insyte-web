export function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Insyte",
    "url": "https://useinsyte.vercel.app",
    "logo": "https://useinsyte.vercel.app/logo-dark.svg",
    "description": "AI-Powered Desktop Analytics for Power BI and Tableau Workflows",
    "sameAs": [
      "https://github.com/salarkhannn/insyte"
    ]
  };

  const softwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Insyte",
    "description": "Build Tableau and Power BI-level analytics with a faster workflow, modern architecture, and AI-assisted intelligence — without sacrificing control.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Windows, macOS",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/PreOrder"
    },
    "featureList": [
      "AI-powered natural language queries",
      "Desktop-native performance",
      "Local-first data processing",
      "Multiple chart types",
      "CSV, Excel, JSON import"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }}
      />
    </>
  );
}
