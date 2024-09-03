import React from 'react';
import { ConfigProvider, Space } from 'antd';
import { StyledRangePicker } from './styled';
import { colors } from '../../styles/colors';

const DatePicker = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: colors.bright_green,
                    colorLink: colors.bright_gray,
                },
            }}
        >
            <Space direction="vertical" size={12}>
                <StyledRangePicker
                    id={{
                        start: 'startInput',
                        end: 'endInput',
                    }}
                    onFocus={(_, info) => {
                        console.log('Focus:', info.range);
                    }}
                    onBlur={(_, info) => {
                        console.log('Blur:', info.range);
                    }}
                />
            </Space>
        </ConfigProvider>
    );
};
export default DatePicker;
