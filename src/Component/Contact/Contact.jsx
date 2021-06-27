import React, { useState } from 'react';
import PageTitle from '../../Container/PageTitle/PageTitle'
import { Container, Grid, TextField, Button, Typography, Box } from '@material-ui/core';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import './Contact.css';

const Contact = () => {
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

    return (
        <Container maxWidth="sm">
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
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        className="btn"
                        type="submit"
                        startIcon={<SendRoundedIcon />}>Send</Button>
                </Grid>
            </form>
        </Container>
    )
}

export default Contact;