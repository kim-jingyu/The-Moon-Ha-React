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
    flex-direction: column;
    // justify-content: space-between;
    gap: 22px;
    flex: 1;
    // background-color: ${colors.drak_gray};
`;

export const HeadWrapper = styled.div`
    display: flex;
    position: sticky
    flex-direction: row;
    gap: 22px;
    top: 0;
    z-index: 100; 
    // background-color: ${colors.main_green};
`;

export const BodyWrapper = styled.div`
    display: flex;
    // width: 100%;
    // overflow-y: auto;
    // background-color: ${colors.drak_gray};
`;

export const VideoGrid = styled.div`
    // background-color: ${colors.main_green};
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    padding: 22px;
    gap: 22px;
    height: auto;
    box-sizing: border-box;
    font-family: 'Happiness-Sans', sans-serif;
    font-weight: 400; /* Bold */
    border-radius: 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    background-color: ${colors.white};
`;

export const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
    height: auto;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const ContentItem = styled.div`
    display: flex;
    font-family: 'Happiness-Sans', sans-serif;
    font-weight: 400; /* Bold */
    font-size: ${(props) => props.size || '15px'};
    color: ${(props) => props.color || colors.black};
`;
