import React from 'react';
import CalculatorModal, { COMMAND_TEXT } from 'components/CalculatorModal/CalculatorModal.js';
import './CalculatorModalContainer.css';

class CalculatorModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCalculatorShow: true,
      newInput: true,
      input: '0',
      result: '0',
      command: null
    };
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
      if(state.newInput === true) { 
        if(input === '.') { return { input: '0.', newInput: false }; }
        else { return { input: input, newInput: false }; }
      }

      if(state.input.length >= 7) { return state; }
      if(input === '.' && state.input.includes('.')) { return state; }
      if(state.input === '0' && input !== '.') { return { input: input }; }

      return { input: state.input += input };
    });
  };
  reset = () => {
    this.setState(() => {
      return {
        newInput: true,
        input: '0',
        result: '0',
        command: null
      };
    });
  };
  convertSign = () => {
    this.setState(state => {
      if(state.input === '0') { return state; }

      if(state.input.includes('-')) {
        return { input: state.input.replace('-', '') };
      } else {
        return { input: '-' + state.input };
      }
    });
  };
  convertPercentage = () => {
    this.setState(state => {
      if(state.command === null) { return { input: '0' }; }
    });
  };
  showResult = command => {
    this.setState(state => {
      let input = this.executeArithmetic(state.command, state.result, state.input);
      return { input: `${input}`, result: `${input}`, command, newInput: true };
    });
  };

  hideCalculator = e => {
    if(e.target.className === MASK_CLASS_NAME) {
      this.setState(() => ({ isCalculatorShow: false }));
    }
  };
  showCalculator = () => {
    this.setState(() => ({ isCalculatorShow: true }));
  };

  executeArithmetic(arithmetic, input1, input2) {
    input1 = Number(input1);
    input2 = Number(input2);
    switch(arithmetic) {
      case COMMAND_TEXT.get('ADD'):
        return input1 + input2;
      case COMMAND_TEXT.get('SUBTRACT'):
        return input1 - input2;
      case COMMAND_TEXT.get('MULTIPLY'):
        return input1 * input2;
      case COMMAND_TEXT.get('DIVIDE'):
        return input1 / input2;
      default:
        return input2;
    }
  }
  isCommandArithmetic(command) {
    switch(command) {
      case COMMAND_TEXT.get('ADD'):
      case COMMAND_TEXT.get('SUBTRACT'):
      case COMMAND_TEXT.get('MULTIPLY'):
      case COMMAND_TEXT.get('DIVIDE'):
        return true;
    }
    return false;
  }
}

const MASK_CLASS_NAME = 'calculator-mask';

export default CalculatorModalContainer;