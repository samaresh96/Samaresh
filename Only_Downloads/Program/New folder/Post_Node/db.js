// // db.js

// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'your_username',
//   host: 'your_host',
//   database: 'your_database',
//   password: 'your_password',
//   port: 5432, // Default PostgreSQL port
// });

// module.exports = pool;

// db.js

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

module.exports = pool;

