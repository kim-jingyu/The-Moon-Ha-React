import { Modal } from 'antd';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const StyledModal = styled(Modal)`
    display: flex;
    width: auto;
    max-width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
    // height: 100vh;

    .ant-modal-content {
        align-items: center;
        border-radius: 10px;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    }

    .ant-modal-body {
        display: flex; /* Flexbox를 사용하여 모달 본문을 중앙 정렬 */
        align-items: center; /* 모달 본문을 수직으로 중앙 정렬 */
        justify-content: center; /* 모달 본문을 수평으로 중앙 정렬 */
    }

    .ant-modal-footer {
        display: flex;
        justify-content: center;
    }
`;
