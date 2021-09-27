import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {
    DatePicker,
} from '../../components/uielements/materialUiPicker';
  
import {FormControls } from '../UiElements/Select/select.style';
import moment from 'moment/moment.js';

const styles = theme => ({
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
    content: {
        margin: theme.spacing.unit,
        width: '97%'
    },
    formControl: {
        minWidth: 400,
        width: '100%'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
  });

class BasicDataForm extends React.Component {
    state = {
        project_type: '',
        project_reason: '',
        client_type: '',
        project_payer: '',
        name: 'hai',
        labelWidth: 0,
        earliest: Date.now(),
        latest: Date.now(),
    };
  
    componentDidMount() {
        this.setState({
            labelWidth: 100,
        });
    }
    
    handleChange = name => value => {
        this.setState({ [name]: value });
    };
  
    render() {
      const { classes } = this.props;
    
      return (
        <React.Fragment>
            <div className={classes.content}>
                <Typography variant="h6" gutterBottom>
                    You can enter your basic data here.
                </Typography>

                <Grid container spacing={0} style={{marginLeft: -8, width: '100%'}}>

                    {/* <Grid item xs={24} sm={12}>
                        <FormControls className={classes.formControl}>
                            <Typography gutterBottom>When was the request made?</Typography>
                            <DatePicker
                                className={classes.datePicker}
                                defaultValue={moment()}
                                animateYearScrolling={false}
                            />
                        </FormControls>
                    </Grid> */}

                    <Grid item xs={24} sm={12}>
                        <FormControls className={classes.formControl}>
                            <Typography style={{color: '#777'}} gutterBottom>When is the order to be carried out at the earliest?</Typography>
                            <DatePicker
                                format="DD.MM.YYYY"
                                value={this.state.earliest}
                                onChange={this.handleChange('earliest')}
                                animateYearScrolling={false}
                                fullWidth
                            />
                        </FormControls>
                    </Grid>

                    <Grid item xs={24} sm={12}>
                        <FormControls className={classes.formControl}>
                            <Typography style={{color: '#777'}} gutterBottom>When is the order executable at the latest?</Typography>
                            <DatePicker
                                format="DD.MM.YYYY"
                                value={this.state.latest}
                                onChange={this.handleChange('latest')}
                                animateYearScrolling={false}
                                fullWidth
                            />
                        </FormControls>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
        
      );
    }
}

BasicDataForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicDataForm);