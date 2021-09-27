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

class LoadingPointSecondForm extends React.Component {
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
                    Loading Point
                </Typography>
                <Grid container spacing={24}>
                    
                    <Grid item xs={12}>
                        <TextField
                            id="total_area_object"
                            name="total_area_object"
                            label="Total area of the object [m©÷]"
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography style={{color: '#777', fontSize: 15}}>Total number of rooms in the object including kitchen, hall etc. (without further storage space like basement etc.)</Typography>
                        <TextField
                            id="total_room_num"
                            name="total_room_num"
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="cellheight"
                            name="cellheight"
                            label="Ceiling height [m]"
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <TextField
                            id="levelnums"
                            name="levelnums"
                            label="How many levels are there?(House entrance, staircase, removal path,...)"
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="cellheight"
                            name="cellheight"
                            label="Ceiling height [m]"
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

LoadingPointSecondForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoadingPointSecondForm);