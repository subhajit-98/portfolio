import React, { useState, useEffect } from 'react';
import PageTitle from '../../Container/PageTitle/PageTitle'
import { Container, Grid, Paper, Typography , Box, Button } from '@material-ui/core';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent, Skeleton  } from '@material-ui/lab';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import ChildFriendlyRoundedIcon from '@material-ui/icons/ChildFriendlyRounded';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import {NavLink} from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import './Education.css';

const Education = () => {
    const [loading, setLoading] = useState(true)
    const [education, setEducation] = useState(null);
    useEffect(() => {
        if(loading == true && education == null){
            axios.get(process.env.REACT_APP_API_URL+'education/')
            .then(res => {
                // console.log(res);
                if(res.data.status == 'success'){
                    setEducation(res.data);
                    setLoading(false);
                }
            })
            .catch(res => {
                console.log(res);
            })
        }
    })

    return (
        <Container maxWidth="md">
            <Helmet>
                <title>Education - Portfolio</title>
            </Helmet>
            <PageTitle title="Qulifications" />
            <Grid container spacing={2}>
                {
                    loading ?
                        <Grid xs={12}>
                            <Timeline align="alternate">
                                <TimelineItem>
                                    <TimelineOppositeContent>
                                        <Typography variant="body2" color="text.primar"></Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot variant="outlined" color="primary" />
                                        <TimelineConnector className="lineHeight" />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Paper elevation={3} className="education_background">
                                            <Skeleton animation="wave" />
                                            <Skeleton animation="wave" />
                                            <Typography>Loading...</Typography>
                                        </Paper>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent>
                                        <Typography variant="body2" color="secondary"></Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot  variant="outlined" color="primary" />
                                        {/* <TimelineConnector className="lineHeight" /> */}
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Paper elevation={3} className="education_background">
                                            <Skeleton animation="wave" />
                                            <Skeleton animation="wave" />
                                            <Typography>Loading...</Typography>
                                        </Paper>
                                    </TimelineContent>
                                </TimelineItem>
                            </Timeline>
                        </Grid>
                    :
                        <Grid xs={12}>
                            <Timeline align="alternate">
                                {
                                    education.data.map((data, key) => (
                                        <TimelineItem>
                                            <TimelineOppositeContent>
                                                {key%2 != 0 ? <Typography variant="body2" color="secondary">{data.start_year} - {data.is_continue ? 'Continue' : data.end_year}</Typography> : <Typography variant="body2" color="primary">{data.start_year} - {data.is_continue ? 'Continue' : data.end_year}</Typography>}
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                {key%2 !== 0 ? <TimelineDot variant="outlined" color="secondary" /> : <TimelineDot variant="outlined" color="primary" />}
                                                { education.data.length-1 !== key ? <TimelineConnector className="lineHeight" /> : null}
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Paper elevation={3} className="education_background">
                                                    <Typography variant="h6" component="h1">{data.streem}</Typography>
                                                    <Typography>{data.institute_name}</Typography>
                                                </Paper>
                                            </TimelineContent>
                                        </TimelineItem>
                                    ))
                                }
                            </Timeline>
                        </Grid>

                }
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