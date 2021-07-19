import React, { useState } from 'react';
import PageTitle from '../../Container/PageTitle/PageTitle'
import { Container, Grid, TextField, Button, Typography, Box } from '@material-ui/core';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import {NavLink} from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import SnackbarAlert from '../../Container/Snackbar/Snackbar';
import Loader from '../../Container/Loader/Loader';
import './Contact.css';

const Contact = () => {
    const [contact, setContact] = useState({'isVisible': false, message: '', isLoading: false})
    const [formValue, setFormValue] = useState(
        {
            first_name:{
                data: '',
                isError: false,
                error_message: ''
            },
            last_name:{
                data: '',
                isError: false,
                error_message: ''
            },
            email_id:{
                data: '',
                isError: false,
                error_message: ''
            },
            message:{
                data: '',
                isError: false,
                error_message: ''
            }
        }
    )

    let [f_name_isError, l_name_isError, emailId_isError, message_isError] = [formValue.first_name.isError, formValue.last_name.isError, formValue.email_id.isError, formValue.message.isError];
    let [f_name_error_msg, l_name_error_msg, emailId_error_msg, message_error_msg] = [formValue.first_name.error_message, formValue.last_name.error_message, formValue.email_id.error_message, formValue.message.error_message];

    // if(formValue.first_name.isError){

    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        let prevState = formValue;
        if(formValue.first_name.data == ''){
            prevState.first_name.isError = true;
            prevState.first_name.error_message = "First name required";
        }
        else{
            prevState.first_name.isError = false;
            prevState.first_name.error_message = "";
        }
        if(formValue.last_name.data == ''){
            prevState.last_name.isError = true;
            prevState.last_name.error_message = "Last name required";
        }
        else{
            prevState.last_name.isError = false;
            prevState.last_name.error_message = "";
        }
        if(formValue.email_id.data == ''){
            prevState.email_id.isError = true;
            prevState.email_id.error_message = "Email id required";
        }
        else{
            prevState.email_id.isError = false;
            prevState.email_id.error_message = "";
        }
        if(formValue.message.data == ''){
            prevState.message.isError = true;
            prevState.message.error_message = "Message required";
        }
        else{
            prevState.message.isError = false;
            prevState.message.error_message = "";
        }

        setFormValue(
            {
                ...formValue,
                prevState
            }
        )

        if(prevState.first_name.isError === false && prevState.last_name.isError === false && prevState.email_id.isError === false && prevState.message.isError === false){
            setContact({...contact, isLoading: true})
            let form_data = {
                "first_name": formValue.first_name.data,
                "last_name": formValue.last_name.data,
                "email_id": formValue.email_id.data,
                "message": formValue.message.data
            }
            axios.post(process.env.REACT_APP_API_URL+'contact/', form_data)
            .then(res=>{
                // console.log(res); 
                if(res.data.status == "success"){
                    setContact({isVisible: !contact.isVisible, message: "Thank you for contact with me."});
                }
            })
            .catch(res => {
                console.log(res)
            })
        }
    }

    const onChangeHandle = (event) => {
        if(event.target.name == 'first_name'){
            setFormValue(
                {
                    ...formValue,
                    first_name: {
                        ...formValue.first_name,
                        data: event.target.value
                    }
                }
            )
        }
        if(event.target.name == 'last_name'){
            setFormValue(
                {
                    ...formValue,
                    last_name: {
                        ...formValue.last_name,
                        data: event.target.value
                    }
                }
            )
        }
        if(event.target.name == 'email_id'){
            setFormValue(
                {
                    ...formValue,
                    email_id: {
                        ...formValue.email_id,
                        data: event.target.value
                    }
                }
            )
        }
        if(event.target.name == 'message'){
            setFormValue(
                {
                    ...formValue,
                    message: {
                        ...formValue.message,
                        data: event.target.value
                    }
                }
            )
        }
    }

    const snackbarHandle = () => {
        setContact({isVisible: !contact.isVisible});
    }

    return (
        <Container maxWidth="sm">
            <Helmet>
                <title>Contact - Portfolio</title>
            </Helmet>
            <SnackbarAlert open={contact.isVisible} message={contact.message} onclick={snackbarHandle} />
            <PageTitle title="Contact" />
            <form fullWidth noValidate autoComplete="off" variant="outlined" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField className="input_fields" id="outlined-search" label="First Name" type="text" variant="outlined" name="first_name" value={formValue.first_name.data} helperText={f_name_error_msg} error={f_name_isError} onChange={onChangeHandle} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField className="input_fields" id="outlined-search" label="Last Name" type="text" variant="outlined" name="last_name" value={formValue.last_name.data}onChange={onChangeHandle} helperText={l_name_error_msg} error={l_name_isError} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField className="input_fields" id="outlined-search" label="abcd@example.com" type="text" variant="outlined" name="email_id" value={formValue.email_id.data}onChange={onChangeHandle} helperText={emailId_error_msg} error={emailId_isError} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField className="input_fields" id="outlined-search" label="Your message..." type="text" variant="outlined"name="message" value={formValue.message.data}onChange={onChangeHandle} rows={4} multiline helperText={message_error_msg} error={message_isError} />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                { 
                    !contact.isLoading ? 
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        className="btn"
                        type="submit"
                        startIcon={<SendRoundedIcon />}
                        disable={contact.isLoading}>Send</Button>
                    :
                    <Loader show={contact.isLoading} />
                }
                </Grid>
            </form>
            <Grid container spacing={2}>
                <Grid xs={12} className="backBtnDiv">
                    <NavLink to="/education">
                        <Button className="btn" variant="outlined" color="primary" startIcon={ <ArrowBackIcon /> }>Qulifications</Button>
                    </NavLink>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Contact;