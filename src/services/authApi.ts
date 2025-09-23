import { MODAL_STACK } from '../modals/modal.constants';
import { Tokens } from '../store/authStore';
import { hideBottomSheet } from '../utils/modal.utils';
import API from './api.service';

export const login = async (): Promise<Tokens> => {
  try {
    const response = await API.post<Tokens>('auth/login', {
      email: 'Felicity_Crona@yahoo.com',
      password: 'customer123',
    });
    hideBottomSheet?.(MODAL_STACK.LOADING);
    return response.data;
  } catch (error) {
    // TODO: Handle Error Bottom Sheet
    return {
      accessToken: '',
      refreshToken: '',
    };
  }
};
