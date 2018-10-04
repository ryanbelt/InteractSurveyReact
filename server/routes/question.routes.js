/**
 * Created by ryanpan on 2018-10-04.
 */
'use strict';

let QuestionController = require('../controllers/question.controller');

module.exports = function (app, middlewares) {
  app.get('/questions/:title', (req, res, next) => {
    return QuestionController.getQuestionByTitle(req.params.title)
      .then((question)=>{
        res.json(question)
      })
      .catch((err)=>{
        next(err)
      });
  });
};
