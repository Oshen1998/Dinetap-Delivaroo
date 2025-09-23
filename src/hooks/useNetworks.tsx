import { useEffect, useState } from 'react';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import { useModal } from 'react-native-modalfy';
import { MODAL_STACK } from '../modals/modal.constants';

const useNetworkStatus = () => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const [details, setDetails] = useState<NetInfoState | null>(null);

  const { openModal, closeModal } = useModal();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected ?? false);
      setDetails(state);

      if (state.isConnected === false) {
        openModal(MODAL_STACK.NETWORK_MODAL);
      } else {
        closeModal(MODAL_STACK.NETWORK_MODAL);
      }
    });

    NetInfo.fetch().then(state => {
      setIsConnected(state.isConnected ?? false);
      setDetails(state);

      if (state.isConnected === false) {
        openModal(MODAL_STACK.NETWORK_MODAL);
      } else {
        closeModal(MODAL_STACK.NETWORK_MODAL);
      }
    });

    return () => unsubscribe();
  }, [openModal, closeModal]);

  return { isConnected, details };
};

export default useNetworkStatus;
