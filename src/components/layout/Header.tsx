import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import Link from "next/link";


import { ThemeToggle } from "components/layout";
import { WalletConnect } from "components/wallet";

const Header = () => {
  return (
    
    <Box borderBottom='1px' py={5}  px={5}  background={'black'}>

  
    <Flex as="header" width="full" align="center" >
      
      <Heading as="h1" size="md" mr={10}>
        <Link href="/"><h1 className="light-gold">INSIGNIA</h1></Link>
      </Heading>

      <Box  mr={10}>
        <p><a href="https://getinsignia.gitbook.io/whitepaper/" target="_blank" rel="noreferrer" className="px-4 light-gold">Whitepaper</a></p>
      </Box>


      <Box mr={10} >
        <p className="light-gold">Marketplace</p>
      </Box>

      
        <Box mr={10} border='1px' borderColor='gray.200' px={5} py={2} borderRadius='10px' background={'#bd8d4c'}>
          <Link href="/setup">Play Now</Link>
        </Box>
      
      


      <Spacer />

      <Box marginLeft="auto">
        <ThemeToggle />
        <WalletConnect />
      </Box>
    </Flex>
    </Box>
  );
};

export default Header;
