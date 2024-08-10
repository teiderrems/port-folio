import { Router } from "express";
import NotificationController from "../controllers/notification.controller";

const notificationRouter=Router();

notificationRouter.get('/',new NotificationController().findAll);
notificationRouter.get('/:id',new NotificationController().findOne);
notificationRouter.post('/',new NotificationController().create);
notificationRouter.put('/:id',new NotificationController().update);
notificationRouter.delete('/:id',new NotificationController().delete);


export default notificationRouter;