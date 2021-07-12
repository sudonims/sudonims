import Document, { Html, Head, Main, NextScript } from 'next/document';
// import GoogleFonts from 'next-google-fonts'
import { ColorModeScript } from '@chakra-ui/react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        {/* <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" /> */}
        <Head>
          <title>Nimish Shah</title>
          <meta name="description" content="My Portfolio" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
