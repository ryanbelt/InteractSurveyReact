/**
 * Created by ryanpan on 2018-10-04.
 */
import { SET_UUID, SET_QUESTION } from './SurveyAction';

const initialState = {
  uuid:null,
  question:null
};

const SurveyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_UUID:
      return Object.assign({}, state, {uuid: action.uuid});
    case SET_QUESTION:
      return Object.assign({}, state, {question: action.question});

    default:
      return state;
  }
};


// Export Reducer
export default SurveyReducer;
