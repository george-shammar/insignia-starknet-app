import { Box, Heading, Link } from "@chakra-ui/react";


const Token = () => {
  return (
    <Box  align="center">
          
        <div className='play'>
        
        <div>
         
        <div className='d-flex steps px-5 pt-5 font-meridian'>
        <Link href="/setup">
          <div >
              <p className='step-figure py-2 rounded'>1</p>
              
              <p className='mt-3'>Wallet Set up</p>
          
          </div>
        </Link>
            
        <p className='line'>__________</p>
          
        <Link href="/token" className='child'>
          <div>

              <p className='step-figure hightlighted2 two py-2 rounded'>2</p>
              <p className='mt-3'>Get Insignia Token</p>
            </div>
        </Link>
          
        <p className='line'>__________</p>

        <Link href="/play" className='child'> <div>
              <p className='step-figure py-2 rounded'>3</p>
              <p className='mt-3'>Create Game Asset</p>
            </div>
        </Link>

        <p className='line'>__________</p>

        <Link href="/download" className='child'> 
            <div>
              <p className='step-figure py-2 rounded'>4</p>
              <p className='mt-3'>Download & Play</p> 
            </div>
        </Link>
      </div>


        <Heading as="h1" size='2xl' mr={10}>
          <h1 className="pt-5 head">FUND WALLET</h1>
        </Heading>
        <p>Visit any of the exchanges below to fund your wallet. </p>

      <Box maxW={800} >
        <div className="border wallet-space py-5 mt-5 shadow-lg">
            <article className="px-2">
                        <h6 className="bold pb-3 action font-meridian">Get Some Token</h6>
                        <p className="font-meridian">
                          Skip this section if your wallet is already funded. Otherwise, follow the simple instructions in the link below to fund your wallet.
                        </p>
            </article>


            

            {/* <Image src={'../assets/argent.jpg' as any} alt="" className="near-logo"/> */}

            <div className="mt-5">
                    <a href="https://chrome.google.com/webstore/detail/argent-x/dlcobpjiigpikoobohmabehhmhfoodbb" target="_blank"  rel="noreferrer" className="wallet-scroll white font-meridian rounded-pill mb-0 mt-5 py-2 px-5">Get Funded</a>
            </div>
        </div>


</Box>






        </div>
       
        
       
        
          {/* <div className='d-flex setup-navigation pt-5 mb-5'>
              <Link to="GetToken" className='font-meridian back'><p><img src={backwardArrow} alt="" className="arrow"/> Back</p></Link>
             <Link to="/" className='font-meridian back'><p>Next <img src={forwardArrow} alt="" className="arrow"/></p></Link> 
             
          </div> */}
         </div>



































        </Box>
    
  );
};

export default Token;