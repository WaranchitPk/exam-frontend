import { LOAD_DATA_STACK } from '../../mainReducer/types';
import axios from 'axios';
import { pathApi } from '../../config';


// Get : list Items In Stack
export const getAllDataInStack = () => (
  dispatch => {
    dispatch({
      type: LOAD_DATA_STACK,
      payload: axios.get(`${pathApi}/stack`)
    });
  }
);
// Delete(POP) : delete item in stack
export const deleteDataInStack = (id) => {
  return axios.delete(`${pathApi}/stack/${id}`);
};

// Insert(Push) : insert item in stack
export const insertDataInStack = (stackData) => {
  return axios.post(`${pathApi}/stack`, {
    stack_data: stackData
  });
}
//  http://127.0.0.1:8000/api/v1/stack/insert_at?position=1
export const insertAtDataInStack = (body) => (
  dispatch => {
    dispatch({
      type: LOAD_DATA_STACK,
      payload: axios.post(`${pathApi}/stack/insert_at?position=${body.position}`, {
        stack_data: body.stackData
      })
    });
  }
)
