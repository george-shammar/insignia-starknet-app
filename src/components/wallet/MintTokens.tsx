import {
  Box,
  Button,
  Code,
  Link,
  Text,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { stark } from "starknet";
import React, { useEffect, useState } from "react";

import { useStarknet } from "context";

const MintTokens = () => {
  const [status, setStatus] = useState("");
  const [link, setLink] = useState("");

  const CONTRACT_ADDRESS =
    "0x06a09ccb1caaecf3d9683efe335a667b2169a409d19c589ba1eb771cd210af75";

  const { connected, library } = useStarknet();
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });

  const { getSelectorFromName } = stark;
  const selector = getSelectorFromName("mint");

  const mintTokens = async () => {
    const mintTokenResponse = await library.addTransaction({
      type: "INVOKE_FUNCTION",
      contract_address: CONTRACT_ADDRESS,
      entry_point_selector: selector,
      calldata: [
        "25337092028752943692105536859798085962999747221745650943814125673320853150",
        "10000000000000000000",
        "0",
      ],
      
    });
    // eslint-disable-next-line no-console
    setStatus("Creating your Asset. Please wait... ");
    console.log(mintTokenResponse);
    setLink("https://bafybeibubx5e4k4ycoag5p54s3lmhnbcbny2ln6drydgj3oomxpzmuqn5a.ipfs.dweb.link/");
  };

  return (
    <Box>
      {/* <Text as="h2" marginTop={4} fontSize="2xl">
      Create Game Asset
      </Text> */}
      <Box >
        {/* <Text>Insignia Contract Address:</Text>
        <Code marginTop={4} w="fit-content"> */}
          {/* {`${CONTRACT_ADDRESS.substring(0, 4)}...${CONTRACT_ADDRESS.substring(
            CONTRACT_ADDRESS.length - 4
          )}`} */}
          {/* <Link
            isExternal
            textDecoration="none !important"
            outline="none !important"
            boxShadow="none !important"
            href={`https://voyager.online/contract/${CONTRACT_ADDRESS}`}
          >
            {CONTRACT_ADDRESS}
          </Link>

          

        </Code> */}

       <p className="light-gold my-3">{status}</p>
       <p className="light-gold my-3"><a href="https://bafybeibubx5e4k4ycoag5p54s3lmhnbcbny2ln6drydgj3oomxpzmuqn5a.ipfs.dweb.link/" 
       target="_blank">
         {link}</a>
      </p>

        {connected && (
          <Button
          
            // my={4}
            // w="fit-content"
            maxW={200}
            onClick={() => {
              mintTokens();
            }}
          >
            Create
          </Button>  

        )}
        {!connected && (
          <Box
            // backgroundColor={colorMode === "light" ? "gray.200" : "gray.500"}
            padding={4}
            marginTop={4}
            borderRadius={4}
          >
            <Box fontSize={textSize}>
              Connect to ArgentX Wallet to start playing.
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MintTokens;
