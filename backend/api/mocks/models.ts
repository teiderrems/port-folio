import { Schema, model,models } from "mongoose";


const ProfileSchema:Schema=new Schema({
    Type:{
        type:String
    },
    Content:{
        type:Buffer
    },
    Owner:{
        type:String
    }
},{
    versionKey:false,
    timestamps:{
        createdAt:'CreatedAt',
        updatedAt:'UpdatedAt'
    }
});


const UserSchema:Schema=new Schema({
    Username:{
        type:String
    },
    Firstname:{
        type:String
    },
    Email:{
        type:String
    },
    Lastname:{
        type:String
    },
    PhoneNumber:{
        type:String
    },
    Password:{
        type:String
    },
    Profile:{
        type:[ProfileSchema]
    }
},
{
    versionKey:false,
    timestamps:{
        createdAt:'CreatedAt',
        updatedAt:'UpdatedAt'
    }
});

const ContactSchema:Schema=new Schema({
    Email:{
        type:String
    },
    Entreprise:String,
    PhoneNumber:String,
    Content:String
},
{
    versionKey:false,
    timestamps:{
        createdAt:'CreatedAt',
        updatedAt:'UpdatedAt'
    }
});

const NotificationsSchema:Schema= new Schema({
    Email:{
        type:String
    },
    Entreprise:String
},
{
    versionKey:false,
    timestamps:{
        createdAt:'CreatedAt',
        updatedAt:'UpdatedAt'
    }
});

const FormationsSchema:Schema=new Schema({
    School:String,
    Title:String,
    YearOFObtaining:String,
},
{
    versionKey:false,
    timestamps:{
        createdAt:'CreatedAt',
        updatedAt:'UpdatedAt'
    }
});

const SkillSchema=new Schema({
    Label:String,
    Level:{
        type:String,
        default:"Beginners"
    },
    Projects:[String],
},
{
    versionKey:false,
    timestamps:{
        createdAt:'CreatedAt',
        updatedAt:'UpdatedAt'
    }
});


const ProjectSchema=new Schema({
    Title:String,
    Skills:[String],
    Description:String,
    Url:[String]
},
{
    versionKey:false,
    timestamps:{
        createdAt:'CreatedAt',
        updatedAt:'UpdatedAt'
    }
});

const SocialNetworkSchema=new Schema({
    Name:String,
    Url:String
},
{
    versionKey:false,
    timestamps:{
        createdAt:'CreatedAt',
        updatedAt:'UpdatedAt'
    }
})



const ProfileModel=models.ProfileModel??model('profiles',ProfileSchema);
const UserModel=models.UserModel??model('users',UserSchema);
const SkillModel=models.SkillModel??model('skills',SkillSchema);
const FormationModel=models.FormationModel??model('formations',FormationsSchema);
const ProjectModel=models.ProjectModel??model('projects',ProjectSchema);
const SocialNetworkModel=models.SocialNetworkModel??model('social-networks',SocialNetworkSchema);
const ContactModel=models.ContactModel??model('contacts',ContactSchema);
const NotificationModel=models.NotificationModel??model('notifications',NotificationsSchema);
export {ProfileModel,UserModel,SkillModel,FormationModel,ProjectModel,SocialNetworkModel,ContactModel,NotificationModel};