import CryptoJS from 'crypto-js';
const ENC_KEY = CryptoJS.enc.Hex.parse('bf3c199c2470cb477d907b1e0917c17b');
const IV = CryptoJS.enc.Hex.parse('5183666c72eec9e4');
export const Encryption = (val) => {
    const encrypted = CryptoJS.AES.encrypt(val, ENC_KEY, { iv: IV });
    return encrypted.toString();
};
export const Decrypted = (encrypted) => {
    const bytes = CryptoJS.AES.decrypt(encrypted, ENC_KEY, { iv: IV });
    return bytes.toString(CryptoJS.enc.Utf8);
};
