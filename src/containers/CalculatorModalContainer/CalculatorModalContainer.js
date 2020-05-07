import React from 'react';
import { connect } from 'react-redux';

import CalculatorModal from 'components/CalculatorModal/CalculatorModal.js';
import * as BUTTON_TEXT from 'components/CalculatorModal/settings/BUTTON_TEXT.js';
import * as ACTION_TYPES from 'store/actions/calculatorModalActions.js';

class CalculatorModalContainer extends React.Component {
  render() {
    return (
      <CalculatorModal
        id={MODAL_ID}
        isMovable={this.props.isMovable}
        position={this.props.position}
        onMouseDown={this.props.onMoveStart}
        onMouseMove={this.props.onMove}
        onMouseUp={this.props.onMoveEnd}

        display={this.formattedDisplay}
        onInput={this.props.onInput}
        onReset={this.props.onReset}
        onConvertSign={this.props.onConvertSign}
        onAdd={this.props.onAdd}
        onSubtract={this.props.onSubtract}
        onMultiply={this.props.onMultiply}
        onDivide={this.props.onDivide}
        onEqual={this.props.onEqual}
      />
    );
  }
  componentDidMount() {
    window.addEventListener('resize', this.props.onWindowResize);
    this.props.onWindowResize(DEVICE_BREAK_POINT);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.props.onWindowResize);
  }

  get formattedDisplay() { 
    if(this.props.display.length >= 7) { return this.props.display.substring(0, 7); }
    
    return this.props.display;
  }
}

const MODAL_ID = 'calculatorModal';
const DEVICE_BREAK_POINT = 425;

const mapStateToProps = state => {
  return {
    display: state.calcCommands.input,
    isMovable: state.calcPosition.isMovable,
    position: { x: state.calcPosition.x, y: state.calcPosition.y }
  };
}
const mapDispatchToProps = dispatch => {
  return {
    onInput: input => { dispatch({ type: ACTION_TYPES.ADD_INPUT, input }) },
    onReset: () => dispatch({ type: ACTION_TYPES.RESET }),
    onConvertSign: () => dispatch({ type: ACTION_TYPES.CONVERT_SIGN }),
    onAdd: () => dispatch({ type: ACTION_TYPES.ADD }),
    onSubtract: () => dispatch({ type: ACTION_TYPES.SUBTRACT }),
    onMultiply: () => dispatch({ type: ACTION_TYPES.MULTIPLY }),
    onDivide: () => dispatch({ type: ACTION_TYPES.DIVIDE }),
    onEqual: () => dispatch({ type: ACTION_TYPES.EQUAL }),
    onWindowResize: () => {
      dispatch({ 
        type: ACTION_TYPES.WINDOW_RESIZE, 
        breakPoint: DEVICE_BREAK_POINT 
      })
    },
    onMoveStart: e => {
      dispatch({ 
        type: ACTION_TYPES.MOVE_START, 
        mousePosition: { x: e.clientX, y: e.clientY},
        modalPosition: { x: e.currentTarget.offsetLeft, y: e.currentTarget.offsetTop }
      });
    },
    onMove: e => {
      dispatch({ 
        type: ACTION_TYPES.MOVE, 
        mousePosition: { x: e.clientX, y: e.clientY}
      });
    },
    onMoveEnd: () => dispatch({ type: ACTION_TYPES.MOVE_END }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorModalContainer);