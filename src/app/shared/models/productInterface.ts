
export interface Iproduct {
  productId: string;
  productName: string;
  productStatus: "in-progress" | "delivered" | "dispatched";
  canReturn: number; // 1 = returnable, 0 = not returnable
  productDescription: string[]; // list of features
  // url: string;
  price: number;
  discount: number;
  // offer:string;
  exchangeOffer: string;
  image: string;
}

