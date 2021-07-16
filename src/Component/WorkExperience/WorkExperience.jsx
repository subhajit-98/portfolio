import React, { useState, useEffect } from 'react';
import PageTitle from '../../Container/PageTitle/PageTitle'
import MoreButton from '../../Container/MoreButton/MoreButton';
import { Container, Grid, Paper, Typography , Box,  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@material-ui/core';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent, Skeleton } from '@material-ui/lab';
import CodeIcon from '@material-ui/icons/Code';
import {NavLink} from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const WorkExperience = () => {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [experience, setExperience] = useState();
    const [modalContent, setModalContent] = useState({'content': ''});

    const handleShowModal = (id) => {
        // console.log(id);
        if(!showModal){
            setModalContent({'contect': experience.data[id].what_to_do});
            setShowModal(!showModal);
        }
    }

    const handleHideModal = () => {
        setShowModal(!showModal);
    }

    useEffect(() => {
        if(loading){
            axios.get(process.env.REACT_APP_API_URL+'experience/')
            .then(res => {
                console.log(res);
                if(res.data.status === "success"){
                    setExperience(res.data);
                    setLoading(false);
                }
            })
            .catch(res => {
                console.log(res)
            })
        }
    })

    return (
        <>
            <Helmet>
                <title>Experience - Portfolio</title>
            </Helmet>
            <Container maxWidth="md">
                <PageTitle title="Experience" />
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
                                        <TimelineDot variant="outlined" color="primary">
                                            <CodeIcon />
                                        </TimelineDot>
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
                                        <TimelineDot  variant="outlined" color="secondary">
                                            <CodeIcon />
                                        </TimelineDot>
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
                                    experience.data.map((data, key) => (
                                        <TimelineItem>
                                            <TimelineOppositeContent>
                                                {key%2 == 0 ? <Typography variant="body2" color="secondary">{new Date(data.work_start).getFullYear()} - {new Date(data.work_end).getFullYear()}</Typography>: <Typography variant="body2" color="primary">{new Date(data.work_start).getFullYear()} - {new Date(data.work_end).getFullYear()}</Typography>}                                                
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined">
                                                    <CodeIcon />
                                                </TimelineDot>
                                                {experience.data.length !== key+1 ? <TimelineConnector className="lineHeight" /> : ''}
                                                {/* <TimelineConnector className="lineHeight" /> */}
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Paper elevation={3} className="education_background">
                                                    <Typography variant="h6" component="h1">{data.designation}</Typography>
                                                    <Typography>{data.company_name}</Typography>
                                                    <MoreButton click={()=>handleShowModal(key)} id={key} />
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
                        <NavLink to="/projects">
                            <Button className="btn leftbtn" variant="outlined" color="primary" startIcon={ <ArrowBackIcon /> }>Project</Button>
                        </NavLink>
                    </Grid>
                    <Grid xs={6}>
                        <NavLink to="/education">
                            <Button variant="outlined" color="primary" endIcon={ <ArrowRightAltRoundedIcon /> } className="btn rightbtn">Qulification</Button>
                        </NavLink>
                    </Grid>
                </Grid>
            </Container>

            <Dialog fullWidth={true} minWidth="md" className="changeModalTheme" open={showModal} aria-labelledby="responsive-dialog-title" onClick={handleHideModal}>
                <DialogTitle id="responsive-dialog-title" className="modalTitle">My Job Roll</DialogTitle>
                <DialogContent>
                    <DialogContentText className="modalContent">
                        {modalContent.contect}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={handleHideModal}>
                        Dismiss
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default WorkExperience;