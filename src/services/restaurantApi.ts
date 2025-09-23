import { Category } from '../constants/interface/spyList';
import API from './api.service';

export const fetchCategoriesAndDishes = async (
  id: number,
): Promise<Category[]> => {
  try {

    const response = await API.get<Category[]>('dishes/restaurant', {
      params: {
        restaurantId: id,
      }
    });

    return response.data;
  } catch (error) {
    // TODO: Handle Error Bottom Sheet
    return  [];
  }
};
