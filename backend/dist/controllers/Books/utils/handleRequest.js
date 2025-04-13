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
exports.handleRequest = void 0;
const handleERORR_1 = __importDefault(require("./handleERORR"));
const booksGET_1 = __importDefault(require("./booksGET"));
const bookPOST_1 = __importDefault(require("./bookPOST"));
const bookPATCH_1 = __importDefault(require("./bookPATCH"));
const bookDELETE_1 = __importDefault(require("./bookDELETE"));
const handleRequest = (reqType, req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let requestHandler = null;
    switch (reqType) {
        case "GET":
            requestHandler = booksGET_1.default;
            break;
        case "POST":
            requestHandler = bookPOST_1.default;
            break;
        case "PATCH":
            requestHandler = bookPATCH_1.default;
            break;
        case "DELETE":
            requestHandler = bookDELETE_1.default;
            break;
        default:
            requestHandler = () => ({
                success: false,
                status: 500,
                response: "Request type is not defined...",
            });
            break;
    }
    try {
        if (!requestHandler) {
            throw new Error("Request handler is not defined");
        }
        const response = yield requestHandler(req);
        res.status(response.status).json(response);
    }
    catch (error) {
        (0, handleERORR_1.default)(res, error);
    }
});
exports.handleRequest = handleRequest;
