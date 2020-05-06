import React from 'react';
import CalculatorModal from 'components/CalculatorModal/CalculatorModal.js';
import './CalculatorModalContainer.css';

class CalculatorModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCalculatorShow: true,
      input: '0',
    }
  }
  render() {
    if(this.state.isCalculatorShow === true) {
      return (
        <div className={MASK_CLASS_NAME} onClick={this.hideCalculator}>
          <CalculatorModal 
            show={this.state.isCalculatorShow}
            addInputHandler={this.addInput}
            resetHandler={this.reset}
            convertSignHandler={this.convertSign}
            convertPercentageHandler={this.convertPercentage}
            changeArithmeticHandler={this.changeArithmetic}
            showResultHandler={this.showResult}
          />
        </div>
      );
    } else {
      return null;
    }
  }

  addInputHandler = input => {
    
  };
  resetHandler = () => {

  };
  convertSignHandler = () => {

  };
  convertPercentageHandler = () => {

  };
  changeArithmeticHandler = () => {

  };
  showResultHandler = () => {

  };
  hideCalculator = e => {
    if(e.target.className === MASK_CLASS_NAME) {
      this.setState(() => ({ isCalculatorShow: false }));
    }
  }
  showCalculator = () => {
    this.setState(() => ({ isCalculatorShow: true }));
  };
}

const MASK_CLASS_NAME = 'calculator-mask';

export default CalculatorModalContainer;