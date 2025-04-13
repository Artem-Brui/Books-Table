"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categoriesGET_1 = __importDefault(require("../controllers/Categories/categoriesGET"));
const categoriesRouter = express_1.default.Router();
categoriesRouter.get("/", categoriesGET_1.default);
exports.default = categoriesRouter;
