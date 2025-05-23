
import { Schema ,model} from "mongoose";



const Contact=new Schema({
    names: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
}, {timestamps:true});

const ContactModel = model("Contact", Contact);
export default ContactModel;
