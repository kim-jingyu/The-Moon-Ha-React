import styled from 'styled-components';
import { colors } from '../../styles/colors';
import '../../styles/font.css';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    // width: 900px;
    height: auto;
    margin-bottom: 22px;
    padding: 22px;
    box-sizing: border-box;
    font-family: 'Happiness-Sans', sans-serif;
    background-color: ${colors.white};
    font-weight: 400; /* Bold */
    border-radius: 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const BodyWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    margin-left: 22px;
    // background-color: ${colors.main_green};
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    // background-color: ${colors.main_green};
`;

export const RowItem = styled.div`
    display: flex;
    gap: 15px;
    width: auto;
    align-items: center;
    flex-direction: row;
`;

export const ContentItem = styled.div`
    // background-color: ${colors.drak_gray};
    display: flex;
    gap: 15px;
    width: 100%;
    flex-direction: column;
    margin-bottom: 22px;
    padding: 22px;
    height: auto;
    box-sizing: border-box;
    font-family: 'Happiness-Sans', sans-serif;
    font-weight: 400; /* Bold */
    border-radius: 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const HintTitle = styled.p`
    font-family: 'Happiness-Sans', sans-serif;
    font-weight: 800; /* Bold */
    font-size: 12px;
    width: auto;
    color: ${colors.black};
`;

export const InputField = styled.input`
    width: ${(props) => props.width || '200px'};
    height: ${(props) => props.height || '35px'};
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid ${colors.gray};
    border-radius: 5px;
    font-size: 12px;
    font-family: 'Happiness-Sans', sans-serif;
    font-weight: 400; /* Bold */
`;
