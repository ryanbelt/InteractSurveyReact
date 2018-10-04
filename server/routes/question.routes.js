/**
 * Created by ryanpan on 2018-10-04.
 */
'use strict';

let QuestionController = require('../controllers/question.controller');

module.exports = function (app, middlewares) {
  app.get('/questions/:id', (req, res, next) => {
    return QuestionController.getQuestionByid(req.params.id)
      .then((question)=>{
        res.json(question)
      })
      .catch((err)=>{
        next(err)
      });
  });
};
