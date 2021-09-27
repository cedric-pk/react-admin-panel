import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from './../../components/uielements/textfield';
import Tooltip from '../../components/uielements/tooltip';
import Icon from '@material-ui/core/Icon';

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
    content: {
        margin: theme.spacing.unit,
        width: '97%'
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

class UnloadingPointForm extends React.Component {
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

    handleSavedAddressChange = ev => {
        var {data} = this.props
        if (ev.target.value === data.cia_company) {
            data.ulp_name = data.cia_firstname
            data.ulp_street = data.cia_street
            data.ulp_postcode = data.cia_postcode
            data.ulp_city = data.cia_city
        }
        else if (ev.target.value === '') {
            data.ulp_name = ''
            data.ulp_street = ''
            data.ulp_postcode = ''
            data.ulp_city = ''
        }
        data.ulp_address = ev.target.value
        this.props.onChangeData(data)
    }
    render() {
      const { classes, data } = this.props;
    
      return (
        <React.Fragment>
            <div className={classes.content}>
                <Typography variant="h6" gutterBottom>
                    Unloading Point
                </Typography>
                <Grid container spacing={24}>
                    <Grid item xs={24} sm={12}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="id-savedaddr">Use saved address</InputLabel>
                            <Select
                                value={data.ulp_address ? data.ulp_address : ''}
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
                            value={data.ulp_name ? data.ulp_name : ''}
                            onChange={this.props.onChange('ulp_name')}
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
                            value={data.ulp_street ? data.ulp_street : ''}
                            onChange={this.props.onChange('ulp_street')}
                            fullWidth
                            autoComplete="lname"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="postcode"
                            name="postcode"
                            label="Postcode"
                            value={data.ulp_postcode ? data.ulp_postcode : ''}
                            onChange={this.props.onChange('ulp_postcode')}
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="city"
                            name="city"
                            label="City"
                            value={data.ulp_city ? data.ulp_city : ''}
                            onChange={this.props.onChange('ulp_city')}
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography style={{color: '#777', fontSize: 15}}>How many more levels are there?(House entrance, staircase, removal path,...)</Typography>
                        <TextField
                            id="levelnums"
                            name="levelnums"
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography style={{color: '#777', fontSize: 15}}>How long is the total removal path? (In the building and from the buliding to the truck parking a lot.[m]</Typography>
                        <TextField
                            id="total_removal_path"
                            name="total_removal_path"
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

UnloadingPointForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UnloadingPointForm);