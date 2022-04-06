import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text d="flex">
        <Box mr={5}>
          Insignia
        </Box>
        {new Date().getFullYear()}
        
      </Text>
    </Flex>
  );
};

export default Footer;
