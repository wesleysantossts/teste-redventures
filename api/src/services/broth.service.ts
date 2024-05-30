import { BrothDto } from "dtos/order.dto";
import { BROTHS } from "../constants";

export default class BrothService {
  static Index(): BrothDto[] {
    return BROTHS;
  }
}
