import { Router } from 'express';

interface IController {
  PATH: string;
  router: Router;
}

export default IController;
