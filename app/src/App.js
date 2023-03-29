import {Component} from "react";
import styled from "styled-components";
import Slide1 from "./Slides/Slide1";
import Slide2 from "./Slides/Slide2";
import Slide3 from "./Slides/Slide3";

import SlideProgress from "./Components/SlideProgress";
import Slide4 from "./Slides/Slide4";
import Slide5 from "./Slides/Slide5";
import Slide7 from "./Slides/Slide7";
import Slide6 from "./Slides/Slide6";
import Slide8 from "./Slides/Slide8";
import Slide9 from "./Slides/Slide9";
import Slide10 from "./Slides/Slide10";
import Slide12 from "./Slides/Slide12";
import Slide11 from "./Slides/Slide11";
import Slide13 from "./Slides/Slide13";
import Slide15 from "./Slides/Slide15";
import Slide14 from "./Slides/Slide14";
import Slide18 from "./Slides/Slide18";
import Slide17 from "./Slides/Slide17";
import Slide16 from "./Slides/Slide16";
import Slide21 from "./Slides/Slide21";
import Slide20 from "./Slides/Slide20";
import Slide19 from "./Slides/Slide19";
import Slide22 from "./Slides/Slide22";
import Slide23 from "./Slides/Slide23";
import Slide24 from "./Slides/Slide24";
import Slide30 from "./Slides/Slide1";
import Slide25 from "./Slides/Slide25";
import Slide27 from "./Slides/Slide27";
import Slide26 from "./Slides/Slide26";
import Slide28 from "./Slides/Slide28";
import Slide29 from "./Slides/Slide29";

const SlideContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: auto;
  height: 100vh;
`;

class SlideshowApp extends Component {

  constructor(props) {
    super(props);
    this.firstMount = true;

    this.state = {
      index: 0
    }

    this.slides = [
        <Slide1/>,
        <Slide2/>,
        <Slide3/>,
        <Slide4/>,
        <Slide5/>,
        <Slide6/>,
        <Slide7/>,
        <Slide8/>,
        <Slide9/>,
        <Slide10/>,
        <Slide11/>,
        <Slide12/>,
        <Slide13/>,
        <Slide14/>,
        <Slide15/>,
        <Slide16/>,
        <Slide17/>,
        <Slide18/>,
        <Slide19/>,
        <Slide20/>,
        <Slide21/>,
        <Slide22/>,
        <Slide23/>,
        <Slide24/>,
        <Slide25/>,
        <Slide26/>,
        <Slide27/>,
        <Slide28/>,
        <Slide29/>,
        <Slide30 autoplay={true}/>,
    ]
  }

  componentDidMount() {
    if (!this.firstMount) return;
    this.firstMount = false;

    document.addEventListener("keyup", (e) => {
      if (e.key === "ArrowRight" || e.key === "d") {
            let theoVal = this.state.index + 1;
            let clampVal = Math.min(this.slides.length - 1, theoVal);

            if (theoVal === clampVal) {
                document.dispatchEvent(new CustomEvent("slideNext"));
                this.setState({index: clampVal})
            }
      }

      if (e.key === "ArrowLeft" || e.key === "a") {
          let theoVal = this.state.index - 1;
          let clampVal = Math.max(0, theoVal);

          if (theoVal === clampVal) {
              document.dispatchEvent(new CustomEvent("slideLast"));
              this.setState({index: theoVal});
          }


      }

    })
  }

  render() {
      document.title = `The Hobbit (Slide ${this.state.index + 1}/${this.slides.length})`;
      return (
            <SlideContainer>
                <SlideProgress current={this.state.index + 1} max={this.slides.length}/>
                {this.slides[this.state.index]}
            </SlideContainer>
      );
  }

}


export default SlideshowApp;
