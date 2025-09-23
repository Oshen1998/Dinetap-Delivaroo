import { create } from 'zustand';
import { Category, ListItem } from '../constants/interface/spyList';
import { FlatList } from 'react-native';

interface CategoryState {
  categories: Category[];
  isLoading: boolean;
  error: string | null;
  flatListRef: React.RefObject<FlatList<ListItem> | null> | null;

  setCategories: (data: Category[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useCategoryStore = create<CategoryState>(set => ({
  categories: [],
  isLoading: false,
  error: null,
  flatListRef: null,
  setCategories: data =>
    set({ categories: data, isLoading: false, error: null }),
  setLoading: loading => set({ isLoading: loading }),
  setError: error => set({ error: error, isLoading: false }),
}));
