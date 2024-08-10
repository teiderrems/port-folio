import { Skill } from "../mocks/models";
import SkillService from "../services/skill.service";
import { Request,Response } from "express";

export default class SkillController{
    public async findAll(req:Request,res:Response) {
        try {
            const data=await (new SkillService()).findAll();
            return res.status(200).json(data);
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    public async findOne(req:Request,res:Response){
        try {
            const Skill=await (new SkillService()).findOne(req.params.id);
            return res.status(200).json(Skill)
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    public async create(req:Request,res:Response){
        try {
            const data=await (new SkillService()).create(req.body as Partial<Skill>);
            return res.status(201).json(data);
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    public async update(req:Request,res:Response){
        try {
            const response=await (new SkillService()).update(req.params.id,req.body);
            return res.status(201).json(response);
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    public async delete(req:Request,res:Response){
        try {
            const response=await (new SkillService()).delete(req.params.id);
            return res.status(204).json(response);
        } catch (error) {
            return res.status(404).json(error);
        }
    }
}