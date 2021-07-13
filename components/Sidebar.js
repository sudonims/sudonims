import {
  IconButton,
  Box,
  Flex,
  Drawer,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

export default function Sidebar({ linkItems }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box position="absolute" minH="100vh">
      <SidebarContent
        linkItems={linkItems}
        onClose={() => onClose}
        display={{ base: 'none', md: 'flex' }}
        width="10vw"
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs"
      >
        <DrawerContent>
          <SidebarContent
            linkItems={linkItems}
            width="80%"
            display={{ base: 'flex', md: 'none' }}
            onClose={onClose}
          />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
    </Box>
  );
}

const SidebarContent = ({ onClose, linkItems, ...rest }) => {
  return (
    <Flex justifyContent="flex-end" height="100vh" direction="column" {...rest}>
      {linkItems.map((link, i) => (
        <div key={i} className="flip">
          <a onClick={onClose} href={link.href}>
            <div className="front">{link.front}</div>
            <div className="back">{link.back}</div>
          </a>
        </div>
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
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        icon={HamburgerIcon}
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
      />
    </Flex>
  );
};
