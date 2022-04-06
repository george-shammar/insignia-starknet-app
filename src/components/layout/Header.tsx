import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";


import { ThemeToggle } from "components/layout";
import { WalletConnect } from "components/wallet";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
       <Heading as="h1" size="md">
        <div><img src='../../assets/Logo.png' /></div>
      </Heading>

      <Heading as="h1" size="md">
        <Link href="/">Home</Link>
      </Heading>

      <div>
        <p><a href="https://getinsignia.gitbook.io/whitepaper/" target="_blank" rel="noreferrer" className="px-4 white">Whitepaper</a></p>
      </div>

      <div>
        <p>Marketplace</p>
      </div>

      <Box marginLeft="auto">
        <ThemeToggle />
        <WalletConnect />
      </Box>
    </Flex>
  );
};

export default Header;
