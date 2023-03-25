const DesignModel = require("../models/DesignModel");
const {isValid, isValidObjectId,isValidRequestBody,isValidFiles} = require("../validation/validator");
const uploadFile = require("../aws/aws")

  

const createDesign = async (req,res) =>{
  try{

    const data=req.body;
    // console.log(data)
    const files = req.files;

    const {id, title, description,Model,userId,price,tags }=data
    
    if (!isValidRequestBody(data)) {
      return res.status(400).send({ status: false, message: "Please provide data to create Design" })
  }
  if (!isValidFiles(files)) {
    return res.status(400).send({ status: false, message: "please provide products's image" })
}

  
  if (!isValid(id)) {
    return res.status(400).send({ status: false, message: "Please provide product id" })
}
  if (!isValid(title)) {
    return res.status(400).send({ status: false, message: "please provide product's title" })
}
if (!isValid(description)) {
    return res.status(400).send({ status: false, message: "Please provide products's descriptions" })
}

if(!isValidObjectId(userId)){
  return res.status(400).send({status:false,message:"userid is incorrect"})
}
if (!isValid(price)) {
    return res.status(400).send({ status: false, message: "Please provide products's price" })
}
if (!isValid(tags)) {
  return res.status(400).send({ status: false, message: "Please provide products's tags" })
}

const ModelPhoto = await uploadFile(files[0])


    
    const saveData=await DesignModel.create(data)
    const modelData={
      id:saveData.id,
      userId: saveData.userId,
      title: saveData.title,
      description:saveData.description,
      Model:ModelPhoto,
     price:saveData.price,
     tags:saveData.tags
     
    }
  return res.status(201).send({status:true,data:modelData})
  } 
  catch(err){
    return res.status(500).send({status:false,msg:err.msg})
  }
}

const getDesign= async (req,res)=> {
  try{
  const data= await DesignModel.find()
  return res.status(200).send({data:data})
  }
  catch(err){
    return res.status(500).send({status:false,msg:err.msg})
  }

}
const updateDesign= async (req,res) => {
  try{
    const DesignId=req.params.DesignId;

    if(!isValidObjectId(DesignId)){
      return res.status(400).send({status:false,message:"DesignId is incorrect"})
  }

    const {tags,title,discription}=req.body;
    if (!isValidRequestBody(req.body)) {
      return res.status(400).send({ status: false, message: "Please provide data to create Design" })
  }

    const saveData= await DesignModel.findOneAndUpdate({_id:DesignId},{ $push:{tags:tags},$set:{ title,discription}},{new:true})

    return res.status(200).send({data:saveData})
  }
  catch(err){
    return res.status(500).send({status:false,msg:err.msg})
  }
}
const DeleteDesign= async (req,res) =>{
  const DesignId = req.params.DesignId;

  if(!isValidObjectId(DesignId)){
    return res.status(400).send({status:false,message:"DesignId is incorrect"})
}

const DesignDelete= await DesignModel.findOneAndDelete({_id:DesignId},{$set:{isDeleted:true}},{new:true})

if (!DesignDelete) { return res.status(404).send({ msg: "Already deleted" }) }

res.status(200).send({ msg: "Deleted" })
}

module.exports={createDesign,getDesign,updateDesign,DeleteDesign}