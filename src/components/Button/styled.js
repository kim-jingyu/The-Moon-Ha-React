import styled, { css, keyframes } from 'styled-components';
import { colors } from '../../styles/colors';

// 로딩 스피너 애니메이션
const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
    border: 2px solid ${colors.light_gray};
    border-top: 2px solid ${colors.main_green};
    border-radius: 50%;
    width: 16px;
    height: 16px;
    animation: ${spin} 1s linear infinite;
`;

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
    registerBtn: css`
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
    prologuePlusBtn: css`
        width: 100%;
        height: 35px;
        background-color: ${colors.white};
        color: ${colors.black};
        font-size: 12px;
        border-radius: 10px;
        border: none;
        cursor: 'pointer';
        text-align: center;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

        &:hover {
            background-color: ${colors.light_gray};
        }
    `,
    prologueAddBtn: css`
        width: 200px;
        height: 50px;
        align-items: center;
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
    logoutBtn: css`
        font-family: 'Happiness-Sans', sans-serif;
        font-weight: 700; /* Bold */
        border: none;
        cursor: pointer;
        background-color: transparent;
        font-size: 12px;
        color: ${colors.white};
    `,
    calendarBtn: css`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        border: none;
        cursor: pointer;
        background-image: ${({ icon }) => (icon ? `url(${icon})` : 'none')};
        background-repeat: no-repeat;
        background-position: center;
        background-size: 10px;
        background-color: transparent;

        &.active {
            /* active 상태에 따른 추가 스타일 */
            border: 2px solid ${colors.drak_gray};
        }

        &:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }
    `,
};

export const StyledButton = styled.button`
    ${({ variant }) => buttonStyles[variant]}
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;
