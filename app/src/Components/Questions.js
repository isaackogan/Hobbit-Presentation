import Particles from "react-tsparticles";
import {useCallback} from "react";
import {loadFull} from "tsparticles";


export default function Questions() {

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    return (
        <Particles id="tsparticles"
                   style={{position: "fixed", zIndex: "-1", pointerEvents: "none", "opacity": 0.5}}
                   init={particlesInit}
                   options={

                       {
                           fpsLimit: 60,
                           interactivity: {
                               detect_on: "canvas",
                               events: {
                                   onclick: { enable: true, mode: "push" },
                                   onhover: {
                                       enable: true,
                                       mode: "attract",
                                       parallax: { enable: false, force: 60, smooth: 10 }
                                   },
                                   resize: true
                               },
                               modes: {
                                   bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40, speed: 3 },
                                   grab: { distance: 400, links: { opacity: 1 } },
                                   push: { quantity: 4 },
                                   remove: { quantity: 2 },
                                   repulse: { distance: 200, duration: 0.4 }
                               }
                           },
                           particles: {
                               color: { value: "#ffffff" },
                               links: {
                                   color: "#444444",
                                   distance: 50,
                                   enable: false,
                                   opacity: 0.4,
                                   width: 1
                               },
                               move: {
                                   attract: { enable: false, rotateX: 600, rotateY: 1200 },
                                   bounce: false,
                                   direction: "none",
                                   enable: true,
                                   out_mode: "out",
                                   random: false,
                                   speed: 0.4,
                                   straight: false
                               },
                               rotate: {
                                   animation: {
                                       enable: true,
                                       speed: 3,
                                       sync: false
                                   }
                               },
                               number: { density: { enable: true, area: 800 }, value: 3 },
                               opacity: {
                                   animation: { enable: true, minimumValue: 0.5, speed: 1, sync: false },
                                   random: false,
                                   value: 1
                               },
                               shape: {
                                   character: [
                                       {
                                           fill: true,
                                           font: "Verdana",
                                           style: "",
                                           value: "?".split(""),
                                           weight: "400"
                                       }
                                   ],
                                   image: {
                                       height: 100,
                                       replace_color: true,
                                       src: "images/github.svg",
                                       width: 100
                                   },
                                   polygon: { nb_sides: 5 },
                                   stroke: { color: "#4c4c4c", width: 1 },
                                   type: "char"
                               },
                               size: {
                                   anim: { enable: true, minimumValue: 8, speed: 20, sync: false },
                                   random: { minimumValue: 8, enable: true },
                                   value: 32
                               }
                           },
                           detectRetina: true
                       }
                   } />
    )
}
