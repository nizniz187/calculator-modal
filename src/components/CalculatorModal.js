import React from 'react';
import Button from './CalculatorButton/CalculatorButton.js';
import * as BUTTON_TEXT from './settings/BUTTON_TEXT.js';

import './CalculatorModal.css';

class CalculatorModal extends React.Component {
  render() {
    return (
      <div id={this.props.maskId} className="calc-modal-mask"
        onClick={this.props.onMaskClick}
        onMouseMove={this.getMoveHandler(this.props.onMouseMove)}
        onMouseUp={this.getMoveHandler(this.props.onMouseUp)}>
        <div id={this.props.modalId} className="calc-modal" style={this.positionStyles}
          onMouseDown={this.getMoveHandler(this.props.onMouseDown)}>
          <div className="calc-modal-ctn">
            <div className="calc-modal-display">{this.props.display}</div>
            <div className="calc-modal-ctrl">            
              <Button color="gray" text={BUTTON_TEXT.COMMAND_RESET} onClick={this.props.onReset} />
              <Button color="gray" text={BUTTON_TEXT.COMMAND_SIGN} onClick={this.props.onConvertSign} />
              <Button color="gray" text={BUTTON_TEXT.COMMAND_PERCENTAGE} onClick={this.props.onConvertPercentage} />
              <Button color="blueSky" text={BUTTON_TEXT.COMMAND_DIVIDE} onClick={this.props.onDivide} />
              <Button color="grayDark" text={BUTTON_TEXT.INPUT_7} onClick={this.props.onInput} />
              <Button color="grayDark" text={BUTTON_TEXT.INPUT_8} onClick={this.props.onInput} />
              <Button color="grayDark" text={BUTTON_TEXT.INPUT_9} onClick={this.props.onInput} />
              <Button color="blueSky" text={BUTTON_TEXT.COMMAND_MULTIPLY} onClick={this.props.onMultiply} />
              <Button color="grayDark" text={BUTTON_TEXT.INPUT_4} onClick={this.props.onInput} />
              <Button color="grayDark" text={BUTTON_TEXT.INPUT_5} onClick={this.props.onInput} />
              <Button color="grayDark" text={BUTTON_TEXT.INPUT_6} onClick={this.props.onInput} />
              <Button color="blueSky" text={BUTTON_TEXT.COMMAND_SUBTRACT} onClick={this.props.onSubtract} />
              <Button color="grayDark" text={BUTTON_TEXT.INPUT_1} onClick={this.props.onInput} />
              <Button color="grayDark" text={BUTTON_TEXT.INPUT_2} onClick={this.props.onInput} />
              <Button color="grayDark" text={BUTTON_TEXT.INPUT_3} onClick={this.props.onInput} />
              <Button color="blueSky" text={BUTTON_TEXT.COMMAND_ADD} onClick={this.props.onAdd} />
              <Button color="grayDark" text={BUTTON_TEXT.INPUT_0} size="2" textAlign='left' onClick={this.props.onInput} />
              <Button color="grayDark" text={BUTTON_TEXT.INPUT_DOT} onClick={this.props.onInput} />
              <Button color="blueSky" text={BUTTON_TEXT.COMMAND_EQUAL} onClick={this.props.onEqual} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  getMoveHandler(handler) {
    if(this.props.isMovable === true) { return handler; }
    else { return null; }
  }

  get positionStyles() {
    if(this.props.isMovable !== true) { return {}; }
    if(this.props.position === null || typeof this.props.position !== 'object') {
      return {};
    }

    return { 
      top: `${this.props.position.y}px`, 
      left: `${this.props.position.x}px` 
    };
  }
}

export default CalculatorModal;