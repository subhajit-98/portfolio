import React, {useState} from 'react';
import PageTitle from '../../Container/PageTitle/PageTitle'
import MoreButton from '../../Container/MoreButton/MoreButton';
import { Container, Grid, Paper, Typography , Box,  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@material-ui/core';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@material-ui/lab';
import CodeIcon from '@material-ui/icons/Code';

const WorkExperience = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = (id) => {
        console.log(id);
        if(!showModal)
            setShowModal(!showModal);
    }

    const handleHideModal = () => {
        setShowModal(!showModal);
    }

    return (
        <>
            <Container maxWidth="md">
                <PageTitle title="Experience" />
                <Grid container spacing={2}>
                    <Grid xs={12}>
                        <Timeline align="alternate">
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography variant="body2" color="text.primar">2021</Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined">
                                        <CodeIcon />
                                    </TimelineDot>
                                    <TimelineConnector className="lineHeight" />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper elevation={3} className="education_background">
                                        <Typography variant="h6" component="h1">Full Stack Developer</Typography>
                                        <Typography>WLC Technology</Typography>
                                        <MoreButton click={handleShowModal} id={1} />
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                <Typography variant="body2" color="primary">2020</Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined">
                                        <CodeIcon />
                                    </TimelineDot>
                                    <TimelineConnector className="lineHeight" />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper elevation={3} className="education_background">
                                        <Typography variant="h6" component="h1">Python Developer</Typography>
                                        <Typography>Bargad Software Solutions PVT. LTD.</Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography variant="body2" color="secondary">2018</Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined">
                                        <CodeIcon />
                                    </TimelineDot>
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper elevation={3} className="education_background">
                                        <Typography variant="h6" component="h1">Web Developer</Typography>
                                        <Typography>Arham Createion</Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>                        
                        </Timeline>
                    </Grid>
                </Grid>
            </Container>

            <Dialog className="changeModalTheme" open={showModal} aria-labelledby="responsive-dialog-title" onClick={handleHideModal}>
                <DialogTitle id="responsive-dialog-title" className="modalTitle">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText className="modalContent">
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={handleHideModal}>
                        Disagree
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default WorkExperience;