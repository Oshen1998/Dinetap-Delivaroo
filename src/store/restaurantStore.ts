import { create } from 'zustand';
import { Category } from '../constants/interface/spyList';
import { fetchCategoriesAndDishes } from '../services/restaurantApi';

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
      set({ categories: data });
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
