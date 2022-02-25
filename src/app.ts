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