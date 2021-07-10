import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {}, []);

  return (
    <div>
      <Head>
        <title>Nimish Shah</title>
        <meta name="description" content="My Portfolio" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <script src="/static/js/mousetrail.js"></script>
    </div>
  );
}
