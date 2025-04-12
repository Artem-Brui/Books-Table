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
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set("strictQuery", true);
mongoose_1.default.connection.on("error", (err) => console.log("DB connection error!", err));
mongoose_1.default.connection.on("connected", () => console.log("DB connected..."));
mongoose_1.default.connection.on("close", () => console.log("DB connection closed!"));
const connectDB = (url) => __awaiter(void 0, void 0, void 0, function* () {
    if (!url) {
        console.log('DB Link for connection not found...');
        return;
    }
    try {
        mongoose_1.default.connect(url);
    }
    catch (err) {
        console.error(err);
    }
});
exports.default = connectDB;
