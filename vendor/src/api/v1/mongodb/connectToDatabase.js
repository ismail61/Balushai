import { connect } from 'mongoose';
import { db } from '../../../config/index'

export const connectToDatabase = async () => {
  // Mongoose Connection Information
  const { connection } = await connect(db.url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    // reconnectTries: Number.MAX_VALUE,
    // reconnectInterval: 1000
  });

  connection.on('connected', () => {
    console.info('Success! Connected to Database.');
  });

  connection.on('disconnected', () => {
    console.error('!!!!!!!!!! Database Disconnected !!!!!!!!!!');
  });

  connection.on('reconnected', () => {
    console.warn('!!!!!!!!!! Database Reconnected  !!!!!!!!!!');
  });

  connection.on('error', (error) => {
    console.error('Failed! Database connection failed. \n', error);
  });
};

