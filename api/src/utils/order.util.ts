import { ORDER_IMAGE } from "../constants";

export function GetOrderImage(protein: string): string {
  return ORDER_IMAGE.filter((img: any) => img.type === protein)[0].url;
}