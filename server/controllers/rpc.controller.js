/**
 * Created by ryanpan on 2018-10-05.
 */
let _ = require('underscore');

let ResponseController = require('./response.controller');

function getScoreOfSurveyById(questionId) {
  return ResponseController.getAllResponse({questionId: questionId}, {result:1, categoryPoint:1})
    .then((responses) => {
      let scores = []
      let totalCategoryPoint = 0;
      for(let response of responses){
        for(let category of response.result){
          let index = _.findIndex(scores, {
            text: category.text
          })
          if(index == -1){
            scores.push({
              text: category.text,
              value: category.value
            })
          }else{
            scores[index].value += category.value;
          }
        }
        totalCategoryPoint += response.categoryPoint
      }

      return {
        result: scores,
        categoryPoint: totalCategoryPoint
      }
    })
    .catch((err) => {
      return Promise.reject(err);
    })
}

module.exports = {
  getScoreOfSurveyById: getScoreOfSurveyById,

}
