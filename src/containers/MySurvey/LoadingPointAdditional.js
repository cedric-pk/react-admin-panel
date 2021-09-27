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
import TextField from './../../components/uielements/textfield';
import Checkbox from '@material-ui/core/Checkbox';

import { MenuItem } from '../../components/uielements/menus';

const styles = theme => ({
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
    content: {
        margin: theme.spacing.unit,
        width: '97%'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 600,
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

class LoadingPointAdditionalForm extends React.Component {
    state = {
        saved_addr: '',
        object_kind: '',
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
            <div className={classes.content}>
                <Typography variant="h6" gutterBottom>
                    Additional storage areas (loading point)
                </Typography>
                <Grid container spacing={24}>

                    <Grid item xs={12}>
                        <TextField
                            id="cellheight"
                            name="cellheight"
                            label="Ceiling height additional storage space [m]"
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="city"
                            name="city"
                            label="Total area of ??additional storage space [m©÷]"
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
      );
    }
}

LoadingPointAdditionalForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoadingPointAdditionalForm);