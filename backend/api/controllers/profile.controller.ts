import ProfileService from "../services/profile.service";
import { Request,Response } from "express";

export default class ProfileController{
    public async findAll(req:Request,res:Response) {
        try {
            const data=await (new ProfileService()).findAll();
            return res.status(200).json(data);
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    public async findOne(req:Request,res:Response){
        try {
            const Profile=await (new ProfileService()).findOne(req.params.id);
            return res.status(200).json(Profile)
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    public async create(req:any,res:Response){
        try {
            const{file,user}=req;
            let data=null;
            if (file) {
                data=await (new ProfileService()).create({Type:file.mimetype,Content:file.buffer});
            }
            return res.status(201).json(data);
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    public async update(req:any,res:Response){
        try {
            const{file,user}=req;
            let data=null;
            if (file) {
                data=await (new ProfileService()).update(req.params.id,{Type:file.mimetype,Content:file.buffer});
            }
            return res.status(201).json(data);
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    public async delete(req:Request,res:Response){
        try {
            const response=await (new ProfileService()).delete(req.params.id);
            return res.status(204).json(response);
        } catch (error) {
            return res.status(404).json(error);
        }
    }
}