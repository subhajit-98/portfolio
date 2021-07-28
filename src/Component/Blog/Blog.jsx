import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../../Container/PageTitle/PageTitle'
import { Container, Grid, Button, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, BottomNavigationAction, BottomNavigation } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import {NavLink, Link} from "react-router-dom";
import Pagination from '@material-ui/lab/Pagination';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PaginationItem from '@material-ui/lab/PaginationItem';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import '../Projects/Projects.css';
import './Blog.css';

const Blog = (props) => {
    {/*<div style={{width: "100%",
        height: '83vh',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center'}}>Delicious Contains Prepare For You. Comming soon...</div>*/
    }

    // console.log(props.match.params);

    const [blog, setBlog] = useState({isLoading: false});
    const [share, setShare] = useState({isShow: false});

    const shareModal = () => {
        setShare({isShow: !share.isShow})
    }



    return (
        <Container maxWidth="lg">
            <PageTitle title="Blog" />
            <Grid container spacing={2}>
                {/* Skeleton */}
                {blog.isLoading ? 
                    <Grid item xs={12} md={4}>
                        <Card style={{maxWidth: "345"}}>
                            <CardHeader
                                avatar={
                                    <Skeleton variant="circle" width={45} height={45} animation="wave" />
                                }                            
                                title={<Skeleton variant="text" width={200} animation="wave" />}
                                subheader={<Skeleton variant="text" width={90} animation="wave" />}
                            />
                            <NavLink to="/blog/content_id1234" exact>
                            <CardMedia>
                                <Skeleton variant="rect" animation="wave" height={214} />
                            </CardMedia>
                            <CardContent>
                                <Skeleton animation="wave" />
                                <Skeleton animation="wave" />
                                <Skeleton animation="wave" width={210} />
                            </CardContent>
                            </NavLink>
                            
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                                    <Typography variant="body2" color="primary" component="span"><Skeleton animation="wave" width={30} /></Typography>
                                </IconButton>                                                      
                            </CardActions>
                        </Card>
                    </Grid>
                :
                    <Grid item xs={12} md={4}>
                        <Card style={{maxWidth: "345"}}>
                            <CardHeader
                                avatar={
                                <Avatar aria-label="recipe" style={{backgroundColor: red[500]}}>
                                    R
                                </Avatar>
                                }                            
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />
                            <NavLink to="/blog/content_id1234" exact>
                            <CardMedia
                                style={{height: "0", paddingTop: '56.25%'}}
                                image="https://material-ui.com//static/images/cards/paella.jpg"
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            </NavLink>
                            
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                <FavoriteIcon  style={{color: red[500]}}/>
                                    <Typography variant="body2" color="primary" component="span">(15)</Typography>
                                </IconButton>
                                <IconButton aria-label="share" onClick={shareModal}>
                                    <ShareIcon />
                                </IconButton>                       
                            </CardActions>
                        </Card>
                    </Grid>
                }
                
            </Grid>

            <Dialog
                fullWidth={true} minWidth="md" 
                className="changeModalTheme"
                open={share.isShow}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                onClose={shareModal}
            >
                <DialogTitle id="alert-dialog-title" className="modalTitle">Share with</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" className="modalContent">
                        <IconButton aria-label="copyLink" title="Copy link">
                            <FileCopyIcon style={{color: 'white', fontSize: '35px'}} />
                        </IconButton>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={shareModal}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            {blog.isLoading ? 
                ``
            : 
                <div className="pagination">
                    {/*  page={1} */}
                    <Pagination count={3} color="primary"
                        renderItem={(item) => (
                            <PaginationItem component={Link}
                            to={`/blog${item.page === 1 ? '' : `/page/${item.page}`}`}
                            {...item}
                            />
                        )}
                    />
                </div>
            }
        </Container>

    )
}

export default Blog;