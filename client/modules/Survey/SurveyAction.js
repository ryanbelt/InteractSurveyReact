/**
 * Created by ryanpan on 2018-10-04.
 */
import callApi from '../../util/apiCaller';

export const SET_UUID = 'SET_UUID';
export const SET_QUESTION = 'SET_QUESTION';

export function setUUID(uuid){
  return{
    type: SET_UUID,
    uuid
  }
}

export function setQuestion(questionObj){
  return{
    type: SET_QUESTION,
    question: questionObj
  }
}

export function fetchQuestion(id){
  return (dispatch) => {
    return callApi(`questions/${id}`).then(res => {
      dispatch(setQuestion(res));
      return true;
    })
      .catch(err => {
        dispatch(setQuestion(null));
        console.error(err);
      })
  }
}

export function updateResponse(uuid, body){
  return (dispatch) => {
    return callApi(`responses/${uuid}`, 'PUT', body).then(res => {
      return true;
    })
      .catch(err => {
        console.error(err);
      })
  }
}

export function getResponse(uuid){
  return (dispatch) => {
    return callApi(`responses/${uuid}`).then(res => {
      return res;
    })
      .catch(err => {
        console.error(err);
      })
  }
}

export function getMetrics(questionId){
  return (dispatch) => {
    return callApi(`responses/score/survey/${questionId}`).then(res => {
      return res;
    })
      .catch(err => {
        console.error(err);
      })
  }
}
