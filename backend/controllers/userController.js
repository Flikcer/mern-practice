import asyncHandler from "express-async-handler";

const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register User" });
});

const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout User" });
});

const getUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get User" });
});

const updateUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User" });
});

export { authUser, registerUser, logoutUser, getUser, updateUser };
