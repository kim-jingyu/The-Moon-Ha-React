import styled from 'styled-components';

import { colors } from '../../styles/colors';
import '../../styles/font.css';

export const Container = styled.div`
    width: 90vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.bg_green} !important;
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    height: 31px;
    margin-top: 22px;
    font-family: 'Happiness-Sans', sans-serif;
    font-weight: 700; /* Bold */
    font-size: 20pt;
`;

export const BodyWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: auto;
    box-sizing: border-box;
    margin-top: 22px;
`;
