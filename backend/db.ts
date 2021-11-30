const diskdb = require("diskdb");
const db = diskdb.connect("./db", ["users"]);
import { User } from "./dao/user";

var user: User = {
  username: "example@example.com",
  password: "password@123",
};

db.users.save(user);
