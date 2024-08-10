import { Router } from "express";
import ProjectController from "../controllers/project.controller";

const projectRouter=Router();

projectRouter.get('/',new ProjectController().findAll);
projectRouter.get('/:id',new ProjectController().findOne);
projectRouter.post('/',new ProjectController().create);
projectRouter.put('/:id',new ProjectController().update);
projectRouter.delete('/:id',new ProjectController().delete);


export default projectRouter;