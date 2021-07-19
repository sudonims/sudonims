import { Box, Flex } from '@chakra-ui/react';

import Home from '../components/Home';
import RightSidebar from '../components/RightSidebar';
import Sidebar from '../components/Sidebar';
import Head from 'next/head';
import About from '../components/About';
import SocialBar from '../components/SocialBar';

const Divider = () => {
  return (
    <Flex justifyContent="center">
      <Box height="1px" width="30%" backgroundColor="aliceblue"></Box>
    </Flex>
  );
};

export default function Main() {
  return (
    <>
      <Head>
        <title>Nimish Shah</title>
      </Head>
      <SocialBar />
      <Sidebar
        linkItems={[
          { href: '#about', front: 'About', back: 'Go' },
          {
            href: '#exp',
            front: 'Skills',
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
      <Home />
      <Divider />
      <About />
      <canvas id="canvas"></canvas>
      <script defer src="/static/js/mousetrail.js"></script>
    </>
  );
}
