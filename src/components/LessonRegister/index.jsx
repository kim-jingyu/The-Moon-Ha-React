import React, { useState, useEffect } from 'react';
import {
    Container,
    HintTitle,
    InputField,
    RowWrapper,
    Wrapper,
    CheckBoxContainer,
    CheckBox,
    RowItem,
    RadioContainer,
    RadioInput,
    RadioLabel,
} from './styled';
import { StyledButton } from '../Button/styled';
import TimePicker from '../TimePicker';
import DatePicker from '../DatePicker';
import { DropdownWithGroup, branchItem } from '../DropdownWithGroup';
import { category_center, category_ch1985, Dropdown } from '../Dropdown';
import { LessonRegisterAPI } from '../../apis/Lesson';

const daysOfWeek = ['월', '화', '수', '목', '금', '토', '일'];
const target = ['성인', '엄마랑 아이랑', '유아/어린이', '패밀리'];

const LessonRegister = () => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [selectedBranch, setSelectedBranch] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [category, setCategory] = useState([]);
    const [teacherName, setTeacherName] = useState('');
    const [isRealTime, setIsRealTime] = useState(false);
    const [lessonName, setLessonName] = useState('');
    const [place, setPlace] = useState('');
    const [selectedWeekDay, setSelectedWeekDay] = useState('');
    const [selectedTarget, setSelectedTarget] = useState('');
    const [lessonFee, setLessonFee] = useState(0);
    const [summary, setSummary] = useState('');
    const [supply, setSupply] = useState('');
    const [curriculum, setCurriculumName] = React.useState([]);
    const [selectedDateRange, setSelectedDateRange] = useState([null, null]);
    const [selectedTimeRange, setSelectedTimeRange] = useState(null);

    const handleRadioTargetChange = (event) => {
        setSelectedTarget(event.target.value);
    };

    const handleDateChange = (dates, dateStrings) => {
        setSelectedDateRange(dates);
        console.log('Selected Dates:', dates);
        console.log('Selected Date Strings:', dateStrings);
    };

    const handleTimeChange = (times, timeStrings) => {
        setSelectedTimeRange(times);
        console.log('Selected Time : {} ', times);
        console.log('Selected Time : {} ', timeStrings);
    };

    const handleRadioWeekDayChange = (event) => {
        setSelectedWeekDay(event.target.value);
    };

    const handleSubmit = async () => {
        if (!isDisabled) {
            // 서버로 데이터 전송
            const lessonRegister = {
                branchId: selectedBranch?.index || null,
                categoryId: 1,
                memberId: 2,
                title: lessonName,
                startDate: selectedDateRange ? selectedDateRange[0].format('YYYY-MM-DD') : null,
                endDate: selectedDateRange ? selectedDateRange[1].format('YYYY-MM-DD') : null,
                startTime: selectedTimeRange ? selectedTimeRange[0].format('HH:mm') : null,
                endTime: selectedTimeRange ? selectedTimeRange[1].format('HH:mm') : null,
                summary: summary,
                cnt: 0,
                cost: lessonFee,
                curriculum: curriculum,
                supply: supply,
                place: place,
                day: selectedWeekDay,
                target: 1,
                onlineCost: isRealTime ? lessonFee * 0.8 : 0,
            };

            try {
                // API 호출
                console.info('lessonRegister : {}', lessonRegister);
                const response = await LessonRegisterAPI(lessonRegister);
                console.log('응답 : {}', response);
                if (response.status === 200) {
                    console.log('Success:', response.data);
                } else {
                    console.error('Server Error:', response.status, response.statusText);
                }
            } catch (error) {
                console.error('Error submitting form:', error.response ? error.response.data : error.messageror);
            }
        }
    };

    useEffect(() => {
        // 모든 상태가 null이 아니고 빈 문자열이 아닌지 확인
        if (
            selectedBranch !== null &&
            selectedCategory !== null &&
            teacherName !== '' &&
            lessonName !== '' &&
            place !== '' &&
            selectedWeekDay !== '' &&
            selectedTarget !== '' &&
            lessonFee !== 0 &&
            summary !== '' &&
            selectedDateRange !== null &&
            selectedTimeRange !== null &&
            curriculum.length > 0 // 배열의 길이가 0이 아닌지 확인
        ) {
            console.log('활성화!!~');
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [
        selectedBranch,
        selectedCategory,
        teacherName,
        lessonName,
        place,
        selectedWeekDay,
        selectedTarget,
        lessonFee,
        summary,
        supply,
        selectedDateRange,
        selectedTimeRange,
        curriculum,
    ]);

    useEffect(() => {
        // selectedBranch 값에 따라 카테고리 dropdown 업데이트
        if (selectedBranch) {
            const foundBranch = branchItem.find((branch) =>
                branch.items.some((item) => item.name === selectedBranch.name),
            );
            const foundItem = foundBranch ? foundBranch.label : null;

            if (foundItem) {
                const foundLabel = foundBranch ? foundBranch.label : null;

                if (foundLabel === 'CH 1985') {
                    setCategory(category_ch1985);
                } else if (foundLabel === '문화센터') {
                    setCategory(category_center);
                } else {
                    setCategory([]);
                }
            } else {
                setCategory([]);
            }
        } else {
            setCategory([]);
        }
    }, [selectedBranch]);

    return (
        <Container>
            <Wrapper>
                <RowWrapper>
                    <RowItem>
                        <HintTitle>지점 선택</HintTitle>
                        {/* 지점 선택 드롭다운 */}
                        <DropdownWithGroup title="지점명" groups={branchItem} onSelect={setSelectedBranch} />
                    </RowItem>
                    <RowItem>
                        {/* 강사명 입력 필드 */}
                        <HintTitle>강사명</HintTitle>
                        <InputField
                            type="text"
                            placeholder="강사명"
                            value={teacherName}
                            onChange={(e) => setTeacherName(e.target.value)}
                        />
                    </RowItem>
                    <RowItem>
                        {/* 실시간 여부 체크박스 */}
                        <CheckBoxContainer>
                            <CheckBox checked={isRealTime} onChange={(e) => setIsRealTime(e.target.checked)} />
                            <HintTitle>실시간 여부</HintTitle>
                        </CheckBoxContainer>
                    </RowItem>
                </RowWrapper>
                <RowWrapper>
                    <RowItem>
                        <HintTitle>강좌명</HintTitle>
                        <InputField
                            type="text"
                            placeholder="강좌명"
                            width="430px"
                            value={lessonName}
                            onChange={(e) => setLessonName(e.target.value)}
                        />
                    </RowItem>
                    <RowItem>
                        <HintTitle>카테고리</HintTitle>
                        <Dropdown title="카테고리명" group={category} onSelect={setSelectedCategory} />
                    </RowItem>
                </RowWrapper>
                <RowWrapper>
                    <RowItem>
                        <HintTitle>장소</HintTitle>
                        <InputField
                            type="text"
                            placeholder="장소"
                            width="300px"
                            value={place}
                            onChange={(e) => setPlace(e.target.value)}
                        />
                    </RowItem>
                    <RowItem>
                        <HintTitle>수강 대상</HintTitle>
                        <RadioContainer>
                            {target.map((item) => (
                                <RadioLabel key={item}>
                                    <RadioInput
                                        type="radio"
                                        name="target"
                                        value={item}
                                        checked={selectedTarget === item}
                                        onChange={handleRadioTargetChange}
                                    />
                                    {item}
                                </RadioLabel>
                            ))}
                        </RadioContainer>
                    </RowItem>
                </RowWrapper>
            </Wrapper>

            <Wrapper>
                <RowWrapper>
                    <RowItem>
                        <HintTitle>기간</HintTitle>
                        <DatePicker onChange={handleDateChange} />
                    </RowItem>
                    <RowItem>
                        <HintTitle>수업 시간</HintTitle>
                        <TimePicker onChange={handleTimeChange} />
                    </RowItem>
                </RowWrapper>

                <RowWrapper>
                    <RowItem>
                        <HintTitle>요일 선택</HintTitle>
                        <RadioContainer>
                            {daysOfWeek.map((day) => (
                                <RadioLabel key={day}>
                                    <RadioInput
                                        type="radio"
                                        name="weekday"
                                        value={day}
                                        checked={selectedWeekDay === day}
                                        onChange={handleRadioWeekDayChange}
                                    />
                                    {day}
                                </RadioLabel>
                            ))}
                        </RadioContainer>
                    </RowItem>
                    <RowItem>
                        <HintTitle>수강료</HintTitle>
                        <InputField
                            type="text"
                            placeholder="수강료"
                            width="200px"
                            value={lessonFee}
                            onChange={(e) => setLessonFee(e.target.value)}
                        />
                    </RowItem>
                </RowWrapper>
                <RowWrapper>
                    <RowItem>
                        <HintTitle>개요</HintTitle>
                        <InputField
                            type="text"
                            width="450px"
                            height="90px"
                            placeholder="개요"
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                        />
                    </RowItem>
                    <RowItem>
                        <HintTitle>준비물</HintTitle>
                        <InputField
                            type="text"
                            width="200px"
                            height="90px"
                            placeholder="준비물"
                            value={supply}
                            onChange={(e) => setSupply(e.target.value)}
                        />
                    </RowItem>
                </RowWrapper>
                <RowWrapper>
                    <RowItem>
                        <HintTitle>커리큘럼</HintTitle>
                        <InputField
                            type="text"
                            placeholder="커리큘럼"
                            width="745px"
                            height="90px"
                            value={curriculum}
                            onChange={(e) => setCurriculumName(e.target.value)}
                        />
                    </RowItem>
                </RowWrapper>
            </Wrapper>

            <Wrapper>
                <RowWrapper>
                    <HintTitle>썸네일 사진</HintTitle>
                </RowWrapper>
            </Wrapper>

            <StyledButton variant="lessonRegisterBtn" onClick={handleSubmit} disabled={isDisabled}>
                예약 등록하기
            </StyledButton>
        </Container>
    );
};

export default LessonRegister;
