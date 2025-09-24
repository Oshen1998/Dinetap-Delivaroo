import { Category } from '../constants/interface/spyList';
import API from './api.service';

const ENDPOINTS = {
  CATEGORY_DISHES: 'dishes/restaurant',
};

export const fetchCategoriesAndDishes = async (
  id: number,
): Promise<Category[]> => {
  try {
    const response = await API.get<Category[]>(ENDPOINTS.CATEGORY_DISHES, {
      params: {
        restaurantId: id,
      },
    });

    return response.data;
  } catch (error) {
    // TODO: Handle Error Bottom Sheet
    return [];
  }
};

export const fetchAllRestaurants = async (): Promise<Category[]> => {
  try {
    const response = await API.get<Category[]>('restaurant', {});

    return response.data;
  } catch (error) {
    // TODO: Handle Error Bottom Sheet
    return [];
  }
};
