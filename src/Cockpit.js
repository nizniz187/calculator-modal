import React from 'react';
import Calculator from './calculator-modal/CalculatorModal.js';
import './cockpit.css';

class Cockpit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCalculatorShow: true
    }
  }
  render() {
    return (
      <div>
        <button type="button" onClick={this.showCalculator}>Calculator</button>
        {this.renderCalculator()}
      </div>
    );
  }
  renderCalculator() {
    if(this.state.isCalculatorShow === true) {
      return (
        <div className={MASK_CLASS_NAME} onClick={this.hideCalculator}>
          <Calculator show={this.state.isCalculatorShow} />
        </div>
      );
    } else {
      return null;
    }
  }

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

export default Cockpit;