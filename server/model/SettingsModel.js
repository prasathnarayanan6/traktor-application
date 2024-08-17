const client = require('../utils/conn');
const AddSettings = async() => {
    return new Promise((resolve, reject)=>{
        resolve({data: "Data is added"})
    })
}
const DeleteSettings = async() => {
    return new Promise((resolve, reject)=>{
        resolve({data: "Data is deleted"});
    })  
}
module.exports = {AddSettings, DeleteSettings}