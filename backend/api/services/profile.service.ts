import { Profile, ProfileModel } from "../mocks/models";

export default class ProfileService{


    async findAll() {
        return await ProfileModel.find({});
    }

    async findOne(id:string){
        return await ProfileModel.findById(id);
    }

    async create(Profile:Profile):Promise<Profile>{
        return await ProfileModel.create(Profile);
    }

    async update(id:string,Profile:Profile){
        return await ProfileModel.updateOne({_id:id},Profile);
    }

    async delete(id:string){
        return await ProfileModel.deleteOne({_id:id});
    }
}