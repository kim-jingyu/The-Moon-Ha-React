import styled, { css } from 'styled-components';
import '../../styles/font.css';
import { colors } from '../../styles/colors';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

export const StyledRangePicker = styled(RangePicker)`
    height: 35px;
    .ant-picker-input {
        border-color: ${colors.gray};
        input {
            width: 130px;
            font-size: 12px;
            border-radius: 10px;
            padding: 8px;
            box-sizing: border-box;
        }
    }

    .ant-picker-active-bar {
        background: ${colors.main_green}; /* Custom color for the active bar */
    }

    .ant-picker-range-separator {
        color: ${colors.gray};
    }

    &:hover {
        border-color: ${colors.gray}; /* Custom border color on hover */
    }
`;
