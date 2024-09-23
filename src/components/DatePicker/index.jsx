/**
 * DatePicker 컴포넌트
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

import React, { useEffect, useState } from 'react';
import { ConfigProvider, Space } from 'antd';
import { StyledRangePicker } from './styled';
import { colors } from '../../styles/colors';

const DatePicker = ({ onChange, width, value, disabled = false, placement = 'bottomRight' }) => {
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
                <StyledRangePicker
                    onChange={handleDateChange}
                    value={dates}
                    format="YYYY-MM-DD"
                    disabled={disabled}
                    placement={placement}
                />
            </Space>
        </ConfigProvider>
    );
};
export default DatePicker;
