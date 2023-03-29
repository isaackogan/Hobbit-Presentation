import {Component} from "react";
import styled from "styled-components";
import {DarkerClouds, Header, SlideAudio, TextBox} from "../Components/Basics";

const SlideContainer = styled.div`
  animation-fill-mode: forwards;
  width: 100%;
  height: 100%;
`;

const InnerContainer = styled.div`
  background-color: #0a2438;
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
  top: 45%;
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
  height: 50%;
  width: 80%;
  display: flex;
  justify-content: center;
  z-index: 500;
`;

const QuoteText = styled.div`
    display: flex;
  flex-direction: column;
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
                    <DarkerClouds />
                </InnerContainer>
                <ContentContainer>

                    <SlideContentContainer>

                        <LeftText>
                            <Header>
                                Bilbo is an "Unlikely Hero"
                            </Header>
                            <TextBox>

                                <ul>
                                    <li>Hobbitses are not heroeses, they are homebodies.</li>
                                    <li>Shown at the start of the film</li>
                                    <li>Bilbo is a satisfied hobbit</li>
                                    <li>Bilbo is well off & has no desire for an adventure</li>
                                </ul>

                                <QuoteText style={{fontSize: "25px"}}>
                                    <strong style={{marginBottom: "10px"}}>Quote #1</strong>

                                    <i style={{fontSize: "25px"}}>

                                        “This was a hobbit-hole and that means good food, a warm hearth, and all the comforts of home.”⁠ — Old Bilbo
                                    </i>

                                    <br/>

                                </QuoteText>

                            </TextBox>

                        </LeftText>
                        <SlideAudio file={"./sounds/AHobbitHole.mp3"}/>
                    </SlideContentContainer>

            </ContentContainer>
    </SlideContainer>
    )
    }
}

export default Slide1;
