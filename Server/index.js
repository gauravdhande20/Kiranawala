import e from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import User from "./Model/users.js"
import cors from "cors"
import bcrypt from 'bcrypt'
dotenv.config()


const app =e();
app.use(e.json());
app.use(cors());

const PORT =3000;
 const Database_conection= async()=>
 {
    const connect = await mongoose.connect(process.env.MongoDB);
  try {
    if (connect) {
      console.log("Database connected successfully");
    }   
    } catch (error) {
      console.log("Database connection failed", error)
    };
 }
Database_conection();

 app.post('/signup',async (req,res)=>{
     
  try {
    const {name,email,password}=req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    
    const newUser=new User({
        name,
        email,
        password
    });
   await newUser.save()
   res.status(201).json({ message: "User registered successfully" });
   }
  
   catch(err){
   res.status(500).json({ message: "Server error" });
   }


 });


 app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.status(200).json({
      message: "Login successful",
      userId: user._id
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT,()=>{
    console.log(`your server is running on port ${PORT}`)
});