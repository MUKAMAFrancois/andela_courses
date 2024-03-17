//userCtrl.ts

import { Request, Response,NextFunction} from 'express';
import bcrypt from 'bcrypt';
import jwt, {JwtPayload} from 'jsonwebtoken';
import User from '../models/User';
import dotenv from 'dotenv';
dotenv.config();
import Blog from '../models/Blog';
export interface CustomRequest extends Request {
    id: string;
    email: string; 
}

// interface MulterRequest extends Request {
//     file?: Express.Multer.File;
// }




export const registerUser = async (req: Request, res: Response) => {
    try{
        const {username,email,password,image} = req.body;
        // const image=req.file?req.file.path:null;
        const user=await User.findOne({email});

        if(user){
            return res.status(400).json({message:'User already exists'});
        }
        // if(!image){
        //     return res.status(400).json({message:'Image is required'});
        // }

        const hashedPassword=await bcrypt.hash(password,10);

        const newUser=new User({
            username,
            email,
            password:hashedPassword,
            image        
        });
        await newUser.save();

        res.status(201).json({message:'User registered successfully', newUser});
        } catch(error:any){
            res.status(500).json({message:error.message});
        }
    }


export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ email: user.email, id: user._id },process.env.jwt_secret as string, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.status(200).json({ message: 'User logged in successfully', user, token });

    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}   



export const isLoggedIn = async (req: Request, res: Response, next: NextFunction) =>{
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const decodedData = jwt.verify(token, process.env.jwt_secret as string) as JwtPayload & { id: string };
        (req as any).id = decodedData.id;
        (req as any).email = decodedData.email;
        next();

    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}


// export const getAllUsers = async (req: Request, res: Response) => {
//     try {
//         const users = await User.find();
//         res.status(200).json(users);

//     } catch (error: any) {
//         res.status(500).json({ message: error.message });
//     }
// }

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find().populate('blogs');
        res.status(200).json(users);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}


export const getUserBlogs = async (req: Request, res: Response) => {
    try {
        const userId = (req as CustomRequest).id;
        const blogs = await Blog.find({ author: userId });
        res.status(200).json(blogs);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}


export const logoutUser = async (req: Request, res: Response) => {
    try {
        res.clearCookie('token');
        res.status(200).json({ message: 'User logged out successfully' });

    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}