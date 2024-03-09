import mongoose from "mongoose";

const { Schema } = mongoose;

const todoListSchema = new Schema({
  name: {
    type: Schema.Types.String,
    require: true,
  },
  status: {
    type: Schema.Types.String,
    require: true,
  },
  id: {
    type: Schema.Types.Number,
    require: true,
  },
});

const todoList = mongoose.model("todoList", todoListSchema);

export default todoList;
