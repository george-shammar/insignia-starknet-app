import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import Link from "next/link";


import { ThemeToggle } from "components/layout";
import { WalletConnect } from "components/wallet";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      
      <Heading as="h1" size="md">
        <Link href="/">INSIGNIA</Link>
      </Heading>

      <Spacer />

      <div>
        <p><a href="https://getinsignia.gitbook.io/whitepaper/" target="_blank" rel="noreferrer" className="px-4 white">Whitepaper</a></p>
      </div>

      <Spacer />

      <div>
        <p>Marketplace</p>
      </div>

      <Spacer />
          
      <Box marginLeft="auto">
        <ThemeToggle />
        <WalletConnect />
      </Box>
    </Flex>
  );
};

export default Header;
