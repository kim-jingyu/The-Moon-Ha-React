import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { Image } from 'antd';

export const ImageWrapper = styled(Image)`
    position: relative;
    border-radius: 10px;
    width: ${(props) => props.width || '328px'};
    // margin: 20px 0 20px;
    aspect-ratio: 16 / 9;
    object-fit: cover;
`;
