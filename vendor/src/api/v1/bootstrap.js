import express from 'express';
import { startingMiddleware } from './middlewares';
import { connectToDatabase } from './mongodb/connectToDatabase';
import { config } from '../../config'
import { routes } from './routes'

const bootstrap = async () => {
  const app = express();

  await startingMiddleware(app);
  await connectToDatabase();

  routes(app);

  app.listen(config.app.port, () => {
    console.log(`Server is running at ${config.app.port}`)
  })
};

export { bootstrap };

