const mongoose = require('mongoose');
const data = require('./data');

mongoose.connect(
    'mongodb+srv://samareshshil165:xduYRt3RvnXdzn72@cluster0.wspk37o.mongodb.net/?retryWrites=true&w=majority'
 
)

const exampleDocument = [{
  
    name: 'piu Shil',
    age: 25,
    email: 'john@example.com',
  },
  {
  
    name: 'shefali Shil',
    age: 45,
    email: 'shefali@example.com',
  },
  
  {
  
    name: 'shefali Shil',
    age: 45,
    email: 'shefali@example.com',
  },
  
  {
  
    name: 'shefali Shil',
    age: 45,
    email: 'shefali@example.com',
  },
  
  {
  
    name: 'shefali Shil',
    age: 45,
    email: 'shefali@example.com',
  },
  
  {
  
    name: 'shefali Shil',
    age: 45,
    email: 'shefali@example.com',
  },
  
  {
  
    name: 'shefali Shil',
    age: 45,
    email: 'shefali@example.com',
  }
  
  
  
];

  data.insertMany(exampleDocument)
  .then((savedDocument) => {
    console.log('Document saved successfully:', savedDocument);
  })
  .catch((error) => {
    console.error('Error saving document:', error);
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('MongoDB connection closed through app termination');
      process.exit(0);
    });
  });

  



