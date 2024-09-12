import styled, { css } from 'styled-components';
import '../../styles/font.css';
import { colors } from '../../styles/colors';

export const Contianer = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    gap: 10px;
`;

export const DateItem = styled.div`
    display: flex;
    width: auto;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: 'Happiness-Sans', sans-serif;
    font-weight: 700;
    font-size: 15px;
`;
