import {Component} from "react";
import styled from "styled-components";
import {BackgroundClouds, DarkerClouds, Header, SlideAudio, TextBox} from "../Components/Basics";

const SlideContainer = styled.div`
  animation-fill-mode: forwards;
  width: 100%;
  height: 100%;
`;

const InnerContainer = styled.div`
  background-color: #66ace8;
  width: 100%;
  height: 100%;
  filter: brightness(0.5) blur(4px);
  position: fixed;
`;


const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background: url("./images/BagginsBgrd.png");
  background-size: cover;
  z-index: 10;
  position: fixed;

`;


const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LeftText = styled.div`
  text-align: left;
  display: inline-block;
`;

const SlideContentContainer = styled.div`
  animation: fadeInAnimation ease 2s;
  animation-fill-mode: forwards;
  text-align: center;
  width: 80%;
  display: flex;
  justify-content: center;
  z-index: 500;
`;

const SpunText = styled.div`
  animation: spinIn ease 6s;
  @keyframes spinIn {
    0% {
      font-size: 0px;
      transform: rotate(0deg);
    }
    12% {
      font-size: 0px;
      transform: rotate(0deg);
    }
    70% {
      font-size: 70px;
      transform: rotate(400deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

class Slide1 extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <SlideContainer>
                <InnerContainer>
                    <BackgroundImage />
                    <BackgroundClouds  src={"./images/BagginsClouds.png"} />
                </InnerContainer>
                <ContentContainer>

                    <SlideContentContainer>

                        <LeftText>
                            <Header style={{fontStyle: "italic", fontSize: "70px"}}>
                               <SpunText>
                                   What makes a hero?
                               </SpunText>
                            </Header>
                        </LeftText>
                        <SlideAudio volume={0.1} autoplay={true} file={"./sounds/ZeroToHero.mp3"} />

                    </SlideContentContainer>

                </ContentContainer>
            </SlideContainer>
        )
    }
}

export default Slide1;
