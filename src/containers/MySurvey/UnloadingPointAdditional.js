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

import { MenuItem } from '../../components/uielements/menus';

const styles = theme => ({
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
    formControl: {
        margin: theme.spacing.unit,
        width: '100%',
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

class UnloadingPointAdditionalForm extends React.Component {
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
            <Typography variant="h6" gutterBottom>
                Additional Storage Areas (Unloading point)
            </Typography>
            <Grid container spacing={24}>
                <Grid item xs={24} sm={12}>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="id-additioanl-storage">Are there any additional storage</InputLabel>
                        <Select
                            value={this.state.addtional_storage}
                            onChange={this.handleChange('addtional_storage')}
                            inputProps={{
                                name: 'addtional_storage',
                                id: 'id-additioanl-storage',
                            }}
                        >
                            <MenuItem value="" />
                            <MenuItem value={10}>Yes</MenuItem>
                            <MenuItem value={10}>No</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                
                <Grid item xs={24} sm={12}>
                    <FormControl className={classes.formControl}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Information about additional storage areas"
                            multiline
                            rows="5"
                            defaultValue=""
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                    </FormControl>
                </Grid>
                
                <Grid item xs={24} sm={12}>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="id-floornum">How many floors did the other storage areas count together?</InputLabel>
                        <Select
                            value={this.state.floornum}
                            onChange={this.handleChange('floornum')}
                            inputProps={{
                                name: 'floornum',
                                id: 'id-floornum',
                            }}
                        >
                            <MenuItem value="" />
                            <MenuItem value={10}>5</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={10}>20</MenuItem>
                            <MenuItem value={10}>30</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            </React.Fragment>
      );
    }
}

UnloadingPointAdditionalForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UnloadingPointAdditionalForm);