import { Router } from "express";
import SocialNetworkController from "../controllers/social-network.controller";

const socialNetworkRouter=Router();

socialNetworkRouter.get('/',new SocialNetworkController().findAll);
socialNetworkRouter.get('/:id',new SocialNetworkController().findOne);
socialNetworkRouter.post('/',new SocialNetworkController().create);
socialNetworkRouter.put('/:id',new SocialNetworkController().update);
socialNetworkRouter.delete('/:id',new SocialNetworkController().delete);


export default socialNetworkRouter;