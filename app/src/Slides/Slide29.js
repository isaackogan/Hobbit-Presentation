import {Component} from "react";
import styled from "styled-components";
import {DarkerClouds, Header, TextBox} from "../Components/Basics";
import Questions from "../Components/Questions";

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
                                Questions
                            </Header>
                            <TextBox>

                                <ol>
                                    <li>Would you join as the 14th member of the Company?</li>
                                    <li>Do you have a personal hero? What makes them a hero to you?</li>
                                    <li>Do you feel innocence is a positive attribute?</li>
                                    <li>Is there such thing as "positive" ignorance?</li>
                                    <li>Do you feel like given the opportunity, you would be a hero?</li>
                                </ol>

                            </TextBox>

                        </LeftText>

                    </SlideContentContainer>

                </ContentContainer>
                <Questions />
            </SlideContainer>
        )
    }
}

export default Slide1;
