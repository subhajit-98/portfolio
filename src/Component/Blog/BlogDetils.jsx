import React, { useState } from 'react';
import { Container, Grid, Hidden, Button, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';
import './BlogDetails.css';

const Blogdetails = (props) => {
    console.log(props.match.params);
    return (
        <Container maxWidth="xl">
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} className="img_center">
                    <img src="https://material-ui.com//static/images/cards/paella.jpg" className="blog_img" />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Hidden only="xs">
                    <Grid item md={1}>
                        <div style={{width: '100%', backgroundColor: 'red'}}>aaaa</div>
                    </Grid>
                </Hidden>
                <Grid item xs={12} md={9}>
                    <Grid item xs={12} md={12}>
                        <br />
                        <Typography variant="h1" component="h1" className="post_title">Post Title</Typography>
                        <div className="post_author_details">
                            <Avatar style={{backgroundColor: deepPurple[500]}}>S</Avatar>
                            <div className="author_name_create"><span className="author_name">Subhajit Dey</span> -- <span> July 27, 2021</span></div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <br />
                        <hr className="blog_sperate" />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <div className="postContent">
                            assdassdasdas
                        </div>
                    </Grid>
                </Grid>
                <Hidden only="xs">
                    <Grid item md={2}>
                        <div style={{width: '100%', backgroundColor: 'red'}}>aaaa</div>
                    </Grid>
                </Hidden>
            </Grid>
        </Container>
    )    
}

export default Blogdetails;