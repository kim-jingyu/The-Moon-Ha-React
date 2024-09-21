import styled from 'styled-components';
import { colors } from '../styles/colors';

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const Center = styled.div`
    display: flex;
    flex: 1;
    margin-top: 60px;
    margin-left: 240px;
    width: calc(100% - 240px);
    height: calc(100vh - 60px);
    left: 240px;
    overflow-y: auto;
    background-color: ${colors.bg_green};
`;

export const Content = styled.div`
    flex: 1;
    overflow-y: auto;
    width: calc(100% - 240px);
    padding: 20px;
    box-sizing: border-box;
`;
