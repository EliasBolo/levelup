import { Html,Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="el">
      <Head>
      <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Solway:wght@300;400;500;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="google-site-verification" content="cbCR82Ph0OSSgtBtEyzyxNE8kgFyKpTECvoGqjL76hw" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/images/favicon.png" />
        <link rel="shortcut icon" href="/images/favicon.png" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.png" />
        <meta name="msapplication-TileImage" content="/images/favicon.png" />
        
        {/* Start cookieyes banner */}
        <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/dfef73ea0152fb1b8abe8eb9/script.js"></script>
        {/* End cookieyes banner */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
