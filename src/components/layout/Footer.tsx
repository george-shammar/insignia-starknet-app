import { Box, Flex, Link, Text, Spacer } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text d="flex">
        <Box mr={5}>
          Insignia
        </Box>
        {new Date().getFullYear()}

       

        <Box mx={10}>
          <a href="https://discord.gg/A4xfZENW2Z" target="_blank" rel="noreferrer">Discord</a>
        </Box>

        <Box>
          <a href="https://twitter.com/Insignia_verse?s=03" target="_blank" rel="noreferrer">Twitter</a>
        </Box>
        
      </Text>
    </Flex>
  );
};

export default Footer;
