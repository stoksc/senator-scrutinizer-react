import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

import '../App.css';
class ProgressStepper extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  clickedState = () => {
    this.setState({
      stepIndex: 1,
      finished: false
    })
  }

  clickedSenator = () => {
    this.setState({
      stepIndex: 2,
      finished: true
    })
  }

  clickedHome = () => {
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
    const {stepIndex} = this.state;
    return (
      <div className="stepper_bar" style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
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
