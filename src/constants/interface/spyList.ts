export interface ListItem {
  dishId: number;
  categoryIndex: number,
  dishName: string;
  dishRate: number;
  category: string;
  price: string;
  currency: string;
  calories?: string;
  tags?: string;
  description?: string;
  imageId?: number;
}

export type Dish = Omit<ListItem, 'categoryIndex' | 'category'>

export interface Category {
  categoryId: number;
  categoryName: string;
  dishes: Dish[];
}