import PageTitle from '../../Container/PageTitle/PageTitle'
import { Container, Grid, Paper, Typography, Button } from '@material-ui/core';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@material-ui/lab';
import {NavLink} from "react-router-dom";
import { Helmet } from 'react-helmet';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import ChildFriendlyRoundedIcon from '@material-ui/icons/ChildFriendlyRounded';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';
import './About.css';

const AboutPage = () => {
    return (
        <Container maxWidth="xl">
            <Helmet>
                <title>About - Portfolio</title>
            </Helmet>
            <PageTitle title="About" />
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Timeline align="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="h6" color="info" className="name_title_heading">Name</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot style={{color: 'black'}}>
                                    <FaceRoundedIcon />
                                </TimelineDot>
                                <TimelineConnector className="lineHeight" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h4">Subhajit Dey</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="h6" className="location_title_heading">Location</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="info">
                                    <LocationOnRoundedIcon />
                                </TimelineDot>
                                <TimelineConnector className="lineHeight" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h4">India, West Bengal</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="h6" className="birthday_title_heading">Date of Birth</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="primary">
                                    <ChildFriendlyRoundedIcon />
                                </TimelineDot>
                                <TimelineConnector className="lineHeight" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h4">5<sup>th</sup> January, 1998</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="h6" className="workon_title_heading">Work On</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="secondary">
                                    <AppsRoundedIcon />
                                </TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h5">Web Application</Typography>
                                <Typography variant="h5">Mobile Application</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid xs={6}>
                    <NavLink to="/">
                        <Button className="btn leftbtn" variant="outlined" color="primary" startIcon={ <ArrowBackIcon /> }>Home</Button>
                    </NavLink>
                </Grid>
                <Grid xs={6}>
                    <NavLink to="/projects">
                        <Button variant="outlined" color="primary" endIcon={ <ArrowRightAltRoundedIcon /> } className="btn rightbtn">Project</Button>
                    </NavLink>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AboutPage;