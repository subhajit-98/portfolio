import React, { useState, useEffect } from 'react';
import { Container, Grid, Hidden, Button, Typography, Backdrop, CircularProgress, Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';
import demo_image from './images/noImage.jpg';
import axios from 'axios';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import './BlogDetails.css';

const Blogdetails = (props) => {
    const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    const [blog, setBlog] = useState({isLoading: true, content:{}, isError: false})
    console.log(props.match.params);
    useEffect(async() => {
        if(blog.isLoading){
            await axios.get("http://192.168.2.9:8000/api/v1/blog/"+props.match.params.content_id+"/")
            .then(res => {
                // console.log(res)
                setBlog({...blog,
                    isLoading: false,
                    content: res.data
                })
            })
            .catch(error => {
                // console.log(error)
                setBlog({...blog, isLoading: false, isError: true});
            })
        }
    })

    console.log(blog)

    return (
        blog.isLoading ?
        <Backdrop open={true} style={{color: 'white', zIndex: '1'}}>
            <CircularProgress color="inherit"  color="primary"/>
            <p style={{position: "absolute", marginTop: "85px"}}>LOADING...</p>
        </Backdrop>
        :
        <Container maxWidth="xl">
            {!blog.isError ?
            blog.content.data.map((data, key) => (
                <div key={key}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12} className="img_center">
                            <div className='blog_img'>
                                <img src={data.blog_image == "" || data.blog_image === null ? demo_image :`http://192.168.2.9:8000${data.blog_image}`}/>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Hidden only="xs">
                            <Grid item md={2}>
                                <div style={{width: '100%'}}>{/* Advatice */}</div>
                            </Grid>
                        </Hidden>
                        <Grid item xs={12} md={8}>
                            <Grid item xs={12} md={12}>
                                <br />
                                <Typography variant="h1" component="h1" className="post_title">{data.blog_title}</Typography>
                                <div className="post_author_details">
                                    <Avatar style={{backgroundColor: deepPurple[500]}}>S</Avatar>
                                    <div className="author_name_create"><span className="author_name">Subhajit Dey</span> -- <span> {monthNames[new Date(data.created_at).getMonth()]+" "+new Date(data.created_at).getDate()+", "+new Date(data.created_at).getFullYear()}</span></div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <br />
                                <hr className="blog_sperate" />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                {/* <div className="postContent">
                                    {ReactHtmlParser(data.blog_content)}
                                </div> */}
                                <div className="postContent" dangerouslySetInnerHTML={{__html: data.blog_content}}>
                                </div>
                            </Grid>
                        </Grid>
                        <Hidden only="xs">
                            <Grid item md={2}>
                                <div style={{width: '100%'}}>
                                    <amp-ad width="100vw" height="320"
                                        type="adsense"
                                        data-ad-client="ca-pub-4195448583090836"
                                        data-ad-slot="8016850265"
                                        data-auto-format="rspv"
                                        data-full-width="">
                                        <div overflow=""></div>
                                    </amp-ad>
                                </div>
                            </Grid>
                        </Hidden>
                    </Grid>
                </div>
            ))
            :'Something wrong'}
            
        </Container>
    )    
}

export default Blogdetails;