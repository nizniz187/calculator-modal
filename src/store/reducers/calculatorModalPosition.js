/**
 * @module calculatorModalPosition
 * Reducer for claculator modal position & moving.
 */
import * as ACTION_TYPES from 'store/actions/calculatorModalActions';

const initialState = { 
  x: null, y: null, 
  offsetX: null, offsetY: null,
  isMovable: false, isMoving: false 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.WINDOW_RESIZE:
      return windowResizeReducer(state, action.breakPoint);
    case ACTION_TYPES.MOVE_START:
      return moveStartReducer(state, action.userPosition, action.modalPosition);
    case ACTION_TYPES.MOVE:
      return moveReducer(state, action.userPosition);
    case ACTION_TYPES.MOVE_END:
      return moveEndReducer(state);
  }
  return state;
};

/**
 * Reducer for updating modal movability by comparing 
 *  the window width with given breakpoint.
 *  - Window inner width > breakpoint: movable.
 *  - Window inner width <= breakpoint: unmovable.
 * @param {Object} state - Current state object.
 * @param {*} breakPoint - Breakpoint of movability.
 * @returns {Object} New state object.
 */
function windowResizeReducer(state, breakPoint) {
  if(typeof breakPoint === 'number' && !isNaN(breakPoint)) {
    return { ...state, isMovable: innerWidth > breakPoint };
  } else {
    return state;
  }
}
/**
 * Reducer for modal move start (mousedown / touchstart).
 * @param {Object} state - Current state object.
 * @param {Object} userPosition - User activity position with x & y properties.
 * @param {Object} modalPosition - Modal position with x & y properties.
 * @returns {Object} New state object.
 */
function moveStartReducer(state, userPosition, modalPosition) {
  if(!userPosition || typeof userPosition !== 'object') { return state; }
  if(!modalPosition || typeof modalPosition !== 'object') { return state; }

  return {
    ...state,
    offsetX: userPosition.x - modalPosition.x,
    offsetY: userPosition.y - modalPosition.y,
    isMoving: true
  };
}
/**
 * Reducer for modal moving (mousemove / touchmove).
 * @param {Object} state - Current state object.
 * @param {Object} userPosition - User activity position with x & y properties.
 * @returns {Object} New state object.
 */
function moveReducer(state, userPosition) {
  if(state.isMovable !== true || state.isMoving !== true) { return state; }
  if(!userPosition || typeof userPosition !== 'object') { return state; }
  
  return {
    ...state,
    x: userPosition.x - state.offsetX,
    y: userPosition.y - state.offsetY
  };
}
/**
 * Reducer for modal move end (mouseup / touchend / touchcancel).
 * @param {Object} state - Current state object.
 * @returns {Object} New state object.
 */
function moveEndReducer(state) {
  if(state.isMovable !== true || state.isMoving !== true) { return state; }
  
  return { ...state, isMoving: false };
}

export default reducer;