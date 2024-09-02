import styled from 'styled-components';

import { colors } from '../../styles/colors';
import '../../styles/font.css';

export const Container = styled.div`
    width: 90vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.bg_green};
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
    // background-color: ${colors.drak_gray};
`;
