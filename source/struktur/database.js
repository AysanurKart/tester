
const fs = require ("fs");

const ABSOLUTE_PATH = __dirname + "/../../voresdata";
const USER_FILE = "/data.json";

class database {
    constructor (){
        this.users = this.openFile(USER_FILE);
    }

    saveFile(fileName, contentString){
        fs.writeFileSync(ABSOLUTE_PATH + fileName, contentString);    
        }

    openFile(fileName) {
    const fil = fs.readFileSync(ABSOLUTE_PATH + fileName);
    return JSON.parse(fil);
    }

    saveUser(user){
    this.users.push(user);
    this.saveFile(USER_FILE, JSON.stringify(this.users));
    }

    findUser(user){
        return this.users.find((x) => user.email == x.email);
    }

    deleteUser(user){
        this.users = this.users.filter((x) => x.email != user.email);
        this.saveFile(USER_FILE, JSON.stringify(this.users));
    }
 }

 module.exports = new database();