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
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRequest = void 0;
const utils_1 = require("./utils");
const handleRequest = (reqType, req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let requestHandler = null;
    switch (reqType) {
        case 'GET':
            requestHandler = utils_1.handleGET;
            break;
        case 'POST':
            requestHandler = utils_1.handlePOST;
            break;
        default:
            requestHandler = () => 'Request type is not defined...';
            break;
    }
    try {
        if (!requestHandler) {
            throw new Error('Request handler is not defined');
        }
        const response = yield requestHandler(req, res);
        res.status(200).json(response);
    }
    catch (error) {
        (0, utils_1.handleERORR)(res, error);
    }
});
exports.handleRequest = handleRequest;
