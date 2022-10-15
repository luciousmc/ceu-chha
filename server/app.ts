import express, { Application } from 'express';
import ClassController from './controllers/class';
import errorHandler from './middleware/errorMiddleware';

class App {
  app: Application;
  port: number;

  constructor(controllers: ClassController[], port: number) {
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
  loadControllers(controllers: ClassController[]) {
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
