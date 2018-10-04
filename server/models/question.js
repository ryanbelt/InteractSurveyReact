/**
 * Created by ryanpan on 2018-10-04.
 */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

import Option from './option';

let QuestionSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  questions: [
    {
      type: Option.schema,
      required: true
    }
  ]
}, {timestamps: { createdAt: 'created', updatedAt: 'updated' }});

QuestionSchema.statics.getQuestionById = function(id) {
  var query = this.findOne({_id: id});
  return query.exec();
};

export default mongoose.model('Question', QuestionSchema);
