import { Formation, FormationModel } from "../mocks/models";

export default class FormationService{


    async findAll() {
        return await FormationModel.find({});
    }

    async findOne(id:string){
        return await FormationModel.findById(id);
    }

    async create(Formation:Partial<Formation>):Promise<Formation>{
        return await FormationModel.create(Formation);
    }

    async update(id:string,Formation:Formation){
        return await FormationModel.updateOne({_id:id},Formation);
    }

    async delete(id:string){
        return await FormationModel.deleteOne({_id:id});
    }
}