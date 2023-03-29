import {Component} from "react";
import styled from "styled-components";

const SlideEmpty = styled.div`
  width: 100%;
  background-color: #4e4e4e;
  position: fixed;
  top: 0;
  display: block;
  opacity: 0.9;
  z-index: 400;
  height: 4px;
`;

const SlideFull = styled.div`
  background-color: #dc8f07;
  height: 100%;
  transition-duration: 300ms;
`;
class SlideProgress extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <SlideEmpty>
                <SlideFull style={{width: `${(this.props.current / this.props.max) * 100}%` }} />
            </SlideEmpty>
        )

    }

}

export default SlideProgress;
