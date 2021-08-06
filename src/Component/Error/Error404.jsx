import React from 'react';
import {NavLink} from "react-router-dom";
import { Container, Typography, Button } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import './Error404.css';

const Error404 = () => (
    <div>
        <Container maxWidth="md">
            <div className="main_content">
                <div>
                    <Typography variant="h1" component="h2" className="custom_error_heading">
                        404
                    </Typography>
                    <div>
                        <Typography variant="h6" component="h2" className="content">
                            This page maybe delete by some resion or you enter wrong url.
                        </Typography>
                    </div>
                    <div className="home_btn">
                        <NavLink to="/">
                            <Button variant="outlined" color="secondary" startIcon={<HomeIcon />}>Goto home page</Button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </Container>
    </div>
)

export default Error404