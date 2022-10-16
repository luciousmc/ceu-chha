import express, { Application } from 'express';
import errorHandler from './middleware/errorMiddleware';
import IController from './interfaces/controller';

class App {
  app: Application;
  port: number;

  constructor(controllers: IController[], port: number) {
    this.app = express();
    this.port = port;

    this.loadMiddleware();
    this.loadControllers(controllers);
    this.loadErrorHandler();
  }
  loadMiddleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }
  loadControllers(controllers: IController[]) {
    controllers.forEach((controller) => {
      this.app.use('/api', controller.router);
    });
  }
  loadErrorHandler() {
    this.app.use(errorHandler);
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`App is listening on port ${this.port}`);
    });
  }
}

export default App;
