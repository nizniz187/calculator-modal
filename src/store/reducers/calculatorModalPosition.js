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
      return moveStartReducer(state, action.mousePosition, action.modalPosition);
    case ACTION_TYPES.MOVE:
      return moveReducer(state, action.mousePosition);
    case ACTION_TYPES.MOVE_END:
      return moveEndReducer(state);
  }
  return state;
};

function windowResizeReducer(state, breakPoint) {
  if(typeof breakPoint === 'number' && !isNaN(breakPoint)) {
    return { ...state, isMovable: innerWidth > breakPoint };
  } else {
    return state;
  }
}
function moveStartReducer(state, mousePosition, modalPosition) {
  if(!mousePosition || typeof mousePosition !== 'object') { return state; }
  if(!modalPosition || typeof modalPosition !== 'object') { return state; }

  return {
    ...state,
    offsetX: mousePosition.x - modalPosition.x,
    offsetY: mousePosition.y - modalPosition.y,
    isMoving: true
  };
}
function moveReducer(state, mousePosition) {
  if(state.isMovable !== true || state.isMoving !== true) { return state; }
  if(!mousePosition || typeof mousePosition !== 'object') { return state; }
  
  return {
    ...state,
    x: mousePosition.x - state.offsetX,
    y: mousePosition.y - state.offsetY
  };
}
function moveEndReducer(state) {
  if(state.isMovable !== true || state.isMoving !== true) { return state; }
  
  return { ...state, isMoving: false };
}

export default reducer;