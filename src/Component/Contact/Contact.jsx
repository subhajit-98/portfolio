import { Container, Grid, TextField, Button, Typography } from '@material-ui/core';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import './Contact.css';

const Contact = () => {
    return (
        <Container maxWidth="sm" style={{marginTop: '40px'}}>
            <Typography variant="h4" component="h2" style={{textAlign: 'center', marginBottom: '15px'}}>
                Contact
            </Typography>
            <form fullWidth noValidate autoComplete="off" variant="outlined">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField className="input_fields" id="outlined-search" label="First Name" type="text" variant="outlined" helperText="Incorrect entry." error />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField className="input_fields" id="outlined-search" label="Last Name" type="text" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField className="input_fields" id="outlined-search" label="abcd@example.com" type="text" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField className="input_fields" id="outlined-search" label="Your message..." type="text" variant="outlined" rows={4} multiline />
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