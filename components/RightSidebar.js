import { Box, Flex, Text } from '@chakra-ui/react';

export default function RightSidebar({ ...rest }) {
  return (
    <Flex
      justifyContent="flex-start"
      height="100vh"
      direction="column"
      position="fixed"
      width="10vw"
      top="0"
      right="0"
      {...rest}
    >
      <Box
        height="40"
        width="1px"
        backgroundColor="slategray"
        display="block"
        margin="0px auto"
      ></Box>
      <a href="mailto:nimishshah2000@gmail.com" className="text-rotate">
        nimishshah2000@gmail.com
      </a>
    </Flex>
  );
}
