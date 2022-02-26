import * as dotenv from 'dotenv';
import { bootstrap } from './api/v1/bootstrap';

(async () => {
  dotenv.config({ path: `${__dirname}/../.env` });
  await bootstrap();

})();
console.log('Balushai');

