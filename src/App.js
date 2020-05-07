import React from 'react';
import { connect } from 'react-redux';

import CalculatorModalContainer from 'containers/CalculatorModalContainer/CalculatorModalContainer.js';
import * as ACTION_TYPES from 'store/actions/calculatorModalActions';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.props.showCalculatorModal}>Calculator</button>
        <CalculatorModalContainer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showCalculatorModal: () => dispatch({ type: ACTION_TYPES.SHOW })
  };
};
export default connect(null, mapDispatchToProps)(App);