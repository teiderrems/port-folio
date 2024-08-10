import { SocialNetwork, SocialNetworkModel } from "../mocks/models";

export default class SocialNetworkService{


    async findAll() {
        return await SocialNetworkModel.find({});
    }

    async findOne(id:string){
        return await SocialNetworkModel.findById(id);
    }

    async create(SocialNetwork:Partial<SocialNetwork>):Promise<SocialNetwork>{
        return await SocialNetworkModel.create(SocialNetwork);
    }

    async update(id:string,SocialNetwork:SocialNetwork){
        return await SocialNetworkModel.updateOne({_id:id},SocialNetwork);
    }

    async delete(id:string){
        return await SocialNetworkModel.deleteOne({_id:id});
    }
}