import React from 'react';

class CalculatorModal extends React.Component {
  render() {
    if(this.props.show === true) {
      return <div>Calculator</div>
    } else {
      return null;
    }
  }
}

export default CalculatorModal;