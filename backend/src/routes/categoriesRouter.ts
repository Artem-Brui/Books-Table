import express from "express";
import categoriesGET from "../controllers/Categories/categoriesGET";

const categoriesRouter = express.Router();

categoriesRouter.get("/", categoriesGET);

export default categoriesRouter;
