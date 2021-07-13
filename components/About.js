import { Heading, Flex } from '@chakra-ui/react';

export default function About() {
  return (
    <section className="section">
      <Flex justifyContent="center" flexDirection="column" height="100%">
        <Flex margin="0px 100px" direction="row" align="flex-start">
          <Heading letterSpacing="wider" fontSize="7xl">
            Me & Myself
          </Heading>
        </Flex>
        <Flex>
          <div className="image">
            <div className="image-grey-right"></div>
            <div className="image-grey-middle"></div>
            <div className="image-grey-left"></div>
          </div>
          {/* <img src="/static/image/profile.jpg" /> */}
        </Flex>
      </Flex>
    </section>
  );
}
