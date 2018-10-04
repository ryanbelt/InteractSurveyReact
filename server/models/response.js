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
  result: [
    {
      key: {
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



export default mongoose.model('Response', ResponseSchema);
