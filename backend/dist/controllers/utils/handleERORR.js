"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleERORR = (res, error) => {
    res.status(500).json({ errorMessage: error });
};
exports.default = handleERORR;
