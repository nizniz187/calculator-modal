import React from 'react';
import Button from './CalculatorButton.js';
import './calculator-modal.css';

class CalculatorModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
      result: 0,
      arithmeticMode: null
    }
  }

  render() {
    return (
      <div className="calc-modal">
        <div className="calc-modal-ctn">
          <div className="calc-modal-input">{this.state.input}</div>
          <div className="calc-modal-ctrl">            
            <Button color="gray" text="AC" />
            <Button color="gray" text="+/-" />
            <Button color="gray" text="%" />
            <Button color="blueSky" text="÷" />
            <Button color="grayDark" text="7" />
            <Button color="grayDark" text="8" />
            <Button color="grayDark" text="9" />
            <Button color="blueSky" text="&times;" />
            <Button color="grayDark" text="4" />
            <Button color="grayDark" text="5" />
            <Button color="grayDark" text="6" />
            <Button color="blueSky" text="-" />
            <Button color="grayDark" text="1" />
            <Button color="grayDark" text="2" />
            <Button color="grayDark" text="3" />
            <Button color="blueSky" text="+" />
            <Button color="grayDark" text="0" size="2" />
            <Button color="grayDark" text="." />
            <Button color="blueSky" text="=" />
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorModal;