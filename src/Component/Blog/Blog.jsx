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
import {CopyToClipboard} from 'react-copy-to-clipboard';
import SnackbarAlert from '../../Container/Snackbar/Snackbar';
import demo_image from './images/noImage.jpg'
import axios from 'axios';
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

    const [blog, setBlog] = useState({isLoading: true, content: {}});
    const [share, setShare] = useState({isShow: false, blog_id: ""});
    const [copy, setCopy] = useState({show: false})
    const [currentPage, setCurrentPage] = useState(0);

    const shareModal = (blogId) => {
        setShare({isShow: !share.isShow, blog_id: blogId})
    }
    const shareModalClose = () => {
        setShare({isShow: !share.isShow})
    }

    const copyLink = () => {
        let blog_link = window.location.href+'/'+share.blog_id;     
        setCopy({...copy, show: true});
    }

    const closeAlertMessage = () => {
        setCopy({...copy, show: false});
    }

    const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

    /*const pageChange = () => {
        setBlog({isLoading: true})
    }*/

    useEffect(async () => {
        let click_current_page, blog_api_url;
        if(Object.keys(props.match.params).length === 0){
            click_current_page = 1;
        }
        else{
            click_current_page = parseInt(props.match.params.page_no);
        }

        if(click_current_page !== currentPage){
            setCurrentPage(click_current_page)
            blog_api_url = process.env.REACT_APP_API_URL+"blog/"+click_current_page+"/";
            await axios.get(blog_api_url)
            .then(res => {
                console.log(res)
                setBlog({...blog,
                    isLoading: false,
                    content: res.data
                })
            })
            .catch(error => {
                console.log(error)
            })
        }
    })


    return (
        <Container maxWidth="lg">
            <SnackbarAlert open={copy.show} message="Blog Link Copy To Clipboard" onclick={closeAlertMessage} />
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
                    blog.content.data !== undefined ? 
                        blog.content.data.map((data, key) => (
                            <Grid item xs={12} md={4}>
                                <Card style={{maxWidth: "345"}}>
                                    <CardHeader
                                        // avatar={
                                        // <Avatar aria-label="recipe" style={{backgroundColor: red[500]}}>
                                        //     S
                                        // </Avatar>
                                        // }                            
                                        title={data.blog_title}
                                        subheader = {monthNames[new Date(data.created_at).getMonth()]+" "+new Date(data.created_at).getDate()+", "+new Date(data.created_at).getFullYear()}
                                    />
                                    <NavLink to={`/blog/${data.blog_id}`} exact>
                                    <CardMedia
                                        style={{height: "0", paddingTop: '56.25%'}}
                                        image={data.blog_image == "" || data.blog_image === null ? demo_image : data.blog_image}
                                        title={data.blog_title}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p" style={{color: 'black', fontSize: '16px'}}>
                                            {data.blog_sort_desc}
                                        </Typography>
                                    </CardContent>
                                    </NavLink>
                                    
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />{/*  style={{color: red[500]}} */}
                                            <Typography variant="body2" color="primary" component="span">(15)</Typography>
                                        </IconButton>
                                        <IconButton aria-label="share" onClick={() => (shareModal(data.blog_id))}>
                                            <ShareIcon />
                                        </IconButton>                       
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))
                    :
                    ``
                }
                
            </Grid>

            <Dialog
                fullWidth={true} minWidth="md" 
                className="changeModalTheme"
                open={share.isShow}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                onClose={shareModalClose}
            >
                <DialogTitle id="alert-dialog-title" className="modalTitle">Share with</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" className="modalContent">
                    <CopyToClipboard text={window.location.href+'/'+share.blog_id}>
                        <IconButton aria-label="copyLink" title="Copy link" onClick={copyLink}>
                            <FileCopyIcon style={{color: 'white', fontSize: '35px'}} />
                        </IconButton>
                    </CopyToClipboard>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={shareModalClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            {blog.isLoading ? 
                ``
            : 
                <div className="pagination">
                    {/*  page={1} */}
                    <Pagination count={blog.content.total_page_no} color="primary"
                        renderItem={(item) => (
                            <PaginationItem component={Link}
                            to={`/blog${item.page === 1 ? '' : `/page/${item.page}`}`}                            
                            {...item}
                            />
                        )}
                        // onClick={pageChange}
                    />
                </div>
            }
        </Container>

    )
}

export default Blog;