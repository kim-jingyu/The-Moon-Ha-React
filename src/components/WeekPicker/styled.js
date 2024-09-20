import { DatePicker, Space } from 'antd';
import { colors } from '../../styles/colors';
import styled from 'styled-components';

export const CustomSpace = styled(Space)`
    width: ${(props) => props.width || '50%'};
    background-color: ${colors.drak_gray};
`;

export const CustomDatePicker = styled(DatePicker)`
    width: ${(props) => props.width || '100%'};
`;
