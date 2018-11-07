import { LOAD_DATA_STACK } from '../../mainReducer/types';

const getAllDataInStack = (state = {}, action) => {
  switch (action.type) {
    case `${LOAD_DATA_STACK}_PENDING`:
      return {
        ...state,
        data: null
      };
    case `${LOAD_DATA_STACK}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      };
    case `${LOAD_DATA_STACK}_REJECTED`:
      return {
        ...state,
        data: 'err'
      };
    default:
      return state;
  }
};
export default getAllDataInStack;
