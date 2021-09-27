import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
    FormLabel,
    FormControl,
    FormControlLabel,
  } from '../../components/uielements/form';
import { RadioGroup } from '../../components/uielements/radio';
import Radio from '../../components/uielements/radio';
import { Typography } from '@material-ui/core';

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

class BasicDataForm extends React.Component {
    state = {
        value: null
    };
  
    componentDidMount() {
        this.setState({
            labelWidth: 100,
        });
    }
    
    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
      const { classes, data} = this.props
      const { value } = this.state

      return (
        <FormControl
            component="fieldset"
            required
            className={classes.formControl}
        >
            <Typography style={{fontSize: '20px', fontWeight: 500, marginBottom: '12px'}}>{data.question}</Typography>
            <RadioGroup
                aria-label="gender"
                name="gender1"
                className={classes.group}
                value={value}
                onChange={this.handleChange}
            >
            {data.plans && data.plans.map((plan) => (
                <FormControlLabel
                    value={plan}
                    control={<Radio style={value === plan ? {color: '#2196f3'} : {}} />}
                    label={plan}
                    key={plan}
                />
            ))}
            </RadioGroup>
        </FormControl>
      );
    }
}

BasicDataForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicDataForm);