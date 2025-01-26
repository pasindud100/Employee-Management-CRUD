import UserModel from "../models/userModel.js";

const createUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    const NewUser = new UserModel({ name, email, phone });
    await NewUser.save();
    res.status(200).json({ message: "User created successfully", NewUser });
  } catch (err) {
    res.status(500).json({ message: "Error creating user", error: err });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();

    if (!users) {
      return res
        .status(404)
        .json({ message: "No users found", success: false });
    }

    // Respond this found users data
    res.status(200).json({ message: "Users fetched successfully", users });
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err });
  }
};

export { createUser, getUsers };
