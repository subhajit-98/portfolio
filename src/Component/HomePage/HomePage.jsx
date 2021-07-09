import { Helmet } from 'react-helmet';
import Typewriter from 'typewriter-effect';
import {NavLink} from "react-router-dom";
import { Button } from '@material-ui/core';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';
import './Home.css';
import { Title } from '@material-ui/icons';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home - Portfolio</title>
            </Helmet>
            <div className="nameHeading">
                <Typewriter
                    options={{
                        strings: ['Hi,', 'My Self Subhajit Dey'],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                    }}
                />
            </div>
            <div className="subheading">
                <h5>Web & Mobile Application Developer cum Desiner</h5>
            </div>
            
            <div className="buttonclass">
                <NavLink to="/about">
                    <Button variant="outlined" color="primary" endIcon={ <ArrowRightAltRoundedIcon /> }>
                        About Me
                    </Button>
                </NavLink>
            </div>
        </>
    )
}

// https://www.npmjs.com/package/typewriter-effect

export default Home;