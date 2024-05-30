import { ProteinDto } from "dtos/order.dto";
import { PROTEINS } from "../constants";

export default class ProteinService {
  static Index(): ProteinDto[] {
    return PROTEINS;
  }
}
