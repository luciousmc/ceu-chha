import App from './app';
import ClassController from './controllers/class copy';

const app = new App([new ClassController()], 5000);
app.listen();
