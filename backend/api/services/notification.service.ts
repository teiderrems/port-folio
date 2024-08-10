import { Notification, NotificationModel } from "../mocks/models";

export default class NotificationService{


    async findAll() {
        return await NotificationModel.find({});
    }

    async findOne(id:string){
        return await NotificationModel.findById(id);
    }

    async create(Notification:Partial<Notification>):Promise<Notification>{
        return await NotificationModel.create(Notification);
    }

    async update(id:string,Notification:Notification){
        return await NotificationModel.updateOne({_id:id},Notification);
    }

    async delete(id:string){
        return await NotificationModel.deleteOne({_id:id});
    }
}