import React from 'react';
import CalculatorModalContainer from 'containers/CalculatorModalContainer/CalculatorModalContainer.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.showCalculator}>Calculator</button>
        <CalculatorModalContainer />
      </div>
    );
  }
}

export default App;