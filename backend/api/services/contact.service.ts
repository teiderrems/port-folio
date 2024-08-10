import { Contact, ContactModel } from "../mocks/models";
import NotificationService from "./notification.service";

export default class ContactService{


    public async findAll() {
        return await ContactModel.find({});
    }

    public async findOne(id:string){
        return await ContactModel.findById(id);
    }

    public async create(contact:Partial<Contact>):Promise<Contact>{
        const res=await new NotificationService().create({Email:contact.Email,Entreprise:contact.Entreprise});
        return await ContactModel.create(contact);
    }

    public async update(id:string,contact:Contact){
        return await ContactModel.updateOne({_id:id},contact);
    }

    public async delete(id:string){
        return await ContactModel.deleteOne({_id:id});
    }
}