import { Box } from '@material-ui/core';

const aaa = () => {
    alert()
}

const MoreButton = (props) => (
    <Box color="warning.main" style={{cursor: 'pointer'}} onClick={() => (props.click(props.id))}>More...</Box>
)

export default MoreButton