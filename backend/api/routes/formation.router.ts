import { Router } from "express";
import FormationController from "../controllers/formation.controller";

const formationRouter=Router();

formationRouter.get('/',new FormationController().findAll);
formationRouter.get('/:id',new FormationController().findOne);
formationRouter.post('/',new FormationController().create);
formationRouter.put('/:id',new FormationController().update);
formationRouter.delete('/:id',new FormationController().delete);


export default formationRouter;