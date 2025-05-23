
import { Schema ,model} from "mongoose";

import { ModelStatus } from "./enum";


const projectSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
       
        default: ModelStatus.NOTSTARTED,
    },
    githubLink: {
        type: String,
        
    },
    websiteLink: {
        type: String,
    },
},{timestamps:true});

const ProjectModel = model("Project", projectSchema);
export default ProjectModel;