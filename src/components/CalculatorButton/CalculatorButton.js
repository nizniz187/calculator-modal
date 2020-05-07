import React from 'react';
import './CalculatorButton.css';

class CalculatorButton extends React.Component {
  render() {
    return (
      <div className={`calc-btn ${this.sizeClassName} ${this.colorClassName}`}>
        <button onClick={this.clickHandler}>
          {this.props.text}
        </button>
      </div>
    );
  }

  clickHandler = () => {
    if(typeof this.props.onClick === 'function') {
      this.props.onClick(this.props.text);
    }
  };

  get colorClassName() { return `calc-btn-color-${this.props.color}`; }
  get sizeClassName() {
    if(this.props.size === '2') {
      return SIZE_CLASS_NAME_DOUBLE;
    } else {
      return SIZE_CLASS_NAME_DEFAULT;
    }
  }
}

const SIZE_CLASS_NAME_DEFAULT = '';
const SIZE_CLASS_NAME_DOUBLE = 'calc-btn-size-double';

export default CalculatorButton;