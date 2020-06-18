import CryptoJS from 'crypto-js';
class Crypto {
    __key: string = "finance-171"

    encrypt(password: string){
       return CryptoJS.AES.encrypt(password, this.__key).toString();
    }

    decrypt(encryptedPassword: string){
        let bytes  = CryptoJS.AES.decrypt( encryptedPassword , this.__key);
        return bytes.toString(CryptoJS.enc.Utf8);
    }


    log(){
        const text = CryptoJS.AES.encrypt("message", this.__key).toString();

        var bytes  = CryptoJS.AES.decrypt( text , this.__key);
        var originalText = bytes.toString(CryptoJS.enc.Utf8);
    }
}


export default new Crypto();