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

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = await UserModel.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }
    res.status(200).json({ message: "User updated successfully", updatedUser });
  } catch (err) {
    res.status(500).json({ message: "Error updating user", error: err });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await UserModel.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }
    res.status(200).json({ message: "User deleted successfully", deletedUser });
  } catch (err) {
    res.status(500).json({ message: "Error deleting user", error: err });
  }
};
export { createUser, getUsers, updateUser,deleteUser };
