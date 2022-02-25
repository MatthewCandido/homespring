import App from './app';
import 'dotenv/config';
import validateEnv from './utils/validateEnv';

validateEnv();

const app = new App(
  5001
);
 
app.listen();