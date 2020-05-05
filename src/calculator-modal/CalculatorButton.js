import React from 'react';

class CalculatorButton extends React.Component {
  render() {
    return (
      <div className={`calc-modal-btn ${this.sizeClassName} ${this.colorClassName}`}>
        <button onClick={this.props.clickHandler}>
          {this.props.text}
        </button>
      </div>
    );
  }

  get colorClassName() { return `btn-color-${this.props.color}`; }
  get sizeClassName() {
    if(this.props.size === '2') {
      return SIZE_CLASS_NAME_DOUBLE;
    } else {
      return SIZE_CLASS_NAME_DEFAULT;
    }
  }
}

const SIZE_CLASS_NAME_DEFAULT = '';
const SIZE_CLASS_NAME_DOUBLE = 'btn-size-double';

export default CalculatorButton;