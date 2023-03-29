import styled from "styled-components";
import {Component} from "react";

const Header = styled.div`
  font-weight: 500;
  font-size: 90px;
  color: whitesmoke;
`;

const SubHeader = styled.div`
  font-weight: 300;
  font-size: 60px;
  color: whitesmoke;
`;

const TextBox = styled.div`
  font-weight: normal;
  font-size: 30px;
  color: whitesmoke;
`;

const LeftText = styled.div`
  text-align: left;
  display: inline-block;
`;

const BackgroundClouds = styled.img`
  z-index: 5;
  position: fixed;
  opacity: 0.7;
  animation: clouds 120s infinite linear;
  margin-left: -1000px;
  margin-top: -50px;
  @keyframes clouds {
    0% {
      margin-left: 100px;
    }
    50% {
      margin-left: 2000px;
    }
    50.00001% {
      margin-left: -1200px;
    }
    100% {
      margin-left: 100px;
    }

  }

`;

class SlideAudio extends Component {

    constructor(props) {
        super(props);
        this.audio = new Audio(props.file);
        this.hasPlayed = false;
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onSlideNext = this.onSlideNext.bind(this);
        this.onSlideLast = this.onSlideLast.bind(this);
    }


    componentDidMount() {
        document.addEventListener("keyup", this.onKeyUp, false);
        document.addEventListener("slideNext", this.onSlideNext, false);
        document.addEventListener("slideLast", this.onSlideLast, false);

        if (this.props.autoplay) {
            this.hasPlayed = true;
            this.audio.play().then(() => null);
        }

        if (this.props.volume) {
            this.audio.volume = this.props.volume
        }
    }

    componentWillUnmount() {
        document.removeEventListener("keyup", this.onKeyUp, false);
        document.removeEventListener("slideNext", this.onSlideNext, false);
        document.removeEventListener("slideLast", this.onSlideLast, false);
    }

    onKeyUp(event) {
        if (event.key === "p") {

            if (!this.hasPlayed) {
                this.hasPlayed = true;
                this.audio.loop = this.props.loop || false;
                this.audio.play().then(() => null);
            } else {
                if (this.audio.paused) {
                    this.audio.play();
                } else {
                    this.audio.pause();
                }

            }

        }
    }

    onSlideNext() {
        this.audio?.pause();
    }

    onSlideLast() {
        this.audio?.pause();
    }

    render() {
        return null;
    }

}


class DarkerClouds extends Component {

    render() {
        return (
            <BackgroundClouds style={{filter: "brightness(0.4)", animation: "clouds 240s infinite linear"}} src={"./images/BagginsClouds.png"} />
        )
    }
}

class SlideVideo extends Component {

    constructor(props) {
        super(props);
        this.elementId = this.props.id;
        this.onKeyUp = this.onKeyUp.bind(this);
        this.state = {playing: false};

    }


    componentDidMount() {
        document.addEventListener("keyup", this.onKeyUp, false);
        let video = document.getElementById(this.elementId);
        video.volume = 1.0;
    }

    componentWillUnmount() {
        document.removeEventListener("keyup", this.onKeyUp, false);
    }

    onKeyUp(event) {
        let video = document.getElementById(this.elementId);

        if (event.key === "p") {

            if (video.paused) {
                video.play();
                this.setState({playing: true});
            } else {
                video.pause();
                this.setState({playing: false});
            }
        }
        else if (event.key === "ArrowUp") {
            console.log("Volume Up");
            video.volume = Math.min(1.0, video.volume + 0.1);
        }
        else if (event.key === "ArrowDown") {
            console.log("Volume Down");
            video.volume = Math.max(0, video.volume - 0.1);
        }
        else if (event.key === "r") {
            console.log("Reset Video")
            video.currentTime = 0;
            video.playbackRate = 1.0;
        }

    }


    onVideoClick(id) {
        let video = document.getElementById(id);

        if (video.paused) {
            video.play();
            this.setState({playing: true});
        } else {
            video.pause();
            this.setState({playing: false});
        }

    }

    render() {
        return (
            <video
                onClick={() => this.onVideoClick(this.elementId)}
                id={this.elementId}
                width={this.props.width || "100%"}
                height={this.props.height || "80%"}
                style={{cursor: this.state.playing ? "none" : ""}}
            >
                <source src={this.props.src}/>
            </video>
        )
    }
}

export {
    Header,
    SubHeader,
    TextBox,
    LeftText,
    BackgroundClouds,
    SlideAudio,
    DarkerClouds,
    SlideVideo
}

