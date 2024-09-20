import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
`;

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    height: auto;
    box-sizing: border-box;
    font-family: 'Happiness-Sans', sans-serif;
    font-weight: 400; /* Bold */
    border-radius: 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    background-color: ${colors.white};
`;
