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
  top: 48%;
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
                                Anyone can be a hero! Or not.
                            </Header>
                        </LeftText>

                    </SlideContentContainer>

                </ContentContainer>
                <SlideAudio file={"./sounds/AlmostThere.mp3"} autoplay={true} volume={0.05} />
            </SlideContainer>
        )
    }
}

export default Slide1;
