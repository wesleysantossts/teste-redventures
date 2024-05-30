import { Request, Response } from "express";
import ProteinService from "services/protein.service";

class ProteinController {
  static Index(req: Request, res: Response) {
    try {
      const proteins = ProteinService.Index();
      res.status(200).json(proteins)
    } catch (error: any) {
      res.status(500).json({ error: error.message ?? error });      
    }
  }
}

export default ProteinController;