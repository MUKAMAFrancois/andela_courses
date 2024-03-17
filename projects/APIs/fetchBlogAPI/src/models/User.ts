//src/models/User.ts

import mongoose, { Schema, Document,Types } from 'mongoose';


export interface IUser extends Document {
    username:string,
    email:string,
    password:string,
    image:string,
    blogs:Types.ObjectId[]
}

const userSchema: Schema = new Schema({
    username: { type: String, required: true, minlength: 3, maxlength: 50, unique: true},
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:function(value:string){
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
            },
            message:(props:{value:string})=>`${props.value} is not a valid email`
        }
    },

    password: { type: String, required: true,
        validate: {
            validator: function(v: string){
                return /^(?=.*[A-Z])(?=.*[!@#$%^&*()-_=+{};:,<.>?])(?=.*\d).{8,}$/.test(v);
            },
            message:(props:{value: string}) => `Password should contain minimum eight characters, at least one letter and one number`
        } 
     },
     image: { type: String, required: true },
     blogs: [{ type: Schema.Types.ObjectId, ref: 'Blog' }]
    });


export default mongoose.model<IUser>('User', userSchema);