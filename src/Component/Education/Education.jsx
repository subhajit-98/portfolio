import PageTitle from '../../Container/PageTitle/PageTitle'
import { Container, Grid, Paper, Typography , Box, Button } from '@material-ui/core';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@material-ui/lab';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import ChildFriendlyRoundedIcon from '@material-ui/icons/ChildFriendlyRounded';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import {NavLink} from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';
import { Helmet } from 'react-helmet';
import './Education.css';

const Education = () => {
    return (
        <Container maxWidth="md">
            <Helmet>
                <title>Education - Portfolio</title>
            </Helmet>
            <PageTitle title="Qulifications" />
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Timeline align="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="text.primar">2021</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" />
                                <TimelineConnector className="lineHeight" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className="education_background">
                                    <Typography variant="h6" component="h1">Master's of Computer Applications (MCA)</Typography>
                                    <Typography>Future Institute of Engneering and Management</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="secondary">2018</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot  variant="outlined" color="secondary" />
                                <TimelineConnector className="lineHeight" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className="education_background">
                                    <Typography variant="h6" component="h1">Bachlor's of Computer Applications (BCA)</Typography>
                                    <Typography>Future Institute of Engneering and Management</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                            <Typography variant="body2" color="primary">2015</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot  variant="outlined" color="primary" />
                                <TimelineConnector className="lineHeight" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className="education_background">
                                    <Typography variant="h6" component="h1">12<sup>th</sup> Stands</Typography>
                                    <Typography>Khanput H.L. High School</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="text.primar">2013</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className="education_background">
                                    <Typography variant="h6" component="h1">10<sup>th</sup> Stands</Typography>
                                    <Typography>Naktala High School</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid xs={6}>
                    <NavLink to="/work-experience">
                        <Button className="btn leftbtn" variant="outlined" color="primary" startIcon={ <ArrowBackIcon /> }>Experience</Button>
                    </NavLink>
                </Grid>
                <Grid xs={6}>
                    <NavLink to="/contact">
                        <Button variant="outlined" color="primary" endIcon={ <ArrowRightAltRoundedIcon /> } className="btn rightbtn">Contact</Button>
                    </NavLink>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Education;