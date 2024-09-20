import styled, { css } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import '../../styles/font.css';
import { colors } from '../../styles/colors';
import { TimePicker } from 'antd';
const { RangePicker } = TimePicker;

export const StyledRangePicker = styled(RangePicker)`
    .ant-picker-input {
        border-color: ${colors.gray};
        input {
            height: 30px;
            width: ${(props) => props.width || '100%'};
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
