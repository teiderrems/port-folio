import { Skill, SkillModel } from "../mocks/models";

export default class SkillService{


    async findAll() {
        return await SkillModel.find({});
    }

    async findOne(id:string){
        return await SkillModel.findById(id);
    }

    async create(Skill:Partial<Skill>):Promise<Skill>{
        return await SkillModel.create(Skill);
    }

    async update(id:string,Skill:Skill){
        return await SkillModel.updateOne({_id:id},Skill);
    }

    async delete(id:string){
        return await SkillModel.deleteOne({_id:id});
    }
}