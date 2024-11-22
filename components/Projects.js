import { Heading, Flex, Box, useBreakpointValue } from '@chakra-ui/react';
import ProjectTile from './ProjectTile';
import { useState } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      name: 'Private Key Manager',
      buttons: [],
      description:
        "This is a simple Private Key Manager. Inspired by the Bitcoin core technology for wallet management, it doesn't need an internet connection. It encrypts your entered data to a file stored locally, secured with AES algorithm using private keys generated with PR-Pass.",
      badges: [
        { text: 'Flutter', colorScheme: 'teal' },
        { text: 'Private Key Management', colorScheme: 'orange' },
        { text: 'Cryptography', colorScheme: 'purple' },
      ],
    },
    {
      name: 'ExVTOP (Extended VTOP)',
      buttons: [],
      description:
        'Built a simple chrome extension with aim to help VITians in their academics. The extension has 4000+ active users with average rating of 4.5+ stars',
      badges: [
        { text: 'JavaScript', colorScheme: 'yellow' },
        { text: 'DOM', colorScheme: 'yellow' },
        { text: 'Chrome Extensions', colorScheme: 'gray' },
        { text: 'Web Crawling', colorScheme: 'red' },
      ],
    },
    {
      name: 'PR Pass',
      buttons: [],
      description:
        'A tool to generate strong passwords based on user input. Takes two arguments: a lucky number and a word, generating a digest adhering to strong password policies.',
      badges: [{ text: 'Number Theory', colorScheme: 'blue' }],
    },
    {
      name: 'A Simple File System',
      buttons: [],
      description:
        'A file system written in C, flashable on flash drives and HDDs. Developed for an Operating Systems project in the third semester.',
      badges: [
        { text: 'GNU/Linux', colorScheme: 'green' },
        { text: 'File Systems', colorScheme: 'yellow' },
        { text: 'Linux', colorScheme: 'blue' },
        { text: 'Linux Kernel', colorScheme: 'teal' },
        { text: 'Operating Systems', colorScheme: 'orange' },
        { text: 'C (Programming Language)', colorScheme: 'purple' },
      ],
    },
    {
      name: 'Secured end to end encrypted communication',
      buttons: [],
      description:
        'Engineered an innovative cryptographic solution creating unique symmetric key per server request, guaranteeing end-to-end encryption; bolstered data protection and minimized security breaches by 40%',
      badges: [
        { text: 'React.js', colorScheme: 'cyan' },
        { text: 'JavaScript', colorScheme: 'yellow' },
        { text: 'NodeJS', colorScheme: 'green' },
        { text: 'Cryptography', colorScheme: 'purple' },
        { text: 'Cipher', colorScheme: 'red' },
      ],
    },
    {
      name: 'OP_RETURN nostr',
      buttons: [],
      description:
        'Created a bot based on the nostr protocol which targets all the incoming OP_RETURN transactions on the Bitcoin network and posts the message part. Ufses Bitcoin core compiled with ZMQ relays and python asyncio to constantly connect to the network.',
      badges: [
        {
          text: 'Bitcoin',
          colorScheme: 'orange',
        },
        {
          name: 'Golang',
          colorScheme: 'blue',
        },
        {
          name: 'Python',
          colorScheme: 'blue',
        },
        {
          name: 'ZMQ - TCP',
          colorScheme: 'gray',
        },
      ],
    },
    {
      name: 'CLI_FSM',
      buttons: [],
      description:
        'A file manager written in C with functionalities like directory traversal, viewing the current working directory, and performing file operations.',
      badges: [
        { text: 'GNU/Linux', colorScheme: 'green' },
        { text: 'C++', colorScheme: 'purple' },
        { text: 'Unix', colorScheme: 'gray' },
        { text: 'Ncurses', colorScheme: 'orange' },
        { text: 'Linux', colorScheme: 'blue' },
        { text: 'Linux Kernel', colorScheme: 'teal' },
        { text: 'Shell Scripting', colorScheme: 'yellow' },
      ],
    },
  ]);
  return (
    <section id="projects" className="section">
      <Flex
        justifyContent={'center'}
        flexDirection="column"
        height={'100%'}
        overflow={'auto'}
      >
        <Flex margin={{ md: '40px 15%' }} direction="row" align="flex-start">
          <Heading
            letterSpacing="wider"
            width={{ base: '100%', md: null }}
            textAlign={{ base: 'center', md: 'unset' }}
            fontSize={{ base: '4xl', md: '7xl' }}
          >
            Things I usually do
          </Heading>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="flex-start"
          flexWrap="wrap"
          gap={6}
          padding={4}
          overflow={'auto'}
        >
          {projects.map((proj, i) => (
            <Box
              key={i}
              flex="1 1 calc(20% - 1rem)" // Adjust to control the number of tiles per row
              minW={useBreakpointValue({
                base: '100%',
                md: 'calc(20% - 1rem)',
              })}
              maxW={useBreakpointValue({
                base: '100%',
                md: 'calc(20% - 1rem)',
              })} // Responsive sizing
              boxShadow="lg"
              borderRadius="lg"
            >
              <ProjectTile
                name={proj.name}
                description={proj.description}
                badges={proj.badges}
                buttons={proj.buttons}
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </section>
  );
}
