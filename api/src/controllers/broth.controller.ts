import { Request, Response } from "express";
import BrothService from "services/broth.service";

class BrothController {
  static Index(req: Request, res: Response) {
    try {
      const broths = BrothService.Index();
      res.status(200).json(broths)
    } catch (error: any) {
      res.status(500).json({ error: error.message ?? error });      
    }
  }
}

export default BrothController;