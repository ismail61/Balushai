import mongoose from 'mongoose';
import { config } from '../../../config/index'

export const connectToDatabase = async () => {

  // Mongoose Connection Information
  mongoose.connect(config.db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // reconnectTries: Number.MAX_VALUE,
    // reconnectInterval: 1000
  })

  mongoose.connection.on('connected', () => {
    console.info('Success! Connected to Database.');
  });

  mongoose.connection.on('disconnected', () => {
    console.error('!!!!!!!!!! Database Disconnected !!!!!!!!!!');
  });

  mongoose.connection.on('reconnected', () => {
    console.warn('!!!!!!!!!! Database Reconnected  !!!!!!!!!!');
  });

  mongoose.connection.on('error', (error) => {
    console.error('Failed! Database connection failed. \n', error);
  });
};

