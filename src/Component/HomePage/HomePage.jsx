import { Helmet } from 'react-helmet';
import Typewriter from 'typewriter-effect';
import {NavLink} from "react-router-dom";
import { Button } from '@material-ui/core';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';
import Particles from 'react-particles-js';
import './Home.css';
import { Title } from '@material-ui/icons';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home - Portfolio</title>
            </Helmet>
            
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 160,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "speed": 4,
                                "size_min": 0.3
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "random": true,
                            "speed": 1,
                            "direction": "down",
                            "out_mode": "out"
                        },
                        "color": {
                            "value": ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363", "#0000ff"]
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "enable": true,
                                "speed": 8,
                                "size_min": 0.1,
                                "sync": true
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#c8c8c8",
                            "opacity": 0.4,
                            "width": 0.1
                          },
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 250,
                                "duration": 2,
                                "size": 0,
                                "opacity": 0
                            },
                            "repulse": {
                                "distance": 400,
                                "duration": 4
                            }
                        }
                    },
                }}
                width={'100%'}
                height={'90vh'}
            />

            <div className="writenContent">
                <div className="nameHeading">
                    {/* strings: ['Hi,', 'My Self Subhajit Dey'], */}
                    <Typewriter
                        options={{
                            strings: ['Hey,', 'This is Subhajit', 'Welcome to my portfolio'],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                        }}
                    />
                </div>
                <div className="subheading">
                    <h5>Web & Mobile Application Developer</h5> {/*  cum Web Desiner  */}
                </div>
                
                <div className="buttonclass">
                    <NavLink to="/about">
                        <Button variant="outlined" color="primary" endIcon={ <ArrowRightAltRoundedIcon /> }>
                            About Me
                        </Button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

// https://www.npmjs.com/package/typewriter-effect

export default Home;