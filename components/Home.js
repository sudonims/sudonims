import { Heading, Container, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <section className="section">
      <Container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        height="100%"
        width="100%"
        maxWidth="100%"
        marginLeft="10vw"
        marginRight="10vw"
      >
        <Text
          display={{ base: 'none', md: 'block' }}
          fontSize="xl"
          marginBottom="1"
          letterSpacing="wide"
        >
          &nbsp;Hi, my name is
        </Text>
        <Text display={{ base: 'block', md: 'none' }} fontSize="md">
          Hi, my name is
        </Text>
        <Heading
          display={{ base: 'none', md: 'block' }}
          size="4xl"
          as="h1"
          marginBottom="1"
          letterSpacing="wide"
        >
          Nimish Shah.
        </Heading>
        <Heading display={{ base: 'block', md: 'none' }} size="2xl" as="h1">
          Nimish Shah.
        </Heading>
        <Heading
          display={{ base: 'none', md: 'block' }}
          color="gray.400"
          size="4xl"
          as="h2"
          letterSpacing="wide"
        >
          I develop things for the web
        </Heading>
        <Heading
          display={{ base: 'block', md: 'none' }}
          color="gray.400"
          size="2xl"
          as="h2"
        >
          I develop things for the web
        </Heading>
        <div style={{ maxWidth: '40%', marginTop: 20, marginBottom: 20 }}>
          <Text display={{ base: 'none', md: 'block' }} letterSpacing="wide">
            I am a <b>Software Engineer</b> good at developing web interfaces.
            Always wanting to try out new things, I sometimes accidently also
            develop small useful routines.
          </Text>
          <Text display={{ base: 'block', md: 'none' }}>
            I am a <b>Software Engineer</b> good at developing web interfaces.
            Always wanting to try out new things, I sometimes accidently also
            develop small useful routines.
          </Text>
        </div>
        <Text color="#64ffda">
          <a className="awesome" href="mailto:nimishshah2000@gmail.com">
            Let's make something awesome !!
          </a>
        </Text>
      </Container>
      <canvas id="canvas"></canvas>
    </section>
  );
}
