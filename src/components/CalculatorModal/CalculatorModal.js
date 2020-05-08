import React from 'react';
import Button from './CalculatorButton/CalculatorButton.js';
import * as BUTTON_TEXT from './settings/BUTTON_TEXT.js';

import './CalculatorModal.css';

class CalculatorModal extends React.Component {
  render() {
    return (
      /* Mask */
      <div id={this.props.maskId} className="calc-modal-mask"
        onClick={this.props.onMaskClick}
        onMouseMove={this.getMoveHandler(this.props.onMove)}
        onMouseUp={this.getMoveHandler(this.props.onMoveEnd)}    
        onTouchMove={this.getMoveHandler(this.props.onMove)}
        onTouchEnd={this.getMoveHandler(this.props.onMoveEnd)}
        onTouchCancel={this.getMoveHandler(this.props.onMoveEnd)}>

        {/* Modal */}
        <div id={this.props.modalId} className="calc-modal" style={this.positionStyles}
          onMouseDown={this.getMoveHandler(this.props.onMoveStart)}    
          onTouchStart={this.getMoveHandler(this.props.onMoveStart)}
          onContextMenu={this.preventContextMenu}>
          {/* Modal Container */}
          <div className="calc-modal-ctn">
            {/* Result Display */}
            <div className="calc-modal-display">{this.props.display}</div>            
            {/* Buttons */}
            <div className="calc-modal-ctrl">
              {/* Button 'AC' */}
              <Button color="gray" text={BUTTON_TEXT.COMMAND_RESET} onClick={this.props.onReset} />
              {/* Button '+/- */}
              <Button color="gray" text={BUTTON_TEXT.COMMAND_SIGN} onClick={this.props.onConvertSign} />
              {/* Button '%' */}
              <Button color="gray" text={BUTTON_TEXT.COMMAND_PERCENTAGE} onClick={this.props.onConvertPercentage} />
              {/* Button '/' */}
              <Button color="blueSky" text={BUTTON_TEXT.COMMAND_DIVIDE} onClick={this.props.onDivide} />
              {/* Button '7' */}
              <Button color="grayDark" text={BUTTON_TEXT.INPUT_7} onClick={this.props.onInput} />
              {/* Button '8' */}
              <Button color="grayDark" text={BUTTON_TEXT.INPUT_8} onClick={this.props.onInput} />
              {/* Button '9' */}
              <Button color="grayDark" text={BUTTON_TEXT.INPUT_9} onClick={this.props.onInput} />
              {/* Button '*' */}
              <Button color="blueSky" text={BUTTON_TEXT.COMMAND_MULTIPLY} onClick={this.props.onMultiply} />
              {/* Button '4' */}
              <Button color="grayDark" text={BUTTON_TEXT.INPUT_4} onClick={this.props.onInput} />
              {/* Button '5' */}
              <Button color="grayDark" text={BUTTON_TEXT.INPUT_5} onClick={this.props.onInput} />
              {/* Button '6' */}
              <Button color="grayDark" text={BUTTON_TEXT.INPUT_6} onClick={this.props.onInput} />
              {/* Button '-' */}
              <Button color="blueSky" text={BUTTON_TEXT.COMMAND_SUBTRACT} onClick={this.props.onSubtract} />
              {/* Button '1' */}
              <Button color="grayDark" text={BUTTON_TEXT.INPUT_1} onClick={this.props.onInput} />
              {/* Button '2' */}
              <Button color="grayDark" text={BUTTON_TEXT.INPUT_2} onClick={this.props.onInput} />
              {/* Button '3' */}
              <Button color="grayDark" text={BUTTON_TEXT.INPUT_3} onClick={this.props.onInput} />
              {/* Button '+' */}
              <Button color="blueSky" text={BUTTON_TEXT.COMMAND_ADD} onClick={this.props.onAdd} />
              {/* Button '0' */}
              <Button color="grayDark" text={BUTTON_TEXT.INPUT_0} size="2" textAlign='left' onClick={this.props.onInput} />
              {/* Button '.' */}
              <Button color="grayDark" text={BUTTON_TEXT.INPUT_DOT} onClick={this.props.onInput} />
              {/* Button '=' */}
              <Button color="blueSky" text={BUTTON_TEXT.COMMAND_EQUAL} onClick={this.props.onEqual} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  preventContextMenu = e => { e.preventDefault(); };

  /**
   * Get handler to bind on related mouse / touch event by checking the modal is movable or not.
   *  - Movable: return the handler function given.
   *  - Unmovable: return null.
   * @param {function} handler - Handler to be bound.
   * @returns {function} Related move handler.
   */
  getMoveHandler(handler) {
    if(this.props.isMovable === true) { return handler; }
    else { return null; }
  }

  /**
   * Get modal absolute position coordinates style object.
   * @returns {Object} Style object with top & left properties.
   */
  get positionStyles() {
    /* Avoid setting coordinates if the modal is unmovable. */
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