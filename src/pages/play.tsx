import { Box } from "@chakra-ui/react";
import SomeText from "components/samples/SomeText";
import { MintTokens, Transactions } from "components/wallet";
import Link from "next/link";

const Play = () => {
  return (
    <div>

                      <h2 className="className='font-meridian near-wallet pt-5">Create Game Asset</h2>
                        <p>Select an asset category below and mint one or purchase one in the marketplace to start playing</p>
                      
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
    </div>
    
  );
};

export default Play;