import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';

const buttonStyles = {
    addBtn: css`
        width: 50px;
        height: 35px;
        background-color: ${colors.bright_green};
        color: white;
        font-size: 12px;
        border-radius: 5px;
        cursor: pointer;
        text-align: center;
        font-weight: bold;
        border: none;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
    `,
};

export const StyledButton = styled.button`
    ${({ variant }) => buttonStyles[variant]}
`;
