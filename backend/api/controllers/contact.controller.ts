import { Contact } from "../mocks/models";
import ContactService from "../services/contact.service";
import { Request,Response } from "express";

export default class ContactController{
    public async findAll(req:Request,res:Response) {
        try {
            const data=await (new ContactService()).findAll();
            return res.status(200).json(data);
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    public async findOne(req:Request,res:Response){
        try {
            const contact=await (new ContactService()).findOne(req.params.id);
            return res.status(200).json(contact)
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    public async create(req:Request,res:Response){
        try {
            const data=await (new ContactService()).create(req.body as Partial<Contact>);
            return res.status(201).json(data);
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    public async update(req:Request,res:Response){
        try {
            const response=await (new ContactService()).update(req.params.id,req.body);
            return res.status(201).json(response);
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    public async delete(req:Request,res:Response){
        try {
            const response=await (new ContactService()).delete(req.params.id);
            return res.status(204).json(response);
        } catch (error) {
            return res.status(404).json(error);
        }
    }
}