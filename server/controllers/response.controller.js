/**
 * Created by ryanpan on 2018-10-04.
 */
import { Response } from '../models';
let _ = require('underscore');

function createNewResponse(uuid, body) {
  //todo create response with body UUID
  let newResponse = new Response({
    questionId: body.questionId,
    uuid: uuid,
    selected:[{
      question: body.question,
      answer: body.answer
    }],
    categoryPoint: body.answer.categoryPoint,
    result:[]
  })

  for(let category of body.answer.categories){
    newResponse.result.push(category)
  }

  return Response.save(newResponse);
}

function getResponseByUUID(uuid){
  return Response.getResponseByUUID(uuid);
}

function updateResponse(uuid, body){
  return getResponseByUUID(uuid)
    .then((result) => {
      if(!result){
        return createNewResponse(uuid, body);
      }else{
        return getResponseByUUID(uuid)
          .then(function(responseObj){
            let updateResponseObj = responseObj
            updateResponseObj.selected.push({
              question: body.question,
              answer: body.answer
            });

            updateResponseObj.categoryPoint += body.answer.categoryPoint;
            for(let category of body.answer.categories){
              let index = _.findIndex(updateResponseObj.result, {
                text: category.text
              })
              if(index == -1){
                updateResponseObj.result.push(category);
              }else{
                updateResponseObj.result[index].value += category.value;
              }
            }

            if(!body.answer.next ){
              updateResponseObj.finished = true;
            }

            return Response.save(updateResponseObj);
          });
      }
  })
}

function getAllResponse(filter, select){
  return Response.getAllResponse(filter, select);
}

module.exports = {
  createNewResponse: createNewResponse,
  getResponseByUUID: getResponseByUUID,
  updateResponse: updateResponse,
  getAllResponse: getAllResponse
}
