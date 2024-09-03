import React from 'react';
import { ConfigProvider, Space } from 'antd';
import { StyledRangePicker } from './styled';
import { colors } from '../../styles/colors';

const DatePicker = ({ onChange }) => {
    const handleDateChange = (dates, dateStrings) => {
        if (onChange) {
            onChange(dates, dateStrings);
        }
    };

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
                <StyledRangePicker onChange={handleDateChange} />
            </Space>
        </ConfigProvider>
    );
};
export default DatePicker;
