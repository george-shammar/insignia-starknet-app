import { Box } from "@chakra-ui/react";
import SomeText from "components/samples/SomeText";
import { MintTokens, Transactions } from "components/wallet";
import Link from "next/link";

const Play = () => {
  return (
    <Box align="center">

                      <p className="font-meridian pt-5">Create Game Asset</p>
                        
                      
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