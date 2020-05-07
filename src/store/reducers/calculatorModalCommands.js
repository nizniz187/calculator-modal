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

function showResultReducer(state, result, arithmetic) {
  if(state.newInput === true) { return state; }
 
  return { input: `${result}`, result: `${result}`, newInput: true, arithmetic };
};

function executeArithmetic(arithmeticType, input1, input2) {
  input1 = Number(input1);
  input2 = Number(input2);
  switch(arithmeticType) {
    case ACTION_TYPES.ADD:
      return input1 + input2;
    case ACTION_TYPES.SUBTRACT:
      return input1 - input2;
    case ACTION_TYPES.MULTIPLY:
      return input1 * input2;
    case ACTION_TYPES.DIVIDE:
      return input1 / input2;
    default:
      return input2;
  }
}

export default reducer;