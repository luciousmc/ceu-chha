import App from './app';
import ClassController from './controllers/class';
import StudentController from './controllers/student';

const app = new App([new ClassController(), new StudentController()], 5001);
app.listen();
