"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (res, error) => {
    res.status(500).json({ errorMessage: error });
};
exports.default = errorHandler;
