import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 320,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 400,
    },
  });

class OrderDeskForm extends React.Component {
    state = {
        labelWidth: 0,
    };
  
    componentDidMount() {
        this.setState({
            labelWidth: 100,
        });
    }
    
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };
  
    render() {
      const { classes } = this.props;
    
      return (
        <React.Fragment>
        <Typography variant="h6" gutterBottom>
          <div textAlign="center" m={1}>
              Order Description
          </div>
        </Typography>

        <Grid container spacing={12}>
          <Grid item xs={24} sm={12}>
            <FormControl className={classes.formControl}>
                <TextField
                    id="outlined-multiline-static"
                    label="What exactly is to be done?"
                    multiline
                    rows="4"
                    defaultValue="Remove / clear out and dispose of"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
            </FormControl>
          </Grid>

          <Grid item xs={24} sm={12}>
            <FormControl className={classes.formControl}>
                <TextField
                    id="outlined-multiline-static"
                    label="Description of the items"
                    multiline
                    rows="3"
                    defaultValue="Bulky waste, electronic waste"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
            </FormControl>
          </Grid>

          <Grid item xs={24} sm={12}>
            <FormControl className={classes.formControl}>
                <TextField
                    id="outlined-multiline-static"
                    label="arrangements"
                    multiline
                    rows="7"
                    defaultValue="- The following items should remain:
                    XXX
                    
                    - Special agreement:
                    XXX
                    
                    - Note:
                    XXX"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
            </FormControl>
          </Grid>
        </Grid>
      </React.Fragment>
        
      );
    }
}

OrderDeskForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OrderDeskForm);