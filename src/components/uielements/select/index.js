import React from 'react'
import Select from '@material-ui/core/Select';

import { withStyles } from '@material-ui/core'

const styles = {
    root: {
        "&$cssFocused": {
          color: "#2196f3"
        },
        '&:before': {
        },
        '&:after': {
            borderColor: '#2196f3',
        }
    },
}
const SelectNew = (props) => 
{
    let classes = props.classes;
    return (
        <Select 
            {...props}
            className={classes.root}
        >
        </Select>
    )
}

export default withStyles(styles)(SelectNew);
