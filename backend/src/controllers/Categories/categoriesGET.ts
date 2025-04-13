import { Request, Response } from "express";
import Categorie from "../../models/Category";

const categoriesGET = async (req: Request, res: Response) => {
  try {
    const categories = await Categorie.find().lean();

    res.status(200).json(categories);
  } catch (err) {
    console.error(err);
  }
}


export default categoriesGET;