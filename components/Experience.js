import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Badge,
  Image,
  List,
  ListItem,
  ListIcon,
  Button,
  ButtonGroup,
  Center,
  Heading,
  VStack,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Fade } from 'react-reveal';
import { useState, useEffect } from 'react';
// import ExperienceArray from './ExperienceArray';
// import TagsArray from './TagsArray';

export default function Experience({ color }) {
  const [experience] = useState([
    {
      tags: 'Societe Generale GSC',
      position: 'Software Engineer',
      duration: 'Jan 2022 - Present',
      badges: ['ReactJS', 'Java Spring', 'Python', 'Bash', 'Pvt Cloud', 'K8s'],
      listItems: [
        'Lead frontend development for revamping project',
        'Automated manual tasks - 95% more efficiency',
        'Module performance improvement - 60%',
      ],
      company: 'Societe Generale Global Solution Center',
    },
    {
      tags: 'Sensight Labs',
      position: 'Fullstack Enginnering Intern',
      duration: 'Oct 2021 - December 2021',
      badges: ['Python', 'Anaconda', 'HTML/CSS', 'MongoDB'],
      listItems: [
        'MongoDB Query Optimization - Indexing - 50% improvement',
        'ETL - Data analysis of business data',
        'UI Development - UI page changes',
      ],
      company: 'Friendly Brands Club',
    },
    {
      tags: 'Antriksh Labs Pvt Ltd',
      position: 'Software Engineer',
      duration: 'Apr 2020 - December 2021',
      badges: ['AWS EC2', 'Flask', 'ReactJS', 'Bash', 'Cryptography'],
      listItems: [
        'Lead development for homepage and Orion-Nebula product',
        'Worked on developing proxy gateway for security reasons',
        'Use of cryptographic algorithms for secure file download protocol',
      ],
      company: 'Antriksh Labs Pvt Ltd',
    },
  ]);

  const [options] = useState([
    {
      value: 'Societe Generale GSC',
    },
    {
      value: 'Sensight Labs',
    },
    {
      value: 'Antriksh Labs Pvt Ltd',
    },
  ]);

  const [selected, setSelected] = useState('');

  useEffect(() => {
    if (options.length > 0) {
      setSelected(options[0].value);
    }
  }, []);

  const handleSelected = (value) => {
    setSelected(value);
  };

  return (
    <section id="experience" className="section">
      <Flex justifyContent={'center'} flexDirection={'column'} height={'100%'}>
        <Container>
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 20, md: 36 }}
          >
            <Stack align="center" direction="row" px={4}>
              <VStack mx={4}>
                <Heading
                  letterSpacing="wider"
                  width={{ base: '100%', md: null }}
                  textAlign={{ base: 'center', md: 'unset' }}
                  fontSize={{ base: '4xl', md: '7xl' }}
                >
                  Experience
                </Heading>
                <Box height="1px" width="30%" backgroundColor="aliceblue"></Box>
              </VStack>
            </Stack>
            <Center px={4}>
              <ButtonGroup variant="outline">
                {options.map((option, i) => (
                  <Button
                    key={i}
                    colorScheme={selected === option.value ? 'twitter' : 'gray'}
                    onClick={() => handleSelected(option.value)}
                  >
                    {option.value}
                  </Button>
                ))}
              </ButtonGroup>
            </Center>
            <Stack px={4} spacing={4}>
              {experience
                .filter((exp) => exp.tags.includes(selected))
                .map((exp) => (
                  <Fade key={exp.company} bottom>
                    <Card size="sm">
                      <CardHeader>
                        <Flex justifyContent="space-between">
                          <HStack>
                            {/* <Image src={exp.image} h={50} /> */}
                            <Box px={2} align="left">
                              <Text fontWeight={600}>{exp.company}</Text>
                              <Text>{exp.position}</Text>
                            </Box>
                          </HStack>
                          <Text px={2} fontWeight={300}>
                            {exp.duration}
                          </Text>
                        </Flex>
                      </CardHeader>
                      <CardBody>
                        <Flex>
                          <List align="left" spacing={3}>
                            {exp.listItems.map((item, index) => (
                              <ListItem key={index}>
                                <ListIcon
                                  boxSize={6}
                                  as={ChevronRightIcon}
                                  color={`${color}.500`}
                                />
                                {item}
                              </ListItem>
                            ))}
                          </List>
                        </Flex>
                      </CardBody>
                      <CardFooter>
                        <HStack spacing={2}>
                          {exp.badges.map((badge) => (
                            <Badge
                              key={badge}
                              // colorScheme={badge}
                            >
                              {badge}
                            </Badge>
                          ))}
                        </HStack>
                      </CardFooter>
                    </Card>
                  </Fade>
                ))}
            </Stack>
          </Stack>
        </Container>
      </Flex>
    </section>
  );
}
