import {
  createModalStack,
  ModalOptions,
  ModalStackConfig,
} from 'react-native-modalfy';
import { slideFromBottomAnimation } from './modal.utils';
import { MODAL_STACK } from './modal.constants';
import NoInternet from './NoInternet';
import LoadingModal from './loader.modal';

const modalConfig: ModalStackConfig = {
  [MODAL_STACK.NETWORK_MODAL]: {
    modal: NoInternet,
    backBehavior: 'none',
  },
  [MODAL_STACK.LOADING]: {
    modal: LoadingModal,
    backBehavior: 'none',
  },
};

const defaultOptions: ModalOptions = {
  disableFlingGesture: true,
  position: 'bottom',
  transitionOptions: slideFromBottomAnimation,
};

export const ModalStack = createModalStack(modalConfig, defaultOptions);
