import { FC, PropsWithChildren } from 'react';
import { ModalContainerStyle } from '../../utils/styles';

const ModalContainer: FC<PropsWithChildren> = ({ children }) => {
  return <ModalContainerStyle>{children}</ModalContainerStyle>;
};

export default ModalContainer;
