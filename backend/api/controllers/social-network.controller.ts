import { SocialNetwork } from "../mocks/models";
import SocialNetworkService from "../services/social-network.service";
import { Request,Response } from "express";

export default class SocialNetworkController{
    public async findAll(req:Request,res:Response) {
        try {
            const data=await (new SocialNetworkService()).findAll();
            return res.status(200).json(data);
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    public async findOne(req:Request,res:Response){
        try {
            const SocialNetwork=await (new SocialNetworkService()).findOne(req.params.id);
            return res.status(200).json(SocialNetwork)
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    public async create(req:Request,res:Response){
        try {
            const data=await (new SocialNetworkService()).create(req.body as Partial<SocialNetwork>);
            return res.status(201).json(data);
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    public async update(req:Request,res:Response){
        try {
            const response=await (new SocialNetworkService()).update(req.params.id,req.body);
            return res.status(201).json(response);
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    public async delete(req:Request,res:Response){
        try {
            const response=await (new SocialNetworkService()).delete(req.params.id);
            return res.status(204).json(response);
        } catch (error) {
            return res.status(404).json(error);
        }
    }
}