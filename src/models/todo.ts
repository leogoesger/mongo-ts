import mongoose from "mongoose";
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    synopsis: String,
    date: { type: Date, default: Date.now },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
