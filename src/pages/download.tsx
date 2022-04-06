import { Box, Heading, Link } from "@chakra-ui/react";

const Download = () => {
  return (
    
        <Box  align="center">
          
        <div className='play'>
        
        <div>
         




        <div className='d-flex steps px-5 pt-5 font-meridian'>
        <Link href="/setup">
          <div >
              <p className='step-figure hightlighted py-2 rounded'>1</p>
              
              <p className='mt-3'>Wallet Set up</p>
          
          </div>
        </Link>
            
        <p className='line'>__________</p>
          
        <Link to="/GetToken" className='child'>
          <div>

              <p className='step-figure two py-2 rounded'>2</p>
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

        <Link to="/DownloadGame" className='child'> 
            <div>
              <p className='step-figure highlighted4 py-2 rounded'>4</p>
              <p className='mt-3'>Download & Play</p> 
            </div>
        </Link>
      </div>










        </div>
        <div className='font-meridian near-wallet pt-5'>
        <Heading as="h1" size='2xl' mr={10}>
          <h1 className="pt-5 head">GET INSIGNIA</h1>
        </Heading>
          <p className=' mt-3'>Select your preferred platform below.... Have Fun!!</p>
         
        </div>
        <div className='platform'>
          <div className='d-flex'>
            <p className="wallet-scroll font-meridian rounded-pill mb-0 mt-5 py-2">PC</p>
            <p className="wallet-scroll font-meridian rounded-pill mb-0 mt-5 py-2">Android</p>
            <p className="wallet-scroll font-meridian rounded-pill mb-0 mt-5 py-2">IOS</p>
          </div>
            
            <div className='d-flex'>
              <p className="wallet-scroll font-meridian rounded-pill mb-0 mt-5 py-2">PS5</p>
              <p className="wallet-scroll font-meridian rounded-pill mb-0 mt-5 py-2">Xbox</p>
              <p className="wallet-scroll font-meridian rounded-pill mb-0 mt-5 py-2"> Nintendo Switch</p>
             
            </div>
            
           
        </div>
       
        
          {/* <div className='d-flex setup-navigation pt-5 mb-5'>
              <Link to="GetToken" className='font-meridian back'><p><img src={backwardArrow} alt="" className="arrow"/> Back</p></Link>
             <Link to="/" className='font-meridian back'><p>Next <img src={forwardArrow} alt="" className="arrow"/></p></Link> 
             
          </div> */}
         </div>



































        </Box>
    
    
  );
};

export default Download;