import { Request, Response } from "express";
import Category from "../../models/Category";

const categoriesGET = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();

    const isError = !categories || !categories.length;
    const success = categories && categories.length > 0;
    const status = isError ? 500 : 200;
    const response = !isError
      ? { success, status, response: categories }
      : !categories
        ? { success, status, response: "Categories are not defined..." }
        : { success, status, response: "Categories list is empty..." };

    res.status(response.status).json(response);
  } catch (err) {
    console.error(err);
  }
};

export default categoriesGET;
