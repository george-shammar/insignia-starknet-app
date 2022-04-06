import { Box, Heading } from "@chakra-ui/react";
import SomeText from "components/samples/SomeText";
import { MintTokens, Transactions } from "components/wallet";
import Link from "next/link";

const Play = () => {
  return (
    <Box align="center">

        <Heading as="h1" size='2xl' mr={10}>
          <h1 className="pt-5 head">CREATE GAME ASSET</h1>
        </Heading>
                      
        {/* <Box mb={8} maxW={800} w="full" h="full" d="flex" flexDirection="column" align="center">
          <SomeText />
          <Box flex="1 1 auto"> */}
            {/* <Transactions /> */}
            {/* <MintTokens />
          </Box>
        </Box>
        <Box>
          <Link href="/download">Download Insignia</Link>
        </Box> */}
    </Box>
    
  );
};

export default Play;