import { Router } from "express";
import ProfileController from "../controllers/profile.controller";
import multer from "multer";

const profileRouter=Router();

profileRouter.get('/',new ProfileController().findAll);
profileRouter.get('/:id',new ProfileController().findOne);
profileRouter.post('/',multer().single("profile"),new ProfileController().create);
profileRouter.put('/:id',multer().single("profile"),new ProfileController().update);
profileRouter.delete('/:id',new ProfileController().delete);


export default profileRouter;