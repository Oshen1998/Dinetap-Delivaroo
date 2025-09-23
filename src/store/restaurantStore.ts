import { create } from 'zustand';
import { Category } from '../constants/interface/spyList';
import { fetchCategoriesAndDishes } from '../services/restaurantApi';
import { randomImage } from '../utils';

export interface CategoryState {
  categories: Category[];
  loading: boolean;
  error: boolean;
  fetchData: (id: number, token?: string) => Promise<boolean>;
}

const useRestaurantStore = create<CategoryState>((set, get) => ({
  categories: [],
  loading: false,
  error: false,
  fetchData: async (id: number) => {
    set({ loading: true, error: false });
    try {
      const data = await fetchCategoriesAndDishes(id);

      const dishes = data.map(item => {
        const formattedDishes = item.dishes.map(dish => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { image, ...rest } = dish;
          return {
            ...rest,
            image: randomImage(),
          };
        });
        return {
          categoryId: item.categoryId,
          dishes: formattedDishes,
          categoryName: item.categoryName,
        };
      });
      set({ categories: dishes });
      return true;
    } catch (err) {
      set({ error: true });
    } finally {
      set({ loading: false });
      return get().error;
    }
  },
}));

export default useRestaurantStore;
