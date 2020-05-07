import React from 'react';
import { connect } from 'react-redux';

import CalculatorModal from 'components/CalculatorModal/CalculatorModal.js';
import * as ACTION_TYPES from 'store/actions/calculatorModalActions.js';

class CalculatorModalContainer extends React.Component {
  render() {
    if(this.props.show === true) {
      return (
        <CalculatorModal
          modalid={MODAL_ID}
          maskId={MASK_ID}
          onMaskClick={this.props.onMaskClick}

          isMovable={this.props.isMovable}
          position={this.props.position}
          onMoveStart={this.props.onMoveStart}
          onMove={this.props.onMove}
          onMoveEnd={this.props.onMoveEnd}

          display={this.formattedDisplay}
          onInput={this.props.onInput}
          onReset={this.props.onReset}
          onConvertSign={this.props.onConvertSign}
          onConvertPercentage={this.props.onConvertPercentage}
          onAdd={this.props.onAdd}
          onSubtract={this.props.onSubtract}
          onMultiply={this.props.onMultiply}
          onDivide={this.props.onDivide}
          onEqual={this.props.onEqual}
        />
      );
    } else {
      return null;
    }
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

const MASK_ID = 'calculatorMask';
const MODAL_ID = 'calculatorModal';
const DEVICE_BREAK_POINT = 425;

const mapStateToProps = state => {
  return {
    show: state.calcDisplay.isShow,
    display: state.calcCommands.input,
    isMovable: state.calcPosition.isMovable,
    position: { x: state.calcPosition.x, y: state.calcPosition.y }
  };
}
const mapDispatchToProps = dispatch => {
  return {
    onMaskClick: e => {
      if(e.target.id !== MASK_ID) { return };

      dispatch({ type:ACTION_TYPES.HIDE })
    },
    onInput: input => { dispatch({ type: ACTION_TYPES.ADD_INPUT, input }) },
    onReset: () => dispatch({ type: ACTION_TYPES.RESET }),
    onConvertSign: () => dispatch({ type: ACTION_TYPES.CONVERT_SIGN }),
    onConvertPercentage: () => dispatch({ type: ACTION_TYPES.CONVERT_PERCENTAGE }),
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
        userPosition: getUserPosition(e),
        modalPosition: { x: e.currentTarget.offsetLeft, y: e.currentTarget.offsetTop }
      });
    },
    onMove: e => {
      dispatch({ 
        type: ACTION_TYPES.MOVE, 
        userPosition: getUserPosition(e)
      });
    },
    onMoveEnd: () => dispatch({ type: ACTION_TYPES.MOVE_END })
  };
}
const getUserPosition = e => {
  if(e.changedTouches instanceof TouchList && e.changedTouches.length > 0) {
    return { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
  } else {
    return { x: e.clientX, y: e.clientY };
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorModalContainer);