import { Icon } from '@chakra-ui/icons';
import { Flex, Center, Tooltip, Button } from '@chakra-ui/react';
import { RiGithubLine, RiLinkedinLine, RiTwitterLine } from 'react-icons/ri';
export default function SocialBar() {
  return (
    <Flex
      display={{ base: 'none', md: 'block' }}
      direction="row"
      position="fixed"
    >
      <Center height="40px" width="100vw">
        <Flex padding="10px" direction="row" borderRadius="10px">
          <Tooltip label="Github" placement="bottom">
            <Button
              colorScheme="none"
              color="white"
              onClick={() =>
                window.open('https://github.com/sudonims', '_blank').focus()
              }
            >
              <Icon as={() => <RiGithubLine size={30} />} />
            </Button>
          </Tooltip>
          <Tooltip label="Twitter" placement="bottom">
            <Button
              colorScheme="none"
              color="white"
              onClick={() =>
                window.open('https://twitter.com/sudonimsh', '_blank').focus()
              }
            >
              <Icon as={() => <RiTwitterLine size={30} />} />
            </Button>
          </Tooltip>
          <Tooltip label="LinkedIn" placement="bottom">
            <Button
              colorScheme="none"
              color="white"
              onClick={() =>
                window
                  .open('https://www.linkedin.com/in/sudonims', '_blank')
                  .focus()
              }
            >
              <Icon as={() => <RiLinkedinLine size={30} />} />
            </Button>
          </Tooltip>
        </Flex>
      </Center>
    </Flex>
  );
}
