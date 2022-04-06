import { Box, Heading } from "@chakra-ui/react";
import SomeText from "components/samples/SomeText";
import { MintTokens, Transactions } from "components/wallet";
import Link from "next/link";

const Play = () => {
  return (
    

    
    <Box align="center">



    <div className="play">


    <div className='d-flex steps px-5 pt-5 font-meridian'>
        <Link href="/setup">
          <div >
              <p className='step-figure hightlighted py-2 rounded'>1</p>
              
              <p className='mt-3'>Wallet Set up</p>
          
          </div>
        </Link>

        <p className='line'>__________</p>

        <Link href="/token" >
          <div>

              <p className='step-figure two py-2 rounded'>2</p>
              <p className='mt-3'>Get Insignia Token</p>
            </div>
        </Link>

        <p className='line'>__________</p>

        <div>
              <p className='step-figure highlighted3 py-2 rounded'>3</p>
              <p className='mt-3'>Create Game Asset</p>
        </div>
        

      <p className='line'>__________</p>
      
      <Link href="/download" > 
            <div>
              <p className='step-figure py-2 rounded'>4</p>
              <p className='mt-3'>Download & Play</p> 
            </div>
        </Link>
      
      
      
      
   </div>



        <Heading as="h1" size='2xl' mr={10}>
          <h1 className="pt-5 head">CREATE GAME ASSET</h1>
        </Heading>

        <Box maxW={800}>
          <div className="border py-5 mt-5 shadow-lg rounded-3 wallet-space height">
           

              <div>
                <SomeText />
              </div>


              <div className="px-2">
                <h6 className="bold my-3 action font-meridian">Mint A Game Asset</h6>
              </div>
              
             <Box align="center"><MintTokens /></Box> 
                            
          </div>
        </Box>
       

        <Box maxW={200}>
          <div className="font-meridian rounded-pill mb-0 mt-5 py-2">
              <Link href="/download">Download Insignia</Link>
          </div>
          
        </Box>

        </div>
    </Box>

    
  );
};

export default Play;