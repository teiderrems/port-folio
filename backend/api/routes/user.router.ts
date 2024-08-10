import { Router } from "express";
import UserController from "../controllers/user.controller";

const userRouter=Router();

userRouter.get('/',new UserController().findAll);
userRouter.get('/:id',new UserController().findOne);
userRouter.post('/',new UserController().create);
userRouter.put('/:id',new UserController().update);
userRouter.delete('/:id',new UserController().delete);


export default userRouter;