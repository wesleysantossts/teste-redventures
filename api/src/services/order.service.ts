import { BROTHS, PROTEINS } from "../constants";
import { BrothDto, OrderRequestDto, OrderResponseDto, ProteinDto } from "../dtos/order.dto";
import api from "../config/axiosConfig";
import { GetOrderImage } from "../utils/order.util";

export default class OrderService {
  static async Store(payload: OrderRequestDto): Promise<OrderResponseDto> {
    const broth: BrothDto = BROTHS.filter(item => item.id === payload.brothId)[0] ?? null;
    const protein: ProteinDto = PROTEINS.filter(item => item.id === payload.proteinId)[0] ?? null;

    const { data: { orderId } }: any = await this.GenerateOrderId();
    const response: OrderResponseDto = {
      id: orderId,
      description: `${broth.name} and ${protein.name} Ramen`,
      image: GetOrderImage(protein.name.toLowerCase()),
    }

    return response;
  }

  static async GenerateOrderId(): Promise<string> {
    return api.post("https://api.tech.redventures.com.br/orders/generate-id");
  }
}