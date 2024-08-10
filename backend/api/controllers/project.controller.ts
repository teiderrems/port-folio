import { Project } from "../mocks/models";
import ProjectService from "../services/project.service";
import { Request,Response } from "express";

export default class ProjectController{
    public async findAll(req:Request,res:Response) {
        try {
            const data=await (new ProjectService()).findAll();
            return res.status(200).json(data);
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    public async findOne(req:Request,res:Response){
        try {
            const Project=await (new ProjectService()).findOne(req.params.id);
            return res.status(200).json(Project)
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    public async create(req:Request,res:Response){
        try {
            const data=await (new ProjectService()).create(req.body as Partial<Project>);
            return res.status(201).json(data);
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    public async update(req:Request,res:Response){
        try {
            const response=await (new ProjectService()).update(req.params.id,req.body);
            return res.status(201).json(response);
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    public async delete(req:Request,res:Response){
        try {
            const response=await (new ProjectService()).delete(req.params.id);
            return res.status(204).json(response);
        } catch (error) {
            return res.status(404).json(error);
        }
    }
}