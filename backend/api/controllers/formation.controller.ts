import { Formation } from "../mocks/models";
import FormationService from "../services/formation.service";
import { Request,Response } from "express";

export default class FormationController{
    public async findAll(req:Request,res:Response) {
        try {
            const data=await (new FormationService()).findAll();
            return res.status(200).json(data);
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    public async findOne(req:Request,res:Response){
        try {
            const Formation=await (new FormationService()).findOne(req.params.id);
            return res.status(200).json(Formation)
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    public async create(req:Request,res:Response){
        try {
            const data=await (new FormationService()).create(req.body as Partial<Formation>);
            return res.status(201).json(data);
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    public async update(req:Request,res:Response){
        try {
            const response=await (new FormationService()).update(req.params.id,req.body);
            return res.status(201).json(response);
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    public async delete(req:Request,res:Response){
        try {
            const response=await (new FormationService()).delete(req.params.id);
            return res.status(204).json(response);
        } catch (error) {
            return res.status(404).json(error);
        }
    }
}