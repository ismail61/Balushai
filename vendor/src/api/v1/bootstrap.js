import express from 'express';
import { startingMiddleware } from './middlewares';
import { connectToDatabase } from './mongodb/connectToDatabase';
import config from '../../config/index'

const bootstrap = async () => {
  const app = express();

  await startingMiddleware(app);
  await connectToDatabase();

  require('./routes')(app);

  app.listen(config.app.port, () => {
    console.log(`Server is running at ${config.app.port}`)
  })
};

export { bootstrap };

