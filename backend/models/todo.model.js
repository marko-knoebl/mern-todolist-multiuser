import { model, Schema } from "mongoose";
import { ObjectId } from "mongodb";

const TodoSchema = new Schema({
  title: String,
  completed: Boolean,
  created: {
    type: Date,
    default: Date.now,
  },
  userId: ObjectId,
});

export default model("Todo", TodoSchema);
