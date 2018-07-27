import { Schema, model } from "mongoose";

const todoSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    synopsis: String,
    date: { type: Date, default: Date.now },
});

const Todo = model("Todo", todoSchema);

export default Todo;
