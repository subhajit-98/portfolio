import { CircularProgress } from '@material-ui/core';

const Loader = (props) => (
    <div style={{ marginTop: '20px' }}>
        <CircularProgress disableShrink color="secondary" size="25px" />
    </div>
)

export default Loader;