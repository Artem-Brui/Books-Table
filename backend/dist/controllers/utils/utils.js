"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleERORR = void 0;
const handleERORR = (res, error) => {
    res.status(500).json({ errorMessage: error });
};
exports.handleERORR = handleERORR;
