const crypto = require('crypto');
// const ENC_KEY = "bf3c199c2470cb477d907b1e0917c17b";
// const IV = "5183666c72eec9e4";
// const ENC_KEY = 'bf3c199c2470cb477d907b1e0917c17b'
// const IV = '5183666c72eec9e4'
const ENC_KEY = Buffer.from('bf3c199c2470cb477d907b1e0917c17b', 'hex');
// const IV = Buffer.from('5183666c72eec9e4', 'hex');
const IV = Buffer.from('5183666c72eec9e4', 'hex');
const phrase = "RegulationsPolciy";
var Encryption = (val) => {
    let cipher = crypto.createCipheriv('aes-256-cbc', ENC_KEY, IV);
    let encrypted = cipher.update(val, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;      
}
var Decrypted = (encrypted)=>{
    let decipher = crypto.createDecipheriv('aes-256-cbc', ENC_KEY, IV);
    let decrypted = decipher.update(encrypted, 'base64', 'utf8');
    return decrypted+decipher.final('utf8');
}
module.exports = {Encryption, Decrypted};