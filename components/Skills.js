import { Heading, Flex, Text, Box } from '@chakra-ui/react';

export default function Skills() {
  const mouseEnter = (e) => {
    console.log(e);
  };
  return (
    <section onMouseEnter={mouseEnter} id="skills" className="section">
      <Flex justifyContent="center" flexDirection="column" height="100%">
        <Flex margin={{ md: '20px 15%' }} direction="row" align="flex-start">
          <Heading
            letterSpacing="wider"
            width={{ base: '100%', md: null }}
            textAlign={{ base: 'center', md: 'unset' }}
            fontSize={{ base: '4xl', md: '7xl' }}
          >
            Me & Myself
          </Heading>
        </Flex>
        <Flex
          display={{ base: 'none', md: 'flex' }}
          margin={{ md: '20px 10%' }}
          justifyContent="flex-start"
        >
          <Box height="1px" width="30%" backgroundColor="aliceblue"></Box>
        </Flex>
        <Flex
          width={{ base: '100%' }}
          margin={{ md: '20px 15%' }}
          direction={{ base: 'column', md: 'row' }}
          align="flex-start"
        >
          <Flex
            direction="column"
            maxWidth={{ md: '40%' }}
            alignContent="space-around"
          >
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              letterSpacing="wide"
              margin="10px"
            >
              I am a Full Stack Web Developer located in India. I enjoy creating
              things for the web. I have a passion for trying out new things
              that I find interesting. Started Web Development for a college
              project, I grew interest in it and haven&#39;t looked back since.
            </Text>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              letterSpacing="wide"
              margin="10px"
            >
              Problem solver, well organized with high attention to details. I
              am a tech enthusiast and like to understand core things about
              tech.
            </Text>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              letterSpacing="wide"
              margin="10px"
            >
              Apart from programming I like playing Badminton, outdoor
              activities, Photography, Watching movies n TV shows
            </Text>
          </Flex>
          <Flex
            alignContent={{ base: 'center' }}
            margin={{ md: '-10% 0px 0px 15%' }}
            display={{ base: 'none', md: 'flex' }}
          >
            <div className="image">
              <div className="image-grey-right"></div>
            </div>
          </Flex>
        </Flex>
      </Flex>
    </section>
  );
}
