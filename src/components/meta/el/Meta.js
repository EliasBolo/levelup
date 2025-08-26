import Head from 'next/head';
const Meta = () => {
   return (
      <Head>
         {/* <!-- HTML Meta Tags --> */}
         <title>Level Up Καλαμάτα – Μαθήματα Αγγλικών & Γερμανικών | Φροντιστήριο Ξένων Γλωσσών</title>
         <meta name="description" content="Το Level Up στην Καλαμάτα προσφέρει ποιοτικά μαθήματα Αγγλικών και Γερμανικών για όλες τις ηλικίες. Εξατομικευμένη διδασκαλία, έμπειροι καθηγητές και σύγχρονες μέθοδοι εκμάθησης ξένων γλωσσών." />
         <meta name="keywords" content="φροντιστήριο ξένων γλωσσών Καλαμάτα, μαθήματα αγγλικών, μαθήματα γερμανικών, φροντιστήριο καλαμάτα, εκμάθηση ξένων γλωσσών, Level Up Καλαμάτα" />

         {/* <!-- Facebook Meta Tags --> */}
         <meta property="og:url" content="https://levelupkalamata.gr/el/" />
         <meta property="og:type" content="website" />
         <meta property="og:title" content="Level Up Καλαμάτα – Μαθήματα Αγγλικών & Γερμανικών | Φροντιστήριο Ξένων Γλωσσών" />
         <meta property="og:description" content="Το Level Up στην Καλαμάτα προσφέρει ποιοτικά μαθήματα Αγγλικών και Γερμανικών για όλες τις ηλικίες. Εξατομικευμένη διδασκαλία, έμπειροι καθηγητές και σύγχρονες μέθοδοι εκμάθησης ξένων γλωσσών." />
         <meta property="og:image" content="/images/og.png" />
         <meta property="og:locale" content="el_GR" />

         {/* <!-- Twitter Meta Tags --> */}
         <meta name="twitter:card" content="summary_large_image" />
         <meta property="twitter:domain" content="levelupkalamata.gr" />
         <meta property="twitter:url" content="https://levelupkalamata.gr/el/" />
         <meta name="twitter:title" content="Level Up Καλαμάτα – Μαθήματα Αγγλικών & Γερμανικών | Φροντιστήριο Ξένων Γλωσσών" />
         <meta name="twitter:description" content="Το Level Up στην Καλαμάτα προσφέρει ποιοτικά μαθήματα Αγγλικών και Γερμανικών για όλες τις ηλικίες. Εξατομικευμένη διδασκαλία, έμπειροι καθηγητές και σύγχρονες μέθοδοι εκμάθησης ξένων γλωσσών." />
         <meta name="twitter:image" content="/images/og.png" />

         {/* <!-- Additional Meta Tags --> */}
         <meta charSet="UTF-8" />
         <meta name="author" content="Level Up Καλαμάτα" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <meta name="language" content="Greek" />
         <meta httpEquiv="Content-Language" content="el" />
         <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
         <link rel="alternate" hrefLang="en" href="https://levelupkalamata.gr/" />
         <link rel="alternate" hrefLang="el" href="https://levelupkalamata.gr/el/" />

         {/* <!-- Structured Data --> */}
         <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
               __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "EducationalOrganization",
                  "name": "Level Up Καλαμάτα",
                  "alternateName": "Level Up Language School",
                  "description": "Το Level Up στην Καλαμάτα προσφέρει ποιοτικά μαθήματα Αγγλικών και Γερμανικών για όλες τις ηλικίες. Εξατομικευμένη διδασκαλία, έμπειροι καθηγητές και σύγχρονες μέθοδοι εκμάθησης ξένων γλωσσών.",
                  "url": "https://levelupkalamata.gr/el/",
                  "logo": "https://levelupkalamata.gr/images/logo/color_logo.webp",
                  "address": {
                     "@type": "PostalAddress",
                     "streetAddress": "Αριστοδήμου 33",
                     "addressLocality": "Καλαμάτα",
                     "addressCountry": "GR"
                  },
                  "contactPoint": {
                     "@type": "ContactPoint",
                     "telephone": "+30-2721-020-902",
                     "contactType": "customer service",
                     "email": "levelupkalamata@gmail.com"
                  },
                  "sameAs": [
                     "https://www.facebook.com/levelupkalamata/",
                     "https://www.instagram.com/level_up_kalamata/"
                  ],
                  "hasOfferCatalog": {
                     "@type": "OfferCatalog",
                     "name": "Μαθήματα Ξένων Γλωσσών",
                     "itemListElement": [
                        {
                           "@type": "Offer",
                           "itemOffered": {
                              "@type": "Course",
                              "name": "Μαθήματα Αγγλικών",
                              "description": "Εξατομικευμένα μαθήματα αγγλικών για όλες τις ηλικίες"
                           }
                        },
                        {
                           "@type": "Offer",
                           "itemOffered": {
                              "@type": "Course",
                              "name": "Μαθήματα Γερμανικών",
                              "description": "Εξατομικευμένα μαθήματα γερμανικών για όλες τις ηλικίες"
                           }
                        }
                     ]
                  }
               })
            }}
         />
      </Head>
   );
};

export default Meta;
