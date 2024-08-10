import { User, UserModel } from "../mocks/models";

export default class UserService{


    async findAll() {
        return await UserModel.find({});
    }

    async findOne(id:string){
        return await UserModel.findById(id);
    }

    async create(User:Partial<User>):Promise<User>{
        return await UserModel.create(User);
    }

    async update(id:string,User:User){
        return await UserModel.updateOne({_id:id},User);
    }

    async delete(id:string){
        return await UserModel.deleteOne({_id:id});
    }
}