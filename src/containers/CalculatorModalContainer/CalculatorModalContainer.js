import React from 'react';
import { connect } from 'react-redux';

import CalculatorModal from 'components/CalculatorModal/CalculatorModal.js';
import * as ACTION_TYPES from 'store/actions/calculatorModalActions.js';

class CalculatorModalContainer extends React.Component {
  render() {
    return (
      <CalculatorModal 
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

  get formattedDisplay() { 
    if(this.props.display.length >= 7) { return this.props.display.substring(0, 7); }
    
    return this.props.display;
  }
}

const mapStateToProps = state => {
  return {
    display: state.calcCommands.input
  };
}
const mapDispatchToProps = dispatch => {
  return {
    onInput: input => dispatch({ type: ACTION_TYPES.ADD_INPUT, input }),
    onReset: () => dispatch({ type: ACTION_TYPES.RESET }),
    onConvertSign: () => dispatch({ type: ACTION_TYPES.CONVERT_SIGN }),
    onAdd: () => dispatch({ type: ACTION_TYPES.ADD }),
    onSubtract: () => dispatch({ type: ACTION_TYPES.SUBTRACT }),
    onMultiply: () => dispatch({ type: ACTION_TYPES.MULTIPLY }),
    onDivide: () => dispatch({ type: ACTION_TYPES.DIVIDE }),
    onEqual: () => dispatch({ type: ACTION_TYPES.EQUAL })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorModalContainer);