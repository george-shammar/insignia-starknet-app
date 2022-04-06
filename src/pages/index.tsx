import { Box } from "@chakra-ui/react";
import 'animate.css';
import React, { Component, useRef } from "react";
// import bike from "../assets/firstVideo.mp4";

// import SomeText from "components/samples/SomeText";
// import { MintTokens, Transactions } from "components/wallet";

const FIRST_PAGE = '5_SECONDS';
const SECOND_PAGE = '15_SECONDS';

const FirstComponent = () => {
  
  
  return (
    <div className="bckg">
    <div className="front animate__animated animate__fadeIn">
      
      
  
  
        <div className="overlay">
          <h1 className="title-one gold font-medieval">INSIGNIA</h1>
          <h2 className="title-two white">THE MILITARY STRATEGY GAME THAT PAYS TO PLAY</h2>
         
        </div>

       
        
    </div>
      <Box align="center">
        <a href="https://getinsignia.gitbook.io/whitepaper/" target="_blank"  rel="noreferrer">
          <p className="font-meridian white enter rounded-pill mt-3 py-2">Whitepaper</p>
        </a>
      </Box>
    </div>
  )
 
};

const SecondComponent = () => (
  <div className="bckg2">
      <div className="frame animate__animated animate__fadeIn second">
      

      <div className="overlay">
        <p className="title-three gold font-medieval">OWN, RENT $ BORROW UNIQUE NFTs </p>
        {/* <p className="title-two white">A NEW WORLD OF PLAY-TO-EARN</p> */}
      </div>
      
    
      </div>
      <Box align="center">
        <a href="https://getinsignia.gitbook.io/whitepaper/" target="_blank"  rel="noreferrer">
          <p className="font-meridian white enter rounded-pill mt-3 py-2 center">Whitepaper</p>
        </a>
      </Box>
  </div>
  
  
);





// const Home = () => {
//   return (
    
    
//   );
// };

class Home extends Component {

  state = {
    currentPage: FIRST_PAGE
  };

  componentDidUpdate() {
    const {currentPage} = this.state;
    const isFirst = currentPage === FIRST_PAGE;

    if (isFirst) {
      this._showSecondPageDelayed();
    } else {
      this._showFirstPageDelayed();
    }
  }

  componentDidMount() {
    this._showSecondPageDelayed();
  };

  _showSecondPageDelayed = () => setTimeout(() => {this.setState({currentPage: SECOND_PAGE})}, 10000);

  _showFirstPageDelayed = () => setTimeout(() => {this.setState({currentPage: FIRST_PAGE})}, 10000);

  render() {
    const {currentPage} = this.state;
    const isFirst = currentPage === FIRST_PAGE;
    const ComponentToRender =  isFirst ? FirstComponent : SecondComponent;

    return <ComponentToRender/>;
  }
}

export default Home;
