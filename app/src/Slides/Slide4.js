import {Component} from "react";
import styled from "styled-components";
import {BackgroundClouds, DarkerClouds, Header, SlideAudio, TextBox} from "../Components/Basics";
import Stars from "../Components/Stars";

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

const IsAHero = styled.img`
  height: 300px;
  border-radius: 5px;
`;

const NotAHero = styled.img`
  height: 300px;
  border-radius: 5px;
`;

const VsText = styled.i`

`;

class Slide1 extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
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

                        <LeftText style={{justifyContent: "center", display: "flex", flexDirection: "column"}}>
                            <Header style={{textAlign: "center"}}>
                                Implicit Image of a Hero
                            </Header>
                            <br/>
                            <br/>
                            <TextBox style={{display: "flex", justifyContent: "center", alignItems: "center"}}>

                                <IsAHero src={"./images/Hero.webp"} />
                                <VsText style={{paddingLeft: "50px", paddingRight: "50px", fontSize: "60px"}}>vs.</VsText>
                                <NotAHero src={"./images/NotAHero.jpg"} />

                            </TextBox>

                        </LeftText>
                        <SlideAudio volume={0.05} autoplay={true} file={"./sounds/Mulan.mp3"} />
                    </SlideContentContainer>

            </ContentContainer>
    </SlideContainer>
    )
    }
}

export default Slide1;
