import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from './../../components/uielements/textfield';

import BasicDataForm from './BasicData';
import ClientInvoiceAddressForm from './ClientInvoiceAddress';
import ContactPersonForm from './ContactPerson';
import LoadingPointForm from './LoadingPoint';
import LoadingPointSecondForm from './LoadingPointSecond';
import LoadingPointAdditionalForm from './LoadingPointAdditional';
import UnloadingPointForm from './UnloadingPoint';
import LinearProgress from '@material-ui/core/LinearProgress';
import SelectComponent from './SelectComponent';
import jss from 'jss';

const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  progress: {
    marginLeft: theme.spacing.unit * 1,
    minWidth: '296px',
    marginTop: '24px',
    marginRight: '20px',
    backgroundColor: '#DDD'
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100px'
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '97%',
  },
  textField: {
    width: '100%',
  },
});

const data = [{
  type: 'radio',
  question: "Which type of project is that?",
  plans: ['Disposal request', 'Disposal of single items', 'Removal request', 'Transport request']
},{
  type: 'radio',
  question: "What is the reason for this project?",
  plans: ['Die case', 'Nursing case', 'Other']
},{
  type: 'radio',
  question: "Client Type?",
  plans: ['Private person', 'Company', 'Public Institution']
},{
  type: 'radio',
  question: "Who will pay the cost of this project?",
  plans: ['Company', 'Helath Insurance', 'Insurance', 'Public Institution', 'Self-Payers']
},
{
  type: 'component',
  name: 'Basic Data'
},
{
  type: 'text',
  question: "What exactly is to be done?",
},{
  type: 'text',
  question: "Description of the items",
},{
  type: 'text',
  question: "Arrangements",
},{
  type: 'component',
  name: 'Client Invoice Address'
},{
  type: 'component',
  name: 'Contract person by the place'
},{
  type: 'radio',
  question: "What kind of object is it?",
  plans: ['apartment', 'house', 'Commercial property', 'garage', 'attic', 'basement', 'kitchen', 'other']
},{
  type: 'component',
  name: 'Loading Point'
},{
  type: 'component',
  name: 'Loading Point Second'
},{
  type: 'radio',
  question: "To what % are the rooms filled?",
  plans: ['10', '20', '30']
},{
  type: 'radio',
  question: "How many floors are there?",
  plans: ['10', '20', '30']
},{
  type: 'radio',
  question: "Is an elevator available?",
  plans: ['YES', 'NO']
},{
  type: 'radio',
  question: "How big is the elevator?",
  plans: ['Small', 'Big']
},{
  type: 'radio',
  question: "Is a no-stop zone needed?",
  plans: ['YES', 'NO']
},{
  type: 'radio',
  question: "Are there any additional storage",
  plans: ['YES', 'NO']
},{
  type: 'text',
  question: "Information about additional storage areas",
},{
  type: 'radio',
  question: "How many floors did the other storage areas count together?",
  plans: ['5', '10', '20', '30']
},{
  type: 'radio',
  question: "To what % are the other storage areas filled?",
  plans: ['100', '200']
},{
  type: 'component',
  name: 'Additional Storage Areas(loading point)'
},{
  type: 'component',
  name: 'Unloading Point'
},{
  type: 'radio',
  question: "Are there any additional storage",
  plans: ['YES', 'NO']
},{
  type: 'text',
  question: "Information about additional storage areas",
},{
  type: 'radio',
  question: "How many floors did the other storage areas count together?",
  plans: ['5', '10', '20', '30']
},
]

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
    data: []
  };

  handleChange = type => ev  => {
    var { data } = this.state
    data[type] = ev.target.value
    this.setState({ data })
  }

  handleChangeData = data => {
    this.setState({ data })
  }

  getStepContent = (step) => {
    const { classes } = this.props
    const { data } = this.state
    if (step.type === 'radio') {
      return (
        <SelectComponent data={{
          question: step.question,
          plans: step.plans}} />
      )
    }
    if (step.type === 'text') {
      return (
        <FormControl className={classes.formControl}>
          <Typography style={{fontSize: 20, fontWeight: 500}}>{step.question}</Typography>
          <TextField
              id="outlined-multiline-static"
              label={step.question}
              multiline
              rows="5"
              defaultValue=""
              className={classes.textField}
              margin="normal"
              variant="outlined"
          />
        </FormControl>
      )
    }
    switch (step.name) {
      case 'Basic Data':
          return (<BasicDataForm />);
      case 'Client Invoice Address':
          return (<ClientInvoiceAddressForm data={data} onChange={this.handleChange} onChangeData={this.handleChangeData} />);
      case 'Contract person by the place':
          return (<ContactPersonForm data={data} onChange={this.handleChange} />);
      case 'Loading Point':
        return (<LoadingPointForm data={data} onChange={this.handleChange} onChangeData={this.handleChangeData} />);
      case 'Loading Point Second':
        return (<LoadingPointSecondForm />);
      case 'Additional Storage Areas(loading point)':
          return (<LoadingPointAdditionalForm />);
      case 'Unloading Point':
          return (<UnloadingPointForm data={data} onChange={this.handleChange} onChangeData={this.handleChangeData} />);
      default:
        return 'Unknown step';
    }
  }

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({activeStep: activeStep - 1});
  }

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({activeStep: activeStep + 1});
  }
  
  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    const barColorStyle = jss.createStyleSheet({
      bar: {
        ['background-color']: '#5BB85D'
      }
    }).attach();

    return (
      <div className={classes.root}>
        {this.getStepContent(data[activeStep])}
        <div style={{marginTop: '16px', display: 'flex', flexDirection: 'row', position: 'relative', width: '100%'}}>

          <LinearProgress
            classes={{barColorPrimary: barColorStyle.classes.bar}}
            className={classes.progress}
            color="primary" variant="determinate" value={activeStep * 100/ data.length} />

          <div style={{display: 'flex', flexDirection: 'row'}}>
            <Button color="default" className={classes.button} onClick={(ev)=>{
              ev.preventDefault();
              this.handleBack();
            }} disabled={activeStep === 0} >Back</Button>
            <Button color="primary" variant="contained" className={classes.button} style={{backgroundColor: '#2196f3', color: '#fff'}} onClick={(ev)=>{
              ev.preventDefault();
              this.handleNext();
            }} disabled={activeStep >= data.length - 1} >Next</Button>
          </div>
        </div>
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(VerticalLinearStepper);