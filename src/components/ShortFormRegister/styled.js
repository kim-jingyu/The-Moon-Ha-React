import styled from 'styled-components';
import { colors } from '../../styles/colors';
import '../../styles/font.css';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    padding: 22px;
    gap: 22px;
    box-sizing: border-box;
    font-family: 'Happiness-Sans', sans-serif;
    background-color: ${colors.main_green};
`;

export const BodyWrapper = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    align-items: center;
`;

export const ContentWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-bottom: 40px;
`;

export const RowItem = styled.div`
    display: flex;
    gap: 15px;
    width: 100%;
    align-items: center;
    flex-direction: row;
`;

export const ContentItem = styled.div`
    display: flex;
    gap: 15px;
    width: 100%;
    flex-direction: column;
    margin-bottom: 22px;
    padding: 22px;
    height: auto;
    align-item: center;
    justify-content: center;
    background-color: ${colors.white};
    box-sizing: border-box;
    font-family: 'Happiness-Sans', sans-serif;
    font-weight: 400; /* Bold */
    border-radius: 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const HintTitle = styled.p`
    white-space: nowrap;
    box-sizing: border-box;
    font-family: 'Happiness-Sans', sans-serif;
    font-weight: 800; /* Bold */
    font-size: 15px;
    color: ${colors.black};
`;

export const InputField = styled.input`
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || '35px'};
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid ${colors.gray};
    border-radius: 5px;
    font-size: 12px;
    font-family: 'Happiness-Sans', sans-serif;
    font-weight: 400; /* Bold */
`;
