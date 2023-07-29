export interface IProductItem {
  id: string;
  name: string;
  price: number;
  color: string;
  brand: string;
  category: string;
  image: any;
}
export type TypeProductArray = IProductItem[];
