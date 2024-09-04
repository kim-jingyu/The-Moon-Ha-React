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
        border: none;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        font-family: 'Happiness-Sans', sans-serif;
        font-weight: 800;
    `,
    lessonRegisterBtn: css`
        width: 200px;
        height: 50px;
        background-color: ${({ disabled }) => (disabled ? colors.light_gray : colors.main_green)};
        color: ${({ disabled }) => (disabled ? colors.drak_gray : colors.white)};
        font-size: 12px;
        border-radius: 5px;
        cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
        text-align: center;
        border: none;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        font-family: 'Happiness-Sans', sans-serif;
        font-weight: 800;

        &:hover {
            background-color: ${({ disabled }) => (disabled ? colors.light_gray : colors.main_green)};
        }
    `,
};

export const StyledButton = styled.button`
    ${({ variant }) => buttonStyles[variant]}
`;
