import About from '../components/About';
import RightSidebar from '../components/RightSidebar';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <>
      <Sidebar />
      <canvas id="canvas"></canvas>
      <About />
      <RightSidebar display={{ base: 'none', md: 'flex' }} />
      <script src="/static/js/mousetrail.js"></script>
    </>
  );
}
