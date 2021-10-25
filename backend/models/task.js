const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  text: String,
});

const TaskModel = mongoose.model("Goal", taskSchema);

module.exports = TaskModel;
