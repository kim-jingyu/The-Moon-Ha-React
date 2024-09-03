import React from 'react';
import { GlobalStyle, StyledRangePicker } from './styled';
import { ConfigProvider } from 'antd';
import { colors } from '../../styles/colors';

const TimePicker = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: colors.bright_green,
                    colorLink: colors.bright_gray,
                },
            }}
        >
            <StyledRangePicker
                format="HH:mm" // 시:분 형식으로 설정
                use12Hours={false} // 12시간 형식 사용 안 함
                showNow={false} // 현재 시간 버튼 비활성화
                minuteStep={10} // 분 단위 간격 설정
                disabledHours={disabledHours} // 비활성화할 시간 설정
                disabledMinutes={disabledMinutes} // 비활성화할 분 설정
                hideDisabledOptions={true}
            />
        </ConfigProvider>
    );
};
export default TimePicker;

// 9시부터 20시까지 선택 가능하도록 시간 설정
const disabledHours = () => {
    const hours = [];
    for (let i = 0; i < 9; i++) {
        hours.push(i); // 0시부터 8시까지 비활성화
    }
    for (let i = 21; i < 24; i++) {
        hours.push(i); // 21시부터 23시까지 비활성화
    }
    return hours;
};

const disabledMinutes = (hour) => {
    if (hour === 20) {
        return [10, 20, 30, 40, 50]; // 20시 외 모든 분 비활성화
    }
    return []; // 분 단위 제한 없음
};
