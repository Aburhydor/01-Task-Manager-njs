const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'pls provide name'],
    trim: true,
    maxlength: [10, 'must not greater than 10 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Task', TaskSchema);
