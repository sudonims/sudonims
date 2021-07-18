import { Heading, Container, Text, Box } from '@chakra-ui/react';

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
        marginLeft={{ md: '10vw' }}
        marginRight={{ md: '10vw' }}
      >
        <Text
          fontSize={{ base: 'md', md: 'xl' }}
          marginBottom="1"
          letterSpacing="wide"
        >
          &nbsp;Hi, my name is
        </Text>
        <Heading
          fontSize={{ base: '4xl', md: '8xl' }}
          as="h1"
          marginBottom="1"
          letterSpacing="wide"
        >
          Nimish Shah.
        </Heading>
        <Heading
          color="gray.400"
          fontSize={{ base: '2xl', md: '7xl' }}
          size="4xl"
          as="h2"
          letterSpacing="wide"
        >
          I develop things for the web
        </Heading>
        <Box margin="20px 0px" width={{ base: '100%', md: '40%', lg: '40%' }}>
          <Text noOfLines={[5, 4, 4]} letterSpacing="wider">
            I am a <b>Software Engineer</b> good at developing web interfaces.
            Always wanting to try out new things, I sometimes accidently also
            develop small useful routines.
          </Text>
        </Box>
        <Text color="#64ffda">
          <a className="awesome" href="mailto:nimishshah2000@gmail.com">
            Let&#39;s make something awesome !!
          </a>
        </Text>
      </Container>
      <canvas id="canvas"></canvas>
    </section>
  );
}
