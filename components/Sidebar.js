import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

// import {
//   FiHome,
//   FiTrendingUp,
//   FiCompass,
//   FiStar,
//   FiSettings,
//   FiMenu,
// } from 'react-icons/fi';

const LinkItems = [
  { href: '', front: 'About', back: 'Go', name: 'Home', icon: <>Icon</> },
  {
    href: '',
    front: 'Experience',
    back: 'Go',
    name: 'Trending',
    icon: <>Icon</>,
  },
  { href: '', front: 'Work', back: 'Go', name: 'Explore', icon: <>Icon</> },
  {
    href: '',
    front: 'Contact',
    back: 'Go',
    name: 'Favourites',
    icon: <>Icon</>,
  },
  { href: '', front: 'text', back: 'Go', name: 'Settings', icon: <>Icon</> },
];

export default function Sidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box position="absolute" minH="100vh">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="lg"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      {/* <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box> */}
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  // return (
  //   <Box w={{ base: 'full', md: 60 }} pos="fixed" h="full" {...rest}>
  //     <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
  //       <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
  //     </Flex>
  //     {LinkItems.map((link) => (
  //       <NavItem key={link.name}>{link.name}</NavItem>
  //     ))}
  //   </Box>
  // );

  return (
    <Flex
      width="10vw"
      justifyContent="flex-end"
      height="100vh"
      direction="column"
    >
      {LinkItems.map((link) => (
        <div className="flip">
          <a href={link.href}>
            <div className="front">{link.front}</div>
            <div className="back">{link.back}</div>
          </a>
        </div>
        // <NavItem key={link.name}>{link.name}</NavItem>
      ))}
      <Box
        height="60"
        width="1px"
        backgroundColor="slategray"
        display="block"
        margin="0px auto"
      ></Box>
    </Flex>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        // icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
