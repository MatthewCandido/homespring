import express from 'express';
import * as bodyParser from 'body-parser';
import errorMiddleware from './middleware/error.middleware';
 
class App {
  public app: express.Application;
  public port: number;
 
  constructor(port:number, controllers?:[any]) {
    this.app = express();
    this.port = port;
    
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
  }
 
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());

    this.app.use(function (req, res, next) {
      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', '*');

      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

      // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader('Access-Control-Allow-Credentials', 'true');

      // Pass to next layer of middleware
      next();
    });
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
 
  private initializeControllers(controllers?:[any]) {
    if (controllers) {
        controllers.forEach((controller:any) => {
            this.app.use('/api', controller.router);
        });
    }
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
 
export default App;