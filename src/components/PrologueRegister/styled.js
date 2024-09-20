import styled from 'styled-components';
import { colors } from '../../styles/colors';
import '../../styles/font.css';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
`;

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 540px;
    gap: 22px;
    height: auto;
`;

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-bottom: 30px;
    gap: 22px;
`;

export const BodyWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
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

export const ColumnWrapper = styled.div`
    flex-basis: ${(props) => props.width || '100%'};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
`;

export const RowItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
`;

export const RowNoCenterItem = styled.div`
    width: auto;
    display: flex;
    flex-direction: row;
`;

export const ModalP = styled.div`
    font-family: 'Happiness-Sans', sans-serif;
    font-weight: 800; /* Bold */
    font-size: 12px;
    width: 80px;
    align-items: center;
    color: ${colors.black};
`;

export const WrapperTitle = styled.div`
    font-family: 'Happiness-Sans', sans-serif;
    font-weight: 800; /* Bold */
    font-size: 18px;
    width: auto;
    align-items: center;
    color: ${colors.black};
`;

export const HintTitle = styled.p`
    font-family: 'Happiness-Sans', sans-serif;
    font-weight: 800; /* Bold */
    font-size: 12px;
    width: 50px;
    align-items: center;
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
