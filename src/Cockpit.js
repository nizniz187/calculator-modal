import React from 'react';
import Calculator from './calculator-modal/CalculatorModal.js';

class Cockpit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCalculatorShow: false
    }
  }
  render() {
    return (
      <div>
        <button type="button" onClick={this.showCalculator}>Calculator</button>
        <Calculator show={this.state.isCalculatorShow} />
      </div>
    );
  }

  showCalculator = () => {
    this.setState((state, props) => {
      return { isCalculatorShow: true };
    });
  };
}

export default Cockpit;