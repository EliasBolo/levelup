const WEBSITE_URL = 'https://levelupkalamata.gr';

function generateSiteMap() {
  // Define all the pages in the website
  const pages = [
    '', // Homepage
    '/about',
    '/courses', 
    '/contact',
    '/privacy-policy',
    '/accessibility-declaration'
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
       .map((page) => {
         // Generate both English and Greek versions for each page
         const englishPage = `
           <url>
             <loc>${WEBSITE_URL}${page}</loc>
             <lastmod>${new Date().toISOString()}</lastmod>
             <changefreq>weekly</changefreq>
             <priority>${page === '' ? '1.0' : '0.8'}</priority>
           </url>`;
         
         const greekPage = `
           <url>
             <loc>${WEBSITE_URL}/el${page}</loc>
             <lastmod>${new Date().toISOString()}</lastmod>
             <changefreq>weekly</changefreq>
             <priority>${page === '' ? '1.0' : '0.8'}</priority>
           </url>`;
         
         return englishPage + greekPage;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We generate the XML sitemap with the data
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  // We send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
