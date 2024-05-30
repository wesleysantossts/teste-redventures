export interface OrderRequestDto {
  brothId: string;
  proteinId: string;
}

export interface OrderResponseDto {
  id: string;
  description: string;
  image: string;
}

export interface ErrorResponseDto {
  error: string;
}

export interface BrothDto {
  id: string;
  imageInactive: string;
  imageActive: string;
  name: string;
  description: string;
  price: number;
}

export interface ProteinDto {
  id: string;
  imageInactive: string;
  imageActive: string;
  name: string;
  description: string;
  price: number;
}