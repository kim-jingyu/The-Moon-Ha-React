import React, { useState } from 'react';
import { format } from 'date-fns';
import arrowLeft from '../../assets/images/arrowLeft.svg';
import arrowRight from '../../assets/images/arrowRight.svg';
import { Contianer, DateItem, Wrapper } from './styled';
import Button from '../Button';

const CalendarHeader = ({ currentMonth, prevMonth, nextMonth }) => {
    return (
        <Contianer>
            <Button variant="calendarBtn" icon={arrowLeft} onClick={prevMonth} />
            <DateItem>{format(currentMonth, 'yyyy년')}</DateItem>
            <DateItem>{format(currentMonth, 'MM월')}</DateItem>
            <Button variant="calendarBtn" icon={arrowRight} onClick={nextMonth} />
        </Contianer>
    );
};
export default CalendarHeader;
