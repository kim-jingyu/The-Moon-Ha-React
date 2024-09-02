import styled from 'styled-components';
import { colors } from '../../styles/colors';
import '../../styles/font.css';

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 10vh;
    padding-left: 20px;
    font-family: 'Happiness-Sans', sans-serif;
    font-weight: 700; /* Bold */
`;

export const LogoImage = styled.img`
    width: 50px;
    height: auto;
`;

export const LeftWrapper = styled.div`
    display: flex;
    margin: 10px;
    align-items: center;
    font-family: 'Happiness-Sans', sans-serif;
    font-weight: 700; /* Bold */
`;
