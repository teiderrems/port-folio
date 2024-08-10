import { User } from "../mocks/models";
import UserService from "../services/user.service";
import { Request,Response } from "express";

export default class UserController{
    public async findAll(req:Request,res:Response) {
        try {
            const data=await (new UserService()).findAll();
            return res.status(200).json(data);
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    public async findOne(req:Request,res:Response){
        try {
            const user=await (new UserService()).findOne(req.params.id);
            return res.status(200).json(user)
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    public async create(req:Request,res:Response){
        try {
            const data=await (new UserService()).create(req.body as Partial<User>);
            return res.status(201).json(data);
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    public async update(req:Request,res:Response){
        try {
            const response=await (new UserService()).update(req.params.id,req.body);
            return res.status(201).json(response);
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    public async delete(req:Request,res:Response){
        try {
            const response=await (new UserService()).delete(req.params.id);
            return res.status(204).json(response);
        } catch (error) {
            return res.status(404).json(error);
        }
    }
}