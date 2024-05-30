import { ErrorResponse } from "dtos/order.dto";
import { NextFunction, Request, Response } from "express";

export default class ValidateApiKeyMiddleware {
  static Validate(req: Request, res: Response, next: NextFunction): void {
    try {
      const key = req.header("x-api-key");
      if (!key || key !== process.env.API_KEY) throw Error("x-api-key header missing");
      next();
    } catch (error: any) {
      const errorResponse: ErrorResponse = { error: error.message ?? error };
      res.status(403).json(errorResponse);
    }
  } 
}