const User = require("../models/user.model");
const cloudinary = require("../config/cloudinary");

class UserController {
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      return res.status(200).json({ users: users });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async deleteUser(req, res) {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return json.status(404).json("This user does not exist");
      }
      return res.status(200).json({ msg: "User deleted" });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = new UserController();
