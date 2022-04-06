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

        <Box maxW={800}>
          <div className="border py-5 mt-5 shadow-lg rounded-3 height">
           

              <div>
                <SomeText />
              </div>


              <div className="px-2">
                <h6 className="bold my-3 action font-meridian">Mint A Game Asset</h6>
              </div>
              
             <Box align="center"><MintTokens /></Box> 
                            
          </div>
        </Box>
       



                      
        {/* <Box mb={8} maxW={800} w="full" h="full" d="flex" flexDirection="column" align="center"> */}
          {/* <SomeText /> */}
          {/* <Box flex="1 1 auto">  */}
            {/* <Transactions /> */}
             {/* <MintTokens /> */}
          {/* </Box>
        </Box> */}
        <Box maxW={200}>
          <div className="mt-5 border rounded-pill py-2">
              <Link href="/download">Download Insignia</Link>
          </div>
          
        </Box>
    </Box>
    
  );
};

export default Play;