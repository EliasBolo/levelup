import Head from 'next/head';
const Meta = () => {
   return (
      <Head>
         {/* <!-- HTML Meta Tags --> */}
         <title>Level Up Kalamata – Englisch & Deutsch Sprachkurse | Fremdsprachenschule</title>
         <meta name="description" content="Level Up in Kalamata bietet qualitativ hochwertige Englisch- und Deutschkurse für alle Altersgruppen. Individueller Unterricht, erfahrene Lehrer und moderne Fremdsprachenlernmethoden." />
         <meta name="keywords" content="Fremdsprachenschule Kalamata, Englischkurse, Deutschkurse, Sprachschule Kalamata, Fremdsprachen lernen, Level Up Kalamata" />

         {/* <!-- Facebook Meta Tags --> */}
         <meta property="og:url" content="https://levelupkalamata.gr/de/" />
         <meta property="og:type" content="website" />
         <meta property="og:title" content="Level Up Kalamata – Englisch & Deutsch Sprachkurse | Fremdsprachenschule" />
         <meta property="og:description" content="Level Up in Kalamata bietet qualitativ hochwertige Englisch- und Deutschkurse für alle Altersgruppen. Individueller Unterricht, erfahrene Lehrer und moderne Fremdsprachenlernmethoden." />
         <meta property="og:image" content="/images/og.png" />
         <meta property="og:locale" content="de_DE" />

         {/* <!-- Twitter Meta Tags --> */}
         <meta name="twitter:card" content="summary_large_image" />
         <meta property="twitter:domain" content="levelupkalamata.gr" />
         <meta property="twitter:url" content="https://levelupkalamata.gr/de/" />
         <meta name="twitter:title" content="Level Up Kalamata – Englisch & Deutsch Sprachkurse | Fremdsprachenschule" />
         <meta name="twitter:description" content="Level Up in Kalamata bietet qualitativ hochwertige Englisch- und Deutschkurse für alle Altersgruppen. Individueller Unterricht, erfahrene Lehrer und moderne Fremdsprachenlernmethoden." />
         <meta name="twitter:image" content="/images/og.png" />

         {/* <!-- Additional Meta Tags --> */}
         <meta charSet="UTF-8" />
         <meta name="author" content="Level Up Kalamata" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <meta name="language" content="German" />
         <meta httpEquiv="Content-Language" content="de" />
         <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
         <link rel="alternate" hrefLang="en" href="https://levelupkalamata.gr/en/" />
         <link rel="alternate" hrefLang="el" href="https://levelupkalamata.gr/" />
         <link rel="alternate" hrefLang="de" href="https://levelupkalamata.gr/de/" />

         {/* <!-- Structured Data --> */}
         <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
               __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "EducationalOrganization",
                  "name": "Level Up Kalamata",
                  "alternateName": "Level Up Sprachschule",
                  "description": "Level Up in Kalamata bietet qualitativ hochwertige Englisch- und Deutschkurse für alle Altersgruppen. Individueller Unterricht, erfahrene Lehrer und moderne Fremdsprachenlernmethoden.",
                  "url": "https://levelupkalamata.gr/de/",
                  "logo": "https://levelupkalamata.gr/images/logo/color_logo.webp",
                  "address": {
                     "@type": "PostalAddress",
                     "streetAddress": "Aristodimou 33",
                     "addressLocality": "Kalamata",
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
                     "name": "Fremdsprachenkurse",
                     "itemListElement": [
                        {
                           "@type": "Offer",
                           "itemOffered": {
                              "@type": "Course",
                              "name": "Englischkurse",
                              "description": "Individueller Englischunterricht für alle Altersgruppen"
                           }
                        },
                        {
                           "@type": "Offer",
                           "itemOffered": {
                              "@type": "Course",
                              "name": "Deutschkurse",
                              "description": "Individueller Deutschunterricht für alle Altersgruppen"
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
