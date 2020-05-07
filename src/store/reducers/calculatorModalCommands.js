import BigNumber from 'bignumber.js';

import * as ACTION_TYPES from 'store/actions/calculatorModalActions';

const initialState = {
  newInput: true,
  input: '0',
  result: '0',
  arithmetic: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_INPUT:
      return addInputReducer(state, action.input);
    case ACTION_TYPES.ADD:
    case ACTION_TYPES.SUBTRACT:
    case ACTION_TYPES.MULTIPLY:
    case ACTION_TYPES.DIVIDE:
      let result = executeArithmetic(state.arithmetic, state.result, state.input);
      return showResultReducer(state, result, action.type);
    case ACTION_TYPES.EQUAL:
      result = executeArithmetic(state.arithmetic, state.result, state.input);
      return showResultReducer(state, result, null);
    case ACTION_TYPES.RESET:
      return initialState;
    case ACTION_TYPES.CONVERT_SIGN:
      return convertSignReducer(state);
    case ACTION_TYPES.CONVERT_PERCENTAGE:
      return convertPercentageReducer(state);
  }
  return state;
};

function addInputReducer(state, input = '') {
  if(state.newInput === true) { 
    if(input === '.') { 
      return { ...state, input: '0.', newInput: false }; 
    }
    else { 
      return { ...state, input: input, newInput: false }; 
    }
  }

  if(state.input.length >= 7) { return state; }
  if(input === '.' && state.input.includes('.')) { return state; }
  if(state.input === '0' && input !== '.') { 
    return { ...state, input: input }; 
  }

  return { ...state, input: state.input += input };
}

function convertSignReducer(state) {
  if(state.input === '0') { return state; }

  if(state.input.includes('-')) {
    return { ...state, input: state.input.replace('-', '') };
  } else {
    return { ...state, input: '-' + state.input };
  }
};
/* todo */
function convertPercentageReducer(state) {
  return state;
};

function showResultReducer(state, result, arithmetic) {
  if(state.newInput === true) { return {...state, result: state.input, arithmetic}; }

  return { input: `${result}`, result: `${result}`, newInput: true, arithmetic };
};

function executeArithmetic(arithmeticType, input1, input2) {
  input1 = new BigNumber(input1);
  input2 = new BigNumber(input2);
  let result = null;
  switch(arithmeticType) {
    case ACTION_TYPES.ADD:
      result = input1.plus(input2);
      break;
    case ACTION_TYPES.SUBTRACT:
      result = input1.minus(input2);
      break;
    case ACTION_TYPES.MULTIPLY:
      result = input1.multipliedBy(input2);
      break;
    case ACTION_TYPES.DIVIDE:
      result = input1.dividedBy(input2);
      break;
    default:
      result = input2;
  }
  return result;
}

export default reducer;