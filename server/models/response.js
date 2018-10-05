/**
 * Created by ryanpan on 2018-10-04.
 */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

import Answer from './answer';

let ResponseSchema = new Schema({
  questionId: {
    type: Schema.Types.ObjectId,
    ref: 'Question',
  },
  uuid: {
    type: String,
    required: true
  },
  selected: [
    {
      question: {
        type: String,
        required: true
      },
      answer: {
        type: Answer.schema,
        required: true
      }
    }
  ],
  categoryPoint:{
    type: Number,
    default: 0
  },
  result: [
    {
      text: {
        type: String,
        required: true
      },
      value: {
        type: Number,
        required: true
      }
    }
  ]
}, {timestamps: { createdAt: 'created', updatedAt: 'updated' }});

ResponseSchema.statics.save = function(response) {
  return response.save();
};

ResponseSchema.statics.getResponseByUUID = function(uuid) {
  var query = this.findOne({uuid: uuid});
  return query.exec();
};

ResponseSchema.statics.getAllResponse = function(filter, select) {
  var query = this.find(filter);
  if(!!select){
    query = query.select(select);
  }
  return query.exec();
};

export default mongoose.model('Response', ResponseSchema);
