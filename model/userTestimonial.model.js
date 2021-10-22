import mongoose  from "mongoose";

// URL regex expression :  /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/

const userTestimonialSchema = new mongoose.Schema({
    id:{
        type: Number,
        unique: true,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    designation:{
        type: String,
        required: true,
    },
    avatar:{
        type: String,
    },
    rating:{
        type: Number,
        required: true,
    },
    message:{
        type: String,
        required: true,
    },
    audio: {
        type: String,
    },
    lorem:{
        type: String,
    }
});

const UserTestimonial = mongoose.model('UserTestimonial',userTestimonialSchema);
export default UserTestimonial;