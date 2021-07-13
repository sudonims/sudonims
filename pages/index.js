import About from '../components/About';
import RightSidebar from '../components/RightSidebar';
import Sidebar from '../components/Sidebar';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Nimish Shah</title>
      </Head>
      <Sidebar
        linkItems={[
          { href: 'https://sudonims.tech', front: 'About', back: 'Go' },
          {
            href: '#exp',
            front: 'Experience',
            back: 'Go',
          },
          { href: '#work', front: 'Work', back: 'Go' },
          {
            href: '#contact',
            front: 'Contact',
            back: 'Go',
          },
        ]}
      />
      <canvas id="canvas"></canvas>
      <About />
      <RightSidebar display={{ base: 'none', md: 'flex' }} />
      <script defer src="/static/js/mousetrail.js"></script>
    </>
  );
}
