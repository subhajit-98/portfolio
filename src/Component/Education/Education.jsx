import { Container, Grid, Paper, Typography , Box } from '@material-ui/core';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@material-ui/lab';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import ChildFriendlyRoundedIcon from '@material-ui/icons/ChildFriendlyRounded';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import './Education.css';

const Education = () => {
    return (
        <Container maxWidth="md" style={{marginTop: '40px'}}>
            <Typography variant="h4" component="h2" style={{textAlign: 'center', marginBottom: '15px'}}>
                <Box color="warning.main">Qulifications</Box>
            </Typography>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Timeline align="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="text.primar">2013</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" />
                                <TimelineConnector className="lineHeight" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className="education_background">
                                    <Typography variant="h6" component="h1">10<sup>th</sup> Stands</Typography>
                                    <Typography>Naktala High School</Typography>
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
                                <Typography variant="body2" color="text.primar">2021</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className="education_background">
                                    <Typography variant="h6" component="h1">Master's of Computer Applications (MCA)</Typography>
                                    <Typography>Future Institute of Engneering and Management</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Education;