export interface OrderRequest {
  brothId: string;
  proteinId: string;
}

export interface OrderResponse {
  id: string;
  description: string;
  image: string;
}

export interface ErrorResponse {
  error: string;
}

export interface Broth {
  id: string;
  imageInactive: string;
  imageActive: string;
  name: string;
  description: string;
  price: number;
}

export interface Protein {
  id: string;
  imageInactive: string;
  imageActive: string;
  name: string;
  description: string;
  price: number;
}