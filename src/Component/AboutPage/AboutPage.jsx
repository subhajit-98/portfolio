import PageTitle from '../../Container/PageTitle/PageTitle'
import { Container, Grid, Paper, Typography  } from '@material-ui/core';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@material-ui/lab';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import ChildFriendlyRoundedIcon from '@material-ui/icons/ChildFriendlyRounded';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import './About.css';

const AboutPage = () => {
    return (
        <Container maxWidth="xl">
            <PageTitle title="About" />
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Timeline align="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="h6" color="info">Name</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot style={{color: 'black'}}>
                                    <FaceRoundedIcon />
                                </TimelineDot>
                                <TimelineConnector className="lineHeight" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h3">Subhajit Dey</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="h6" style={{ color: 'white' }}>Location</Typography>
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
                                <Typography variant="h6" style={{ color: 'white' }}>Date of Birth</Typography>
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
                                <Typography variant="h6" style={{ color: 'white' }}>Work On</Typography>
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
        </Container>
    )
}

export default AboutPage;