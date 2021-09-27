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
        minWidth: '100%',
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

class LoadingPointForm extends React.Component {
    state = {
        labelWidth: 0,
    };
  
    componentDidMount() {
        this.setState({
            labelWidth: 100,
        });
    }
    
    handleSavedAddressChange = ev => {
        var {data} = this.props
        if (ev.target.value === data.cia_company) {
            data.lp_name = data.cia_firstname
            data.lp_street = data.cia_street
            data.lp_postcode = data.cia_postcode
            data.lp_city = data.cia_city
        }
        else if (ev.target.value === '') {
            data.lp_name = ''
            data.lp_street = ''
            data.lp_postcode = ''
            data.lp_city = ''
        }
        data.lp_address = ev.target.value
        this.props.onChangeData(data)
    }
  
    render() {
      const { classes, data } = this.props;
    
      return (
        <React.Fragment>
            <div className={classes.content}>
                <Typography variant="h6" gutterBottom>
                    Loading Point
                </Typography>
                <Grid container spacing={24}>
                    <Grid item xs={24} sm={12}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="id-savedaddr">Use saved address</InputLabel>
                            <Select
                                value={data.lp_address ? data.lp_address : ''}
                                onChange={this.handleSavedAddressChange}
                                inputProps={{
                                    name: 'saved_addr',
                                    id: 'id-savedaddr',
                                }}
                            >
                                <MenuItem value="" />
                                <MenuItem value={data.cia_company}>{data.cia_company}</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="bellname"
                            name="bellname"
                            label="What is the name on the bell?"
                            value={data.lp_name ? data.lp_name : ''}
                            onChange={this.props.onChange('lp_name')}
                            fullWidth
                            autoComplete="fname"
                        />
                        </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="streetname"
                            name="streetname"
                            label="streetname, housenumber"
                            value={data.lp_street ? data.lp_street : ''}
                            onChange={this.props.onChange('lp_street')}
                            fullWidth
                            autoComplete="lname"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="postcode"
                            name="postcode"
                            label="Postcode"
                            value={data.lp_postcode ? data.lp_postcode : ''}
                            onChange={this.props.onChange('lp_postcode')}
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="city"
                            name="city"
                            label="City"
                            value={data.lp_city ? data.lp_city : ''}
                            onChange={this.props.onChange('lp_city')}
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

LoadingPointForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoadingPointForm);