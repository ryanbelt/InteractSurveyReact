/**
 * Created by ryanpan on 2018-10-04.
 */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

import Answer from './answer';

let OptionSchema = new Schema({
  number: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  answers: [
    {
      type: Answer.schema,
      required: true
    }
  ]
});

export default mongoose.model('Option', OptionSchema);
