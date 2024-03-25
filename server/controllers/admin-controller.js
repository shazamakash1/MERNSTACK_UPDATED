const User = require("../models/user-model");
const Contact = require("../models/contact-model");

const getAllUsers = async (req, res) => {
  try {
    // const users = await User.find({ isAdmin: true }, { password: 0 });
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0)
      return res.status(404).json({ message: "No users Found" });
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0)
      return res.status(404).json({ message: "No Contacts Found" });
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.deleteOne({ _id: id });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const users = await User.findOne({ _id: id }, { password: 0 });
    if (!users || users.length === 0)
      return res.status(404).json({ message: "No users Found" });
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updateUserData = req.body;

    const updatedData = await User.updateOne(
      { _id: id },
      {
        $set: updateUserData,
      }
    );

    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUserById,
  getUserById,
  updateUserById,
};
