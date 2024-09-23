/**
 * WeekPicker 컴포넌트
 *
 * @author 최유경
 * @since 2024.09.03
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.03  	최유경       최초 생성
 * </pre>
 */

import React from 'react';
import { ConfigProvider } from 'antd';
import { colors } from '../../styles/colors';
import { CustomDatePicker, CustomSpace } from './styled';

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
            <CustomSpace direction="vertical" width={width}>
                <CustomDatePicker onChange={handleWeekChange} picker="week" width={width} placement="bottomRight" />
            </CustomSpace>
        </ConfigProvider>
    );
};

export default WeekPicker;
