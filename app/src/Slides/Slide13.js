import {Component} from "react";
import styled from "styled-components";
import {DarkerClouds, Header, TextBox} from "../Components/Basics";

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
  height: 40%;
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
                                Influence on Writing
                            </Header>
                            <TextBox>

                                <ul>
                                    <li>War influenced his writing</li>
                                    <li>Provided a frame of reference for representing it in his work</li>
                                    <li>Evidenced by a quote in LOTR (whoops, non-Hobbit material)</li>
                                </ul>

                                <QuoteText style={{fontSize: "25px"}}>
                                    <strong style={{marginBottom: "10px"}}>Quote #1</strong>

                                    <i style={{fontSize: "25px"}}>

                                        "They lie in all the pools, pale faces, deep deep under the dark water. I saw them: grim faces and evil, and noble faces and sad.
                                        Many faces proud and fair, and weeds in their silver hair. But all foul, all rotting, all dead."⁠ — Frodo Baggins
                                    </i>

                                    <br/>

                                </QuoteText>


                            </TextBox>

                        </LeftText>

                    </SlideContentContainer>

                </ContentContainer>
            </SlideContainer>
        )
    }
}

export default Slide1;
