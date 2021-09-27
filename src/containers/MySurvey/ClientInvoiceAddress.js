import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from './../../components/uielements/select';
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
    cssLabel: {
        "&$cssFocused": {
          color: "#2196f3"
        }
    },
    cssFocused: {},
});

class ClientInvoiceAddressForm extends React.Component {
    state = {
        labelWidth: 0,
    };
  
    componentDidMount() {
        this.setState({
            labelWidth: 100,
        });
    }
    

    handleChangeUseInfo = (ev) => {
        var {data} = this.props
        if (ev.target.checked === true) {
            data.cpp_salutation = data.cia_salutation
            data.cpp_firstname = data.cia_firstname
            data.cpp_lastname = data.cia_lastName
            data.cpp_telephone = data.cia_telephone
            data.cpp_email = data.cia_email
        }
        else {
            data.cpp_salutation = ''
            data.cpp_firstname = ''
            data.cpp_lastname = ''
            data.cpp_telephone = ''
            data.cpp_email = ''
        }
        data.cia_saveinfo = ev.target.checked
        this.props.onChangeData(data)
    }

    render() {
      const { classes, data } = this.props;
  
      return (
        <React.Fragment>
            <div className={classes.content}>
                <Typography variant="h6" gutterBottom>
                    Client Invoice Address
                </Typography>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            id="companyName"
                            name="companyName"
                            label="Company, Facility, Organization"
                            value={data.cia_company ? data.cia_company : ''}
                            onChange={this.props.onChange('cia_company')}
                            fullWidth
                            autoComplete="fname"
                        />
                    </Grid>
                    
                    <Grid item xs={24} sm={12}>
                        <FormControl className={classes.formControl}>
                            <InputLabel classes={
                                {
                                    root: classes.cssLabel,
                                    focused: classes.cssFocused
                                }
                            } htmlFor="id-salutation">Salutation</InputLabel>
                            <Select
                                value={this.state.salutation}
                                value={data.cia_salutation ? data.cia_salutation : ''}
                                onChange={this.props.onChange('cia_salutation')}
                                inputProps={{
                                    name: 'salutation',
                                    id: 'id-salutation',
                                }}
                            >
                                <MenuItem value="" />
                                <MenuItem value={10}>MR.</MenuItem>
                                <MenuItem value={20}>MRS.</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            value={data.cia_firstname ? data.cia_firstname : ''}
                            onChange={this.props.onChange('cia_firstname')}
                            fullWidth
                            autoComplete="fname"
                        />
                        </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Surname"
                            value={data.cia_lastName ? data.cia_lastName : ''}
                            onChange={this.props.onChange('cia_lastName')}
                            fullWidth
                            autoComplete="lname"
                        />
                    </Grid>
                        
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="street"
                            name="street"
                            label="Street"
                            value={data.cia_street ? data.cia_street : ''}
                            onChange={this.props.onChange('cia_street')}
                            fullWidth
                            autoComplete="billing address-line1"
                        />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <TextField
                            id="postcode"
                            name="postcode"
                            label="PostCode"
                            value={data.cia_postcode ? data.cia_postcode : ''}
                            onChange={this.props.onChange('cia_postcode')}
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="city"
                            name="city"
                            label="City"
                            value={data.cia_city ? data.cia_city : ''}
                            onChange={this.props.onChange('cia_city')}
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="telephone"
                            name="telephone"
                            label="Telephone No"
                            value={data.cia_telephone ? data.cia_telephone : ''}
                            onChange={this.props.onChange('cia_telephone')}
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            name="email"
                            label="E-Mail"
                            value={data.cia_email ? data.cia_email : ''}
                            onChange={this.props.onChange('cia_email')}
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>
                </Grid>
                <FormControlLabel
                    style={{marginTop: 20}}
                    control={
                        <Checkbox
                            checked={data.cia_saveinfo}
                            onChange={this.handleChangeUseInfo}
                            color="primary"
                        />
                    }
                    label="Use this information at Contact person by the place"
                />
            </div>
            </React.Fragment>
        
      );
    }
}

ClientInvoiceAddressForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClientInvoiceAddressForm);