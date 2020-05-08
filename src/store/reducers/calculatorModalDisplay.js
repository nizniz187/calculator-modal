/**
 * @module calculatorModalDisplay
 * Reducer for claculator modal display (show / hide).
 */
import * as ACTION_TYPES from 'store/actions/calculatorModalActions';

const initialState = { 
  isShow: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SHOW:
      return { isShow: true };
    case ACTION_TYPES.HIDE:
      return { isShow: false };
  }
  return state;
};

export default reducer;