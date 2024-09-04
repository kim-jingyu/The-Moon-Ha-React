import styled from 'styled-components';
import { colors } from '../../styles/colors';
import '../../styles/font.css';

export const FileUploadContainer = styled.div`
    display: flex;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    align-items: center;
    justify-content: center;
    box-sizing: board-box;
    border: 1px solid ${colors.gray};
`;

// styled-components로 스타일링
export const ProfileImgLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    height: 100%;
    box-sizing: board-box;
    border-radius: 5px;
    margin-bottom: 10px;
    font-family: 'Happiness-Sans', sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: ${colors.drak_gray};
`;

export const ProfileImgInput = styled.input`
    display: none;
`;

export const PreviewFile = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
