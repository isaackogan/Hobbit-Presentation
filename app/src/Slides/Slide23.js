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
                                Studying Children
                            </Header>
                            <TextBox>

                                <ul>
                                    <li>2022 study on optimism of children</li>
                                    <li>Study found that children are hyper-optimistic</li>
                                    <li>Due to lack of bad outcomes in their life</li>
                                    <li>Source: <span style={{fontWeight: "", fontStyle: "italic", color: "rgb(96,223,245)"}}>https://www.ucl.ac.uk/news/2022/feb/why-young-children-are-hyper-optimistic</span></li>
                                </ul>

                                <QuoteText style={{fontSize: "25px"}}>
                                    <strong style={{marginBottom: "10px"}}>Quote #1</strong>

                                    <i style={{fontSize: "25px"}}>

                                        “We asked our study participants to play a game to gather treasures from different planets.
                                        They had to learn how good these planets were and tell us how much they will earn."

                                    </i>
                                    <strong style={{marginTop: "35px", marginBottom: "10px"}}>Quote #2</strong>

                                    <i style={{fontSize: "25px"}}>

                                        “We found that children were much more optimistic than the adolescents.
                                        All groups of young people had an optimism bias, as they over-estimated how much they will earn,
                                        but the younger children were particularly hyper-optimistic, and thought they would get the most treasures.”


                                    </i>                                    <br/>

                                </QuoteText>                            </TextBox>

                        </LeftText>

                    </SlideContentContainer>

                </ContentContainer>
            </SlideContainer>
        )
    }
}

export default Slide1;
