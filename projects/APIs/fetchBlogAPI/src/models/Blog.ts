//src/models/Blog.ts
import mongoose, { Schema, Document, Types } from 'mongoose';

// Define the allowed categories
const allowedCategories = ['TECHNOLOGY', 'LIFESTYLE', 
'BUSINESS', 'FINANCE', 'EDUCATION', 'TRAVEL', 'FOOD', 
'FASHION', 'SPORTS', 'ENTERTAINMENT'];

export interface IBlog extends Document {
    title: string;
    description: string;
    author: Types.ObjectId;
    createdAt: Date;
    image: string;
    category: string;
}

const BlogSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    image: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    category: {
        type: String,
        enum: allowedCategories,
        default: 'TECHNOLOGY',
        validate: {
            validator: function (value: string) {
                return allowedCategories.includes(value);
            },
            message: (props: { value: string }) => `${props.value} is not a valid category.`
        }
    }
});

export default mongoose.model<IBlog>('Blog', BlogSchema);
