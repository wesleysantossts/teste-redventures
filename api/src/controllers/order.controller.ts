import { OrderResponseDto } from "dtos/order.dto";
import { Request, Response } from "express";
import OrderService from "services/order.service";

export default class OrderController {
  static async Store(req: Request, res: Response): Promise<OrderResponseDto | any> {
    try {
      const { brothId, proteinId } = req.body;
      if (
        !brothId ||
        !proteinId
      ) res.status(400).json({ error: "both brothId and proteinId are required" });
      const payload = { brothId, proteinId };
      const order: OrderResponseDto = await OrderService.Store(payload);

      res.status(201).json(order);
    } catch (error: any) {
      res.status(500).json({ error: "could not place order" })
    }
  }
}