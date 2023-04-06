import React, { FunctionComponent } from 'react';
import { ModalProps } from './types';
import {
  CustomModal, CustomCloseIcon, ModalHeader, Title,
} from './styles';

export const Modal: FunctionComponent<ModalProps> = (props: ModalProps) => {
  const {
    children, title, onClose, isOpen,
  } = props;

  const customStyles = {
    overlay: { zIndex: 1000 },
  };

  return (
        <CustomModal
            isOpen={isOpen}
            ariaHideApp={false}
            style={customStyles}
        >
            <ModalHeader>
                <Title>{title}</Title>
                <CustomCloseIcon onClick={onClose} />
            </ModalHeader>
            {children}
        </CustomModal>
  );
};
