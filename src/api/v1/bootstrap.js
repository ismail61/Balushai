import express from 'express';
import cloudinary from 'cloudinary'
import { startingMiddleware } from './middlewares/starting.middleware';
import { connectToDatabase } from './mongodb/connectToDatabase';
import { config } from '../../config'
import { routes } from './routes'

const bootstrap = async () => {
  const app = express();

  await startingMiddleware(app);
  await connectToDatabase();
  await cloudinary.config(config.cloudinary);

  routes(app);

  app.listen(config.app.port, () => {
    console.log(`Server is running at ${config.app.port}`)
  })
};

export { bootstrap };

