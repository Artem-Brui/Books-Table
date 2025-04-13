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
const handleGET_1 = __importDefault(require("./handleGET"));
const handlePOST_1 = __importDefault(require("./handlePOST"));
const handlePATCH_1 = __importDefault(require("./handlePATCH"));
const handleDELETE_1 = __importDefault(require("./handleDELETE"));
const handleRequest = (reqType, req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let requestHandler = null;
    switch (reqType) {
        case "GET":
            requestHandler = handleGET_1.default;
            break;
        case "POST":
            requestHandler = handlePOST_1.default;
            break;
        case "PATCH":
            requestHandler = handlePATCH_1.default;
            break;
        case "DELETE":
            requestHandler = handleDELETE_1.default;
            break;
        default:
            requestHandler = () => ({
                success: false,
                status: 500,
                response: "Request type is not defined..."
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
