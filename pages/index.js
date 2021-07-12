import { useEffect } from 'react';
import { Heading } from '@chakra-ui/layout';
import Sidebar from '../components/Sidebar';

export default function Home() {
  useEffect(() => {}, []);

  return (
    <>
      <Sidebar />
      <section className="section">
        <Heading as="h1">Hey, I'm Nimish Shah</Heading>
        {/* <canvas id="canvas"></canvas> */}
      </section>

      {/* <script src="/static/js/mousetrail.js"></script> */}
    </>
  );
}
