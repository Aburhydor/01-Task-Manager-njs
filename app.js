const express = require('express');
const app = express();
const task = require('./routes/task');
const connectDB = require('./db/connect');
require('dotenv').config();
//middle ware
app.use(express.static('./public'));
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error.handler');
app.use(express.json());

//routes
app.use('/api/v1/tasks', task);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log('connected');
    app.listen(port, console.log(`server is listening on port ${port}.....`));
  } catch (error) {
    console.log(error);
  }
};
start();
