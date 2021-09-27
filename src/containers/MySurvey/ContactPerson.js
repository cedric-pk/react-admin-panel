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
    formControl: {
        minWidth: '100%',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    content: {
        margin: theme.spacing.unit,
        width: '97%'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 400,
    },
  });

class ContactPersonForm extends React.Component {
    state = {
        labelWidth: 0,
    };
  
    componentDidMount() {
        this.setState({
            labelWidth: 100,
        });
    }
    
 
    render() {
      const { classes, data } = this.props;
    
      return (
        <React.Fragment>
            <div className={classes.content}>
                <Typography variant="h6" gutterBottom>
                    Contact person by the place
                </Typography>
                <Grid container spacing={24}>

                    <Grid item xs={24} sm={12}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="id-contact-person-sal">Salutation</InputLabel>
                            <Select
                                value={data.cpp_salutation ? data.cpp_salutation : ''}
                                onChange={this.props.onChange('cpp_salutation')}
                                inputProps={{
                                    name: 'contact_person_sal',
                                    id: 'id-contact-person-sal',
                                }}
                            >
                                <MenuItem value="" />
                                <MenuItem value={10}>Mr.</MenuItem>
                                <MenuItem value={20}>Mrs.</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            value={data.cpp_firstname ? data.cpp_firstname : ''}
                            onChange={this.props.onChange('cpp_firstname')}
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
                            value={data.cpp_lastname ? data.cpp_lastname : ''}
                            onChange={this.props.onChange('cpp_lastname')}
                            fullWidth
                            autoComplete="lname"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="telephone"
                            name="telephone"
                            label="Telephone No"
                            value={data.cpp_telephone ? data.cpp_telephone : ''}
                            onChange={this.props.onChange('cpp_telephone')}
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            name="email"
                            label="E-Mail"
                            value={data.cpp_email ? data.cpp_email : ''}
                            onChange={this.props.onChange('cpp_email')}
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

ContactPersonForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactPersonForm);