import Head from 'next/head';
const Meta = () => {
   return (
      <Head>
         {/* <!-- HTML Meta Tags --> */}
         <title>Level Up Kalamata – English & German Language Courses | Language School</title>
         <meta name="description" content="Level Up in Kalamata offers high-quality English and German language courses for all ages. Experienced teachers, personalized lessons, and modern teaching methods for fast and effective language learning." />
         <meta name="keywords" content="language school Kalamata, English lessons Kalamata, German lessons Kalamata, foreign language courses Greece, Level Up language school" />

         {/* <!-- Facebook Meta Tags --> */}
         <meta property="og:url" content="https://levelupkalamata.gr/" />
         <meta property="og:type" content="website" />
         <meta property="og:title" content="Level Up Kalamata – English & German Language Courses | Language School" />
         <meta property="og:description" content="Level Up in Kalamata offers high-quality English and German language courses for all ages. Experienced teachers, personalized lessons, and modern teaching methods for fast and effective language learning." />
         <meta property="og:image" content="/images/og.png" />
         <meta property="og:locale" content="en_US" />

         {/* <!-- Twitter Meta Tags --> */}
         <meta name="twitter:card" content="summary_large_image" />
         <meta property="twitter:domain" content="levelupkalamata.gr" />
         <meta property="twitter:url" content="https://levelupkalamata.gr/" />
         <meta name="twitter:title" content="Level Up Kalamata – English & German Language Courses | Language School" />
         <meta name="twitter:description" content="Level Up in Kalamata offers high-quality English and German language courses for all ages. Experienced teachers, personalized lessons, and modern teaching methods for fast and effective language learning." />
         <meta name="twitter:image" content="/images/og.png" />

         {/* <!-- Additional Meta Tags --> */}
         <meta charSet="UTF-8" />
         <meta name="author" content="Level Up Kalamata" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <meta name="language" content="English" />
         <meta httpEquiv="Content-Language" content="en" />
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
                  "name": "Level Up Kalamata",
                  "alternateName": "Level Up Language School",
                  "description": "Level Up in Kalamata offers high-quality English and German language courses for all ages. Experienced teachers, personalized lessons, and modern teaching methods for fast and effective language learning.",
                  "url": "https://levelupkalamata.gr/",
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
                     "name": "Language Courses",
                     "itemListElement": [
                        {
                           "@type": "Offer",
                           "itemOffered": {
                              "@type": "Course",
                              "name": "English Language Courses",
                              "description": "Personalized English language courses for all ages"
                           }
                        },
                        {
                           "@type": "Offer",
                           "itemOffered": {
                              "@type": "Course",
                              "name": "German Language Courses",
                              "description": "Personalized German language courses for all ages"
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
