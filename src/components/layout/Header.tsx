import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import Link from "next/link";


import { ThemeToggle } from "components/layout";
import { WalletConnect } from "components/wallet";

const Header = () => {
  return (
    
    
    <Flex as="header" width="full" align="center" >
      
      <Heading as="h1" size="md" mr={10}>
        <Link href="/">INSIGNIA</Link>
      </Heading>

      <Box  mr={10}>
        <p><a href="https://getinsignia.gitbook.io/whitepaper/" target="_blank" rel="noreferrer" className="px-4 white">Whitepaper</a></p>
      </Box>


      <Box mr={10} >
        <p>Marketplace</p>
      </Box>

      <Box mr={10} border='1px' borderColor='gray.200' px={5} py={2}>
        <p>Play Now</p>
      </Box>


      <Spacer />

      <Box marginLeft="auto">
        <ThemeToggle />
        <WalletConnect />
      </Box>
    </Flex>
  );
};

export default Header;
