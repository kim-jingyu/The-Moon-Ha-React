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

const daysOfWeek = ['월', '화', '수', '목', '금', '토', '일'];
const target = ['성인', '엄마랑 아이랑', '유아/어린이', '패밀리'];

const LessonRegister = () => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [selectedBranch, setSelectedBranch] = useState(null);
    const [category, setCategory] = useState([]);
    const [teacherName, setTeacherName] = useState('');
    const [isRealTime, setIsRealTime] = useState(false);
    const [lessonName, setLessonName] = useState('');
    const [place, setPlace] = useState('');
    const [selectedWeekDay, setSelectedWeekDay] = useState('');
    const [selectedTarget, setSelectedTarget] = useState('');
    const [lessonFee, setLessonFee] = useState(0);
    const [curriculum, setCurriculumName] = React.useState([]);
    const [selectedDays, setSelectedDays] = React.useState([]);

    const handleCheckboxChange = (day) => {
        setSelectedDays((prevSelectedDays) =>
            prevSelectedDays.includes(day) ? prevSelectedDays.filter((d) => d !== day) : [...prevSelectedDays, day],
        );
    };

    const handleRadioTargetChange = (event) => {
        setSelectedTarget(event.target.value);
    };

    const handleRadioWeekDayChange = (event) => {
        setSelectedWeekDay(event.target.value);
    };

    const handleSubmit = () => {
        if (!isDisabled) {
            // 서버로 데이터를 전송하는 로직을 여기에 작성
            console.log('Form submitted');
        }
    };

    useEffect(() => {
        // selectedBranch 값에 따라 dropdownGroups를 업데이트
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
                        <Dropdown title="카테고리명" group={category} onSelect={setCategory} />
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
                        <DatePicker />
                    </RowItem>
                    <RowItem>
                        <HintTitle>수업 시간</HintTitle>
                        <TimePicker />
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
                            value={teacherName}
                            onChange={(e) => setTeacherName(e.target.value)}
                        />
                    </RowItem>
                    <RowItem>
                        <HintTitle>준비물</HintTitle>
                        <InputField
                            type="text"
                            width="200px"
                            height="90px"
                            placeholder="준비물"
                            value={teacherName}
                            onChange={(e) => setTeacherName(e.target.value)}
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
