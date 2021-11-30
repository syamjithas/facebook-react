const diskdb = require("diskdb");
const db = diskdb.connect("./db", ["users","authors","books"]);
export default db;
