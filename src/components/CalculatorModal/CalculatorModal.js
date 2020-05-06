import React from 'react';
import Button from './CalculatorButton.js';
import { Map } from 'immutable';
import './CalculatorModal.css';

class CalculatorModal extends React.Component {
  render() {
    return (
      <div className="calc-modal">
        <div className="calc-modal-ctn">
          <div className="calc-modal-input">{this.props.input}</div>
          <div className="calc-modal-ctrl">            
            <Button color="gray" text="AC"
              clickHandler={this.props.resetHandler} />
            <Button color="gray" text="+/-"
              clickHandler={this.props.convertSignHandler} />
            <Button color="gray" text="%"
              clickHandler={this.props.convertPercentageHandler} />
            <Button color="blueSky" text={COMMAND_TEXT.get('DIVIDE')}
              clickHandler={this.props.showResultHandler} />
            <Button color="grayDark" text="7" clickHandler={this.props.addInputHandler} />
            <Button color="grayDark" text="8" clickHandler={this.props.addInputHandler} />
            <Button color="grayDark" text="9" clickHandler={this.props.addInputHandler} />
            <Button color="blueSky" text={COMMAND_TEXT.get('MULTIPLY')}
              clickHandler={this.props.showResultHandler} />
            <Button color="grayDark" text="4" clickHandler={this.props.addInputHandler} />
            <Button color="grayDark" text="5" clickHandler={this.props.addInputHandler} />
            <Button color="grayDark" text="6" clickHandler={this.props.addInputHandler} />
            <Button color="blueSky" text={COMMAND_TEXT.get('SUBTRACT')}
              clickHandler={this.props.showResultHandler} />
            <Button color="grayDark" text="1" clickHandler={this.props.addInputHandler} />
            <Button color="grayDark" text="2" clickHandler={this.props.addInputHandler} />
            <Button color="grayDark" text="3" clickHandler={this.props.addInputHandler} />
            <Button color="blueSky" text={COMMAND_TEXT.get('ADD')}
              clickHandler={this.props.showResultHandler} />
            <Button color="grayDark" text="0" size="2"
              clickHandler={this.props.addInputHandler} />
            <Button color="grayDark" text="." clickHandler={this.props.addInputHandler} />
            <Button color="blueSky" text={COMMAND_TEXT.get('EQUAL')}
              clickHandler={this.props.showResultHandler} />
          </div>
        </div>
      </div>
    );
  }
}

export const COMMAND_TEXT = Map({
  ADD: '+',
  SUBTRACT: '-',
  MULTIPLY: '×',
  DIVIDE: '÷',
  EQUAL: '='
});

export default CalculatorModal;