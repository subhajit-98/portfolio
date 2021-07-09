import React, { useState } from 'react';
import PageTitle from '../../Container/PageTitle/PageTitle'
import { Container, Grid, Paper, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery } from '@material-ui/core';
import {NavLink} from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';
import { Helmet } from 'react-helmet';
import './Projects.css';

const Projects = () => {
    const [modal, setModal] = useState(false);

    const handleClose = () => {
        setModal(!modal)
    }

    const handleOpen = () => {
        setModal(!modal)
    }

    return (
        <>
            <Helmet>
                <title>Projects - Portfolio</title>
            </Helmet>
            <Container maxWidth="md" style={{marginTop:'15px'}}>
                <PageTitle title="Project" />
                <Grid container spacing={3}>
                    <Grid item xs={6} md={4}>
                        <Card style={{maxWidth: '545px'}}>
                            <CardActionArea>
                                <CardMedia
                                    image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                                    title="Contemplative Reptile"
                                    style={{height: '140px'}}
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">View Site</Button>
                                <Button size="small" color="primary" onClick={ handleOpen }>Know More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Card style={{maxWidth: '545px'}}>
                            <CardActionArea>
                                <CardMedia
                                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                                style={{height: '140px'}}
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">View Site</Button>
                                <Button size="small" color="primary" onClick={ handleOpen }>Know More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper>xs=3</Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid xs={6}>
                        <NavLink to="/about">
                            <Button className="btn leftbtn" variant="outlined" color="primary" startIcon={ <ArrowBackIcon /> }>About</Button>
                        </NavLink>
                    </Grid>
                    <Grid xs={6}>
                        <NavLink to="/work-experience">
                            <Button variant="outlined" color="primary" endIcon={ <ArrowRightAltRoundedIcon /> } className="btn rightbtn">Work Experince</Button>
                        </NavLink>
                    </Grid>
                </Grid>
            </Container>
            <Dialog className="changeModalTheme" open={modal} aria-labelledby="responsive-dialog-title" onClose={ handleClose } >
                <DialogTitle id="responsive-dialog-title" className="modalTitle">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText className="modalContent">
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" autoFocus>
                        Link
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Disagree
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Projects;