import React from 'react';
import CalculatorModal from 'components/CalculatorModal/CalculatorModal.js';
import './CalculatorModalContainer.css';

class CalculatorModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCalculatorShow: true,
      input: '0',
      result: 0,
      arithmetic: null
    }
  }
  render() {
    if(this.state.isCalculatorShow === true) {
      return (
        <div className={MASK_CLASS_NAME}>
          <CalculatorModal 
            show={this.state.isCalculatorShow}
            input={this.state.input}
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

  addInput = (input = '') => {
    this.setState(state => {
      if(state.input.length >= 7) { return state; }
      if(input === '.' && state.input.includes('.')) { return state; }
      if(state.input === '0' && input !== '.') { return { input: input }; }

      return { input: state.input += input };
    });
  };
  reset = () => {
    this.setState(() => {
      return { 
        input: '0', result: 0
      };
    });
  };
  convertSign = () => {

  };
  convertPercentage = () => {

  };
  changeArithmetic = () => {

  };
  showResult = () => {

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