import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class UserController {
  constructor() {
    const dataPath = path.join(__dirname, "../data/users.json");
    this.users = JSON.parse(fs.readFileSync(dataPath, "utf8"));
  }

  async getAllUsers() {
    // Simulate fetching users from a database
    return this.users;
  }

  async getUserById(id) {
    // Simulate fetching a single user by id from a database
    return this.users.find((user) => user.id === id);
  }
}

export default UserController;
