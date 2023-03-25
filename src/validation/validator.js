const mongoose = require("mongoose")
//to check validation
const isValid = (value) => {
  if (typeof value === "undefined" ||  value === null) return false
  if (typeof value === "string" && value.trim().length === 0) return false

  return true
}

const isValidRequestBody = (requestBody) => {
  return Object.keys(requestBody).length 
}

//validation for 



//to check validation of objectId
const isValidObjectId = (objectId) => {
  return mongoose.isValidObjectId(objectId)
}

module.exports = {isValid,isValidObjectId,isValidRequestBody}