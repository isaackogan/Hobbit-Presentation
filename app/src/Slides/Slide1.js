import {Component} from "react";
import styled from "styled-components";
import Questions from "../Components/Questions";
import {BackgroundClouds, SlideAudio} from "../Components/Basics";

const SlideContainer = styled.div`
  animation-fill-mode: forwards;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: #66ace8;

`;


const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background: url("./images/BagginsBgrd.png");
  background-size: cover;
  z-index: 10;
  position: fixed;
`;

const TitleText = styled.img`
  z-index: 30;
  right: 50px;
  top: 210px;
  opacity: 0.95;
  filter: brightness(0.9);
  position: fixed;
  
`;


class Slide1 extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <SlideContainer>
                <div>
                    <div className="bird-container bird-container-one"><div className="bird bird-one"/></div>
                    <div className="bird-container bird-container-two"><div className="bird bird-two"/></div>
                </div>
                <TitleText src={"./images/TitleText.png"} />
                <BackgroundClouds  src={"./images/BagginsClouds.png"} />
                <BackgroundImage />
                <SlideAudio autoplay={this.props.autoplay || false} loop={true} file={"./sounds/Wind.mp3"} />
            </SlideContainer>
        )
    }
}

export default Slide1;
