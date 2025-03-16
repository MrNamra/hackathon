const User = require('../models/User');
const jwt = require('../config/jwt');

const login = async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ status: false, message: "User not Found with is credentials"});
        }
        const token = jwt.generateToken({ id: user._id, email: user.email });
        return res.status(200).json({ status: true, message: "User Login Successfully!", token });
    } catch(err){
        console.log("UserController, login Error: ",err)
        return res.status(500).json({ status: false, message: "Internal Server Error!", err });
    }
}

const register = async (req, res) => {
    const { name, email, password, conmirmpassword } = req.body;
    const user = await User.findOne({ email });

    if(password !== conmirmpassword) {
        return res.status(400).json({ status: false, message: "Password & confirm password not match!" });
    }
    if (user) {
        return res.status(400).json({ status: false, message: "Email already Register!" });
    }
    try{
        const newUser = new User({ name, email, password });
        await newUser.save();
        return res.status(200).json({ status: true, message: "User Register Successfully!" });
    } catch(err){
        console.log("UserController, register Error: ",err)
        return res.status(500).json({ status: false, message: "Internal Server Error!", err });
    }
}

const dashboard = async (req, res) => {
    try{
        return res.status(200).json({ status: true, message: "Dashboard", data: [{metadata: "this is testdata example not actual data", data1: "data1", data2: "data2"}] });
    } catch(err){
        console.log("UserController, dashboard Error: ",err)
        return res.status(500).json({ status: false, message: "Internal Server Error!", err });
    }
}

const profile = async (req, res) => {
    try {
        const id = req.user.id;
        const UserData = await User.findOne({ _id: id }, { password: 0, date: 0, __v: 0 });
        return res.status(200).json({ status: true, message: "Opration success!", data: UserData });
    } catch(err){
        console.log("UserController, profile Error: ",err)
        return res.status(500).json({ status: false, message: "Internal Server Error!", err });
    }
}

const updateProfile = async (req, res) => {
    try {
        const id = req.user.id;
        const UserData = User.findOne({ _id: id });
        if(!UserData) {
            return res.status(404).json({ status: false, message: "User not found!" });
        }
        
        const { name, email, password, conmirmpassword } = req.body;

        if(!(name) ||  !(email) || !(password) || !(conmirmpassword)) {
            return res.status(400).json({ status: false, message: "All fields are required!" });
        }
        
        if(password !== conmirmpassword) {
            return res.status(400).json({ status: false, message: "password & confirm password not match!" });
        }

        await User.updateOne({ _id: id }, { name, email, password });

        return res.status(200).json({ status: true, message: "Opration success!" });
    } catch(err){
        console.log("UserController, updateProfile Error: ",err)
        return res.status(500).json({ status: false, message: "Internal Server Error!", err });
    }
}

module.exports = { login, register, dashboard, profile, updateProfile }