/**
 * Created by ryanpan on 2018-10-04.
 */
'use strict';

let ResponseController = require('../controllers/response.controller');
let RPCController = require('../controllers/rpc.controller');

module.exports = function (app, middlewares) {
  app.put('/responses/:uuid', (req, res, next) => {
    return ResponseController.updateResponse(req.params.uuid, req.body)
      .then((response)=>{
        res.json(response);
      })
      .catch((err)=>{
        next(err)
      });
  });

  app.get('/responses/:uuid', (req, res, next) => {
    return ResponseController.getResponseByUUID(req.params.uuid)
      .then((response)=>{
        res.json(response);
      })
      .catch((err)=>{
        next(err)
      });
  });

  app.get('/responses/score/survey/:questionId', (req, res, next) => {
    return RPCController.getScoreOfSurveyById(req.params.questionId)
      .then((result)=>{
        res.json(result);
      })
      .catch((err)=>{
        next(err)
      });
  });
};
