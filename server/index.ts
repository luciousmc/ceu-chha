import App from './app';
import ClassController from './controllers/class';

const app = new App([new ClassController()], 5001);
app.listen();
