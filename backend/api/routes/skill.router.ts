import { Router } from "express";
import SkillController from "../controllers/skill.controller";

const skillRouter=Router();

skillRouter.get('/',new SkillController().findAll);
skillRouter.get('/:id',new SkillController().findOne);
skillRouter.post('/',new SkillController().create);
skillRouter.put('/:id',new SkillController().update);
skillRouter.delete('/:id',new SkillController().delete);


export default skillRouter;