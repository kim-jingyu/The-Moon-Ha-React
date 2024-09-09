import React, { useEffect, useState } from 'react';
import { ConfigProvider, Space } from 'antd';
import { StyledRangePicker } from './styled';
import { colors } from '../../styles/colors';

const DatePicker = ({ onChange, width, value, disabled = false }) => {
    const [dates, setDates] = useState(value || [null, null]);

    useEffect(() => {
        setDates(value || [null, null]);
    }, [value]);

    const handleDateChange = (dates, dateStrings) => {
        setDates(dates);
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
                <StyledRangePicker onChange={handleDateChange} value={dates} format="YYYY-MM-DD" disabled={disabled} />
            </Space>
        </ConfigProvider>
    );
};
export default DatePicker;
