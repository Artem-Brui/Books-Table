import { Response } from "express";

const handleERORR = (res: Response, error: unknown): void => {
  res.status(500).json({ errorMessage: error });
};

export default handleERORR;