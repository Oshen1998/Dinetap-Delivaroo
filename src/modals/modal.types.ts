import { MODAL_STACK } from './modal.constants';

export interface ModalStackParams {
  [MODAL_STACK.LOADING]: {
    title: string;
    description?: string;
  };
}
