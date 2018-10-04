/**
 * Created by ryanpan on 2018-10-04.
 */
import { Question } from '../models';

function getQuestionByTitle(title) {
  return Question.getQuestionByTitle(title);
}

let self = module.exports = {
  getQuestionByTitle: getQuestionByTitle
}
