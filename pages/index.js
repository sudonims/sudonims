import Home from '../components/Home';
import RightSidebar from '../components/RightSidebar';
import Sidebar from '../components/Sidebar';
import Head from 'next/head';
import { Flex } from '@chakra-ui/layout';
import About from '../components/About';

export default function Main() {
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
      <RightSidebar display={{ base: 'none', md: 'flex' }} />
      <Flex direction="column">
        <Home />
        {/* <About /> */}
      </Flex>
      <script defer src="/static/js/mousetrail.js"></script>
    </>
  );
}
