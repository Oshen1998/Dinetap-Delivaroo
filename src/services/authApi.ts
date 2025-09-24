import { MODAL_STACK } from '../modals/modal.constants';
import { Tokens } from '../store/authStore';
import { hideBottomSheet } from '../utils/modal.utils';
import API from './api.service';

const AUTH_ENDPOINTS = {
  LOGIN: 'auth/login',
};

export const login = async (): Promise<Tokens> => {
  try {
    const response = await API.post<Tokens>(AUTH_ENDPOINTS.LOGIN, {
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
