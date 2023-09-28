import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.createUser(req.body);
    res.send({
      success: true,
      message: "User Created Successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const createOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const result = await UserService.createOrUpdateProfile(req.body);
    res.send({
      success: true,
      message: "Profile Created Successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getUsers();
    res.send({
      success: true,
      message: "Data Retrived Successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const result = await UserService.getSingleUser(id);
    res.send({
      success: true,
      message: "Data Retrived Successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const UserController = {
  createUser,
  createOrUpdateProfile,
  getUsers,
  getSingleUser,
};
