import React from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core'

const styles = {
    cssLabel: {
        "&$cssFocused": {
          color: "#2196f3"
        }
      },
      cssFocused: {},
      cssUnderline: {
        "&:hover": {
            borderColor: "#2196f3"
          },
        "&:after": {
          borderColor: "#2196f3"
        }
      },
      cssOutlinedInput: {
        borderColor: "#2196f3",
        "&$cssFocused $notchedOutline": {
          borderColor: "#2196f3"
        }
      },
      notchedOutline: {},
}
const TextFieldNew = (props) => 
{
    let classes = props.classes;
    return (
        <TextField 
            {...props}
            InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  underline: classes.cssUnderline,
                  notchedOutline: classes.notchedOutline
                }
              }}
        >
        </TextField>
    )
}

export default withStyles(styles)(TextFieldNew);
