const userModel = require('../models/userModel')
const DesignModel = require("../models/DesignModel")
const auth = require('../middleware/auth')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
let saltRounds = 10

const {isValid, isValidObjectId,isValidRequestBody} = require("../validation/validator")

const createUser = async (req, res) => {
    try {
        let data = req.body
        const {name,email,password}=data

        if (!isValidRequestBody(data)) {
            return res.status(400).send({ status: false, message: "Please provide data to create user" })
        }
        
        if (!isValid(name)) {
            return res.status(400).send({ status: false, message: "please provide user's name" })
        }
        if (!isValid(email)) {
            return res.status(400).send({ status: false, Message: "Please provide your email" })
        }
     if(!isValid(password)){
        return res.status(400).send({status:false,message:"please provide  password"})
     }

        const encryptPassword = await bcrypt.hash(req.body.password, saltRounds)
      
       

        const savedata = {
            name: req.body.name,
            email: req.body.email,
            password: encryptPassword
        }
        const newData = await userModel.create(savedata)
        return res.status(201).send({ status: true, data: newData })
    }
    catch (err) {
        console.log("This is the error:", err.message)
        return res.status(500).send({ status: false, msg: err.message })
    }
}

const loginUser = async (req, res) => {
    try {
        let { email, password } = req.body;

        if (!isValidRequestBody(req.body)) {
            return res.status(400).send({ status: false, message: "Please provide email password" })
        }
        if (!isValid(email)) {
            return res.status(400).send({ status: false, Message: "Please provide your email" })
        }
       
         let user = await userModel.findOne({ email: email })    // DB Call
    //   console.log(user)
        if (!user) { return res.status(404).send({ status: false, msg: "email  is invalid! or not in db" }) }

        if(!isValid(password)){
            return res.status(400).send({status:false,message:"please provide your password"})
         }
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            return res.status(400).send({ status: false, Message: "Incorrect password" })
        }


        let token = jwt.sign(                         // JWT Creation
            {
                userId: user._id.toString(),
                project: "DesignManagement",
                iat: Math.floor(Date.now() / 1000),
                exp: Math.floor(Date.now() / 1000) + 48 * 60 * 60
            },
            "conversa.ai_assignment"              // Secret Key 
        )
        return res.status(200).send({ status: true, message: "User login successfull", data: { userId: user._id, token: token } })

    }
    catch (err) {
        console.log("This is the error:", err.message)
        return res.status(500).send({ status: false, msg: err.message })
    }
}

const getDesignDetail = async (req,res) => {
try {
     const userId=req.params.userId

    if(!isValidObjectId(userId)){
        return res.status(400).send({status:false,message:"userid is incorrect"})
    }
   const user= await userModel.findById({_id: userId })
    // console.log(user)

    if(!(user)){
        return res.status(400).send({status:false,message:"userid is incorrect"})
    }

    const data = await DesignModel.find()
    const detail={
        name:user.name,
        data:data
    }
    return res.status(200).send({status:true,data:detail})
}
catch (err) {
    console.log("This is the error:", err.message)
    return res.status(500).send({ status: false, msg: err.message })
}

}

const getSpecificDetail= async (req,res) =>{
    try{
     const DesignId= req.params.DesignId

     if(!isValidObjectId(DesignId)){
        return res.status(400).send({status:false,message:"DesignId is incorrect"})
    }
     const Design= await DesignModel.findOne({_id:DesignId})
     if(!(Design)){
        return res.status(400).send({status:false,message:"Design is incorrect"})
    }

     const fetch=Design.description

    return res.status(200).send({status:true,specification:fetch})
}
catch (err) {
    console.log("This is the error:", err.message)
    return res.status(500).send({ status: false, msg: err.message })
}
}

module.exports = { createUser, loginUser,getDesignDetail,getSpecificDetail }