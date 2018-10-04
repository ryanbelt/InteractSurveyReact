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

QuestionSchema.statics.getQuestionByTitle = function(title) {
  var query = this.findOne({title: title});
  return query.exec();
};

export default mongoose.model('Question', QuestionSchema);
