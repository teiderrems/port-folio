import { Router } from "express";
import ContactController from "../controllers/contact.controller";

const contactRouter=Router();

contactRouter.get('/',new ContactController().findAll);
contactRouter.get('/:id',new ContactController().findOne);
contactRouter.post('/',new ContactController().create);
contactRouter.put('/:id',new ContactController().update);
contactRouter.delete('/:id',new ContactController().delete);


export default contactRouter;