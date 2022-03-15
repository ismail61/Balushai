import express from 'express';
import { startingMiddleware } from './middlewares/starting.middleware';
import { connectToDatabase } from './mongodb/connectToDatabase';
import { config } from '../../config'
import { routes } from './routes'
import { Cloudinary } from '../../config/cloudinary/cloudinary'


const bootstrap = async () => {
  const app = express();

  startingMiddleware(app);
  await connectToDatabase();
  await Cloudinary();

  routes(app);

  // unexpected  router hit shows error
  app.all('*', (req, res, next) => {
    next(
      res.status(404).json({err : `Can't find ${req.originalUrl} on this server!`})
    );
  })

  app.listen(config.app.port, () => {
    console.log(`Server is running at ${config.app.port}`)
  })

};

export { bootstrap };

