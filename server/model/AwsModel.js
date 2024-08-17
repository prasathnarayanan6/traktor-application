const aws = require('aws-sdk');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const multer = require('multer');
const multers3 = require("multer-s3");
const fs = require('fs');
const AwsModel = async(filename) => 
{
    aws.config.update({
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
        accessKeyId:process.env.AWS_ACCESS_KEY,
        region:process.env.REGION
    })
    const s3= new aws.S3();
    // const upload = multer({
    //     storage:multers3({
    //         bucket: process.env.BUCKET,
    //         s3:s3,
    //         acl:"public-read",
    //         key:(req,file,cb)=>{
    //             cb(null,file.originalname);
    //         }
    //     })
    // })
    // let x = s3.getObject({Bucket:process.env.BUCKET, Key:filename}).promise();
    // res.send(x.Body)
    // let x = await s3.getObject({ Bucket: "resume-data-nirmaan", Key: filename }).promise();
    // fs.writeFileSync('downloaded.pdf', x.Body);
    // console.log('File Downloaded successfully');
    try {
        const headParams = {
            Bucket: process.env.BUCKET,
            Key: filename
        };
        const headObject = await s3.headObject(headParams).promise();
        if (headObject && headObject.ContentLength > 0) {
            const publicUrl = `https://resume-data-nirmaan.s3.ap-south-1.amazonaws.com/${filename}`;

            console.log('Public URL of the S3 object:', publicUrl);
            
            // Use the public URL as needed (e.g., return it from the function, send it as a response, etc.)
            return publicUrl;
        } else {
            console.log('S3 object does not exist or is not publicly accessible.');
            return null;
        }
    } catch (error) {
        console.error('Error retrieving S3 object metadata:', error);
        return null;
    }
}
module.exports = AwsModel;
