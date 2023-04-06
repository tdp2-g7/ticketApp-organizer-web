import React, { FunctionComponent } from 'react';
import { ModalProps } from './types';
import {
  CustomModal, CustomCloseIcon, ModalHeader, Title,
} from './styles';

export const Modal: FunctionComponent<ModalProps> = (props: ModalProps) => {
  const {
    children, title, onClose, isOpen,
  } = props;
  return (
    <CustomModal isOpen={isOpen} ariaHideApp={false}>
      <ModalHeader>
        <Title>{title}</Title>
        <CustomCloseIcon onClick={onClose} />
      </ModalHeader>
      {children}
    </CustomModal>
  );
};
