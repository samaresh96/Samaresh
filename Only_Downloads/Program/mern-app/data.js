const mongoose = require('mongoose');

// Define a schema
const exampleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

// Create a model based on the schema
const ExampleModel = mongoose.model('Example', exampleSchema, "kumaresh");

module.exports = ExampleModel;
