const express = require('express');
require('dotenv/config');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');

// Configuration and Connection to Database
const InitiateMongoServer = require("../config/db");
InitiateMongoServer();

const app = express();
const router = express.Router();
app.use(bodyParser.json());

let records = [];

const expense = require('../routes/expense');
const news = require('../routes/news');

router.get("/expense", expense);
router.get("/news", news);
//Get all students
// router.get('/', (req, res) => {
//   res.send('Hello....!!!! App is running..');
// });

//Create new record
router.post('/add', (req, res) => {
  res.send('New record added.');
});

//delete existing record
router.delete('/del', (req, res) => {
  res.send('Deleted existing record');
});

//updating existing record
router.put('/update', (req, res) => {
  res.send('Updating existing record');
});

//showing demo records
router.get('/demo', (req, res) => {
  res.json([
    {
      id: '001',
      name: 'Smith',
      email: 'smith@gmail.com',
    },
    {
      id: '002',
      name: 'Sam',
      email: 'sam@gmail.com',
    },
    {
      id: '003',
      name: 'lily',
      email: 'lily@gmail.com',
    },
  ]);
});

app.use('/api/', router);
// module.exports.handler = serverless(app);
const handler = serverless(app);
module.exports.handler = async (event, context) => {
  const result = await handler(event, context);
  return result;
};
