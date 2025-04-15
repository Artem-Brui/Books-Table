import { Request, Response } from "express";
import Category from "../../models/Category";

const categoriesGET = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();

    if (!categories) {
      return {
        success: false,
        status: 500,
        response: "Categories are not defined...",
      };
    }

    if (!categories.length) {
      return {
        success: false,
        status: 500,
        response: "Categories list is empty...",
      };
    }

    const response = { success: true, status: 200, response: categories }

    res.status(response.status).json(response);
  } catch (err) {
    console.error(err);
  }
};

export default categoriesGET;
