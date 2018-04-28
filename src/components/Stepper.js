import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import '../App.css';
class ProgressStepper extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };
  clickedState = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: 1,
      finished: false
    })
  }
  clickedSenator = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: 2,
      finished: true
    })
  }
  clickedHome = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: 0,
      finished: false
    })
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  render() {
    const {finished, stepIndex} = this.state;

    return (
      <div className={"stepper_bar"} style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <IconButton tooltip="Reset">
            <ActionHome onClick={this.clickedHome}/>
          </IconButton>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Pick a State</StepLabel>
          </Step>
          <Step>
            <StepLabel>Pick a Senator</StepLabel>
          </Step>
          <Step>
            <StepLabel>View Analytics</StepLabel>
          </Step>
        </Stepper>
      </div>
    );
  }
}

export default ProgressStepper;
