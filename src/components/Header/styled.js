import styled from 'styled-components';
import { colors } from '../../styles/colors';
import '../../styles/font.css';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10vh;
    padding: 22px;
    box-sizing: border-box;
    font-family: 'Happiness-Sans', sans-serif;
    font-weight: 700; /* Bold */
    background-color: ${colors.side_bar};
`;

export const LogoImage = styled.img`
    width: 50px;
    height: auto;
`;

export const LeftWrapper = styled.div`
    display: flex;
    // margin: 10px;
    gap: 22px;
    color: ${colors.white};
    align-items: center;
    font-family: 'Happiness-Sans', sans-serif;
    font-weight: 700; /* Bold */
    // background-color: ${colors.white};
`;

export const RightWrapper = styled.div`
    display: flex;
    // width: 100px;
    margin: 10px;
    gap: 10px;
    color: ${colors.white};
    align-items: center;
    justify-context: center;
    font-family: 'Happiness-Sans', sans-serif;
    font-weight: 700; /* Bold */
`;

export const StyledLink = styled(Link)`
    text-decoration: none; /* 기본 밑줄 제거 */
    color: inherit; /* 상위 요소의 색상 상속 */
    font-size: 12px;
    font-family: 'Happiness-Sans', sans-serif;
    font-weight: 700; /* Bold */
    &:hover {
        color: inherit; /* hover 상태에서 색상 변경 없음 */
        text-decoration: none; /* hover 상태에서도 밑줄 없음 */
    }
`;
