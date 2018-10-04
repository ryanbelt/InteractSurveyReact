/**
 * Created by ryanpan on 2018-10-04.
 */
import { Question } from '../models';

function getQuestionByid(id) {
  return Question.getQuestionById(id);
}

let self = module.exports = {
  getQuestionByid: getQuestionByid
}
