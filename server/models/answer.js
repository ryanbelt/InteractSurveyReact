/**
 * Created by ryanpan on 2018-10-04.
 */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let AnswerSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  next: {
    type: String,
    default: null
  },
  categoryPoint: {
    type: Number,
    required: true
  },
  categories: [
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
});

export default mongoose.model('Answer', AnswerSchema);
