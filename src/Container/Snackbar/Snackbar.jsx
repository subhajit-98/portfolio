import { Snackbar, IconButton  } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MuiAlert from '@material-ui/lab/Alert';

const SnackbarAlert = (props) => (
    <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right'}}
        open={props.open}
    >
        <MuiAlert elevation={6} variant="filled" severity="success">
            { props.message }
            <IconButton size="small" aria-label="close" color="inherit" onClick={props.onclick}>
                <CloseIcon fontSize="small" />
            </IconButton>
        </MuiAlert>            
    </Snackbar>
)

export default SnackbarAlert;