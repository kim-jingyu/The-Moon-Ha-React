import React from 'react';
import { ConfigProvider, DatePicker, Space } from 'antd';
import { colors } from '../../styles/colors';

const WeekPicker = ({ onChange, width }) => {
    const handleWeekChange = (week, weekString) => {
        if (week) {
            const startOfWeek = week.startOf('week');
            const endOfWeek = week.endOf('week');
            const startOfWeekDate = startOfWeek.format('YYYY-MM-DD');
            const endOfWeekDate = endOfWeek.format('YYYY-MM-DD');

            onChange(startOfWeekDate, endOfWeekDate);
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
            <Space direction="vertical">
                <DatePicker onChange={handleWeekChange} picker="week" />
            </Space>
        </ConfigProvider>
    );
};

export default WeekPicker;
