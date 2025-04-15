"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../../models/Category"));
const categoriesGET = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield Category_1.default.find();
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
        const response = { success: true, status: 200, response: categories };
        res.status(response.status).json(response);
    }
    catch (err) {
        console.error(err);
    }
});
exports.default = categoriesGET;
