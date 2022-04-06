import { Box } from "@chakra-ui/react";
import SomeText from "components/samples/SomeText";
import { MintTokens, Transactions } from "components/wallet";

const Play = () => {
  return (
    <div>
        <Box mb={8} maxW={800} w="full" h="full" d="flex" flexDirection="column" align="center">
          <SomeText />
          <Box flex="1 1 auto">
            {/* <Transactions /> */}
            <MintTokens />
          </Box>
        </Box>
    </div>
    
  );
};

export default Play;