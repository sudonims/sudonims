import { Box, Flex } from '@chakra-ui/react';

import Home from '../components/Home';
import RightSidebar from '../components/RightSidebar';
import Sidebar from '../components/Sidebar';
import Head from 'next/head';
import About from '../components/About';
import SocialBar from '../components/SocialBar';
import Skills from '../components/Skills';
import Work from '../components/Work';

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
      <canvas id="canvas"></canvas>
      <SocialBar />
      <Sidebar
        linkItems={[
          { href: '#about', front: 'About', back: 'Go' },
          { href: '#work', front: 'Work', back: 'Go' },
          {
            href: '#skills',
            front: 'Skills',
            back: 'Go',
          },
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
      <Divider />
      <Work />
      {/* <Skills /> */}
      <script defer src="/static/js/mousetrail.js"></script>
    </>
  );
}
