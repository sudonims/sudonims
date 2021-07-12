import { Heading, Container, Text } from '@chakra-ui/react';

export default function About() {
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
        <Text display={{ base: 'none', md: 'block' }} fontSize="lg">
          Hi, my name is
        </Text>
        <Text display={{ base: 'block', md: 'none' }} fontSize="md">
          Hi, my name is
        </Text>
        <Heading display={{ base: 'none', md: 'block' }} size="4xl" as="h1">
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
      </Container>
    </section>
  );
}
