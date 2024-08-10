import { Project, ProjectModel } from "../mocks/models";

export default class ProjectService{


    async findAll() {
        return await ProjectModel.find({});
    }

    async findOne(id:string){
        return await ProjectModel.findById(id);
    }

    async create(Project:Partial<Project>):Promise<Project>{
        return await ProjectModel.create(Project);
    }

    async update(id:string,Project:Project){
        return await ProjectModel.updateOne({_id:id},Project);
    }

    async delete(id:string){
        return await ProjectModel.deleteOne({_id:id});
    }
}