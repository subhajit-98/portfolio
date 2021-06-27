import { Typography , Box } from '@material-ui/core';

const PageTitle = (props) => (
    <Typography variant="h4" component="h2" style={{textAlign: 'center', marginBottom: '15px', marginTop: '40px'}}>
        <Box color="warning.main">{ props.title} </Box>
    </Typography>
)

export default PageTitle;