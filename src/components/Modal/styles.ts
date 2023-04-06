import styled from 'styled-components';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import COLORS from '../../helpers/colors';

export const CustomModal = styled(Modal)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px 30px;
    border-radius: 6px;
    outline: none;
    border: 1px solid ${COLORS.greyMischka};
    box-shadow: 0 2px 4px rgba(0,0,0,0.18);
    min-width: 800px;
    min-height: 800px;
`;

export const CustomCloseIcon = styled(CloseIcon)`
    width: 30px;
    height: 30px;
    cursor: pointer;
    justify-content: flex-end;
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${COLORS.greyMischka};
`;

export const Title = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    flex: 1;
    line-height: 24px;
    text-align: center;
`;
