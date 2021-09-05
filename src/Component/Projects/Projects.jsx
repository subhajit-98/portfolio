import React, { useState, useEffect } from 'react';
import PageTitle from '../../Container/PageTitle/PageTitle'
import { Container, Grid, Paper, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import {NavLink, Link} from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { saveAs } from "file-saver";
import './Projects.css';

const Projects = () => {
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState(null);
    const [modaldetails, setModaldetails] = useState({"content": '', 'link': '', 'is_project_download': '', 'project_download_link': ''})
    const IsDayTheme = JSON.parse(localStorage.getItem('IsDayTheme'));

    const handleClose = () => {
        setModal(!modal)
    }

    const handleOpen = (id) => {
        setModal(!modal);
        setModaldetails({"content": projects.data[id].project_desc, 'link': projects.data[id].project_link, 'is_project_download': projects.data[id].project_downlod_able, 'project_download_link': projects.data[id].project_file});
    }

    useEffect(async() => {
        if(loading === true && projects === null){
            await axios.get(process.env.REACT_APP_API_URL+'project/')
            .then(res => {
                console.log(res);
                if(res.data.status === "success"){
                    setProjects(res.data);                    
                    setLoading(false);
                }
            })
            .catch(res => {
                console.log(res);
            })
        }        
    })

    const openLink = (link) => {
        window.open(link, '_blank');
    }

    const openDownload = (link) => {
        console.log(link.split("/").slice(-1).pop());
        saveAs(
            link,
            link.split("/").slice(-1).pop()
        );
    }

    return (
        <>
            <Helmet>
                <title>Projects - Portfolio</title>
            </Helmet>
            <Container maxWidth="md" style={{marginTop:'15px'}}>
                <PageTitle title="Project" />
                { loading ?
                    <Grid container spacing={3}>
                        <Grid item xs={6} md={4}>
                            <Card style={{maxWidth: '545px'}}>
                                <CardActionArea>
                                    <CardMedia>
                                        <Skeleton variant="rect" height={142} animation="wave" />
                                    </CardMedia>                                
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <Skeleton />
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        <Skeleton />
                                        <Skeleton animation="wave" />
                                        <Skeleton animation="wave" />
                                        <Skeleton width="60%" />
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Skeleton animation="wave" width="25%" />
                                    <Skeleton animation="wave" width="25%" />
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Card style={{maxWidth: '545px'}}>
                                <CardActionArea>
                                    <CardMedia>
                                        <Skeleton variant="rect" height={142} animation="wave" />
                                    </CardMedia>                                
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <Skeleton />
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        <Skeleton />
                                        <Skeleton animation="wave" />
                                        <Skeleton animation="wave" />
                                        <Skeleton width="60%" />
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Skeleton animation="wave" width="25%" />
                                    <Skeleton animation="wave" width="25%" />
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Card style={{maxWidth: '545px'}}>
                                <CardActionArea>
                                    <CardMedia>
                                        <Skeleton variant="rect" height={142} animation="wave" />
                                    </CardMedia>                                
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <Skeleton />
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        <Skeleton />
                                        <Skeleton animation="wave" />
                                        <Skeleton animation="wave" />
                                        <Skeleton width="60%" />
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Skeleton animation="wave" width="25%" />
                                    <Skeleton animation="wave" width="25%" />
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                    :
                    <Grid container spacing={3}>
                        {projects.data.map((data, key) => (
                            <Grid item xs={12} md={4}>
                                <Card style={{maxWidth: '545px', minHeight: '100px', boxShadow: "0px 0px 11px 2px black",}} key={key}>
                                    <CardMedia
                                        image={ data.project_image }
                                        title="Contemplative Reptile"
                                        style={{height: '140px'}}
                                    />
                                    <CardContent style={{minHeight: '80px'}}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {data.project_name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        { data.project_sort_desc }
                                    </Typography>
                                    </CardContent>
                                    <CardActions>
                                        { data.project_downlod_able ?
                                            <Button size="small" color="primary" onClick={() => openDownload(data.project_file)}>Download</Button>
                                        :
                                            <Button size="small" color="primary" onClick={() => openLink(data.project_link)}>View Site</Button>
                                        }
                                        <Button size="small" color="primary" onClick={ () => handleOpen(key) }>Know More</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}                        
                    </Grid>
                }

                <Grid container spacing={2}>
                    <Grid xs={6}>
                        <NavLink to="/about">
                            <Button className="btn leftbtn" variant="outlined" color="primary" startIcon={ <ArrowBackIcon /> }>About</Button>
                        </NavLink>
                    </Grid>
                    {/* <Grid xs={6}>
                        <NavLink to="/work-experience">
                            <Button variant="outlined" color="primary" endIcon={ <ArrowRightAltRoundedIcon /> } className="btn rightbtn">Work Experince</Button>
                        </NavLink>
                    </Grid> */}
                    <Grid xs={6}>
                        <NavLink to="/education">
                            <Button variant="outlined" color="primary" endIcon={ <ArrowRightAltRoundedIcon /> } className="btn rightbtn">Qulification</Button>
                        </NavLink>
                    </Grid>
                </Grid>
            </Container>
            <Dialog fullWidth={true} minWidth="md" className={(IsDayTheme) ? "daytheme" : "changeModalTheme" } open={modal} aria-labelledby="responsive-dialog-title" onClose={ handleClose } >
                <DialogTitle id="responsive-dialog-title" className="modalTitle">Project Details</DialogTitle>
                <DialogContent>
                    <DialogContentText className="modalContent">
                        {modaldetails.content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    { modaldetails.is_project_download ?
                        <Button size="small" color="secondary" onClick={() => openDownload(modaldetails.project_download_link)}>Download</Button>
                    :
                        <Button color="secondary" autoFocus onClick={() => openLink(modaldetails.link)}>
                            Link
                        </Button>
                    }
                    <Button onClick={handleClose} color="primary">
                        Dismiss
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Projects;