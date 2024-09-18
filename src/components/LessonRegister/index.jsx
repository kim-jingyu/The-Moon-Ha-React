import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Image } from 'antd';
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
    UploadWrapper,
    UploadItem,
    TextAreaField,
} from './styled';
import { StyledButton } from '../Button/styled';
import TimePicker from '../TimePicker';
import DatePicker from '../DatePicker';
import { DropdownWithGroup, branchItem } from '../DropdownWithGroup';
import { category_center, category_ch1985, Dropdown } from '../Dropdown';
import { LessonRegisterAPI } from '../../apis/Lesson';
import FileUpload from '../Upload';
import dayjs from 'dayjs';

const daysOfWeek = ['월', '화', '수', '목', '금', '토', '일'];
const target = ['성인', '엄마랑 아이랑', '유아/어린이', '패밀리'];

const LessonRegister = () => {
    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(true);
    const [selectedBranch, setSelectedBranch] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [category, setCategory] = useState([]);
    const [categoryDropDown, setCategoryDropDown] = useState('카테고리명');
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
    const [thumbnailFile, setThumbnailFile] = useState(null);
    const [videoFile, setVideoFile] = useState(null);

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

    const handleThumbnailFileChange = (file) => {
        console.log('Thumbnail file:', file);
        setThumbnailFile(file);
    };

    const handleVideoFileChange = (file) => {
        console.log('Video file:', file);
        setVideoFile(file);
    };

    const handleSubmit = async () => {
        console.log('handleSubmit : ', target.indexOf(selectedTarget));

        if (!isDisabled) {
            const startDate = dayjs(selectedDateRange[0]);
            const endDate = dayjs(selectedDateRange[1]);

            const diffInDays = endDate.diff(startDate, 'day');
            const weeks = Math.floor(diffInDays / 7);
            console.log('weeks : ', weeks);

            // 서버로 데이터 전송
            const lessonRegister = {
                branchId: selectedBranch?.index || null,
                categoryId: selectedCategory?.index || null,
                memberId: 18,
                title: lessonName,
                startDate: selectedDateRange ? selectedDateRange[0].format('YYYY-MM-DD') : null,
                endDate: selectedDateRange ? selectedDateRange[1].format('YYYY-MM-DD') : null,
                startTime: selectedTimeRange ? selectedTimeRange[0].format('HH:mm') : null,
                endTime: selectedTimeRange ? selectedTimeRange[1].format('HH:mm') : null,
                summary: summary,
                cnt: weeks,
                cost: lessonFee,
                curriculum: curriculum,
                supply: supply,
                place: place,
                day: selectedWeekDay,
                target: target.indexOf(selectedTarget) + 1,
                onlineCost: isRealTime ? lessonFee * 0.5 : 0,
            };

            try {
                // API 호출
                console.info('lessonRegister : {}', lessonRegister);
                console.log('thumbnailFile : {}', thumbnailFile);
                console.log('videoFile : {}', videoFile);
                const response = await LessonRegisterAPI(lessonRegister, thumbnailFile, videoFile);
                console.log('응답 : {}', response);
                if (response.status === 200) {
                    console.log('Success:', response.data);
                    navigate('/lesson');
                } else {
                    console.error('Server Error:', response.status, response.statusText);
                }
            } catch (error) {
                if (error.response) {
                    console.error('서버 응답 에러 데이터:', error.response.data);
                    console.error('서버 응답 상태:', error.response.status);
                } else {
                    console.error('요청 에러:', error.message);
                }
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
            summary !== '' &&
            selectedDateRange !== null &&
            selectedTimeRange !== null &&
            thumbnailFile !== null &&
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
        summary,
        supply,
        selectedDateRange,
        selectedTimeRange,
        thumbnailFile,
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

                setCategoryDropDown('카테고리명'); // 제목 초기화
                setSelectedCategory(null); // 선택된 강좌 초기화

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
                        <DropdownWithGroup
                            title="지점명"
                            groups={branchItem}
                            onSelect={setSelectedBranch}
                            selectedItem={selectedBranch}
                            setSelectedItem={setSelectedBranch}
                        />
                    </RowItem>
                    <RowItem>
                        {/* 강사명 입력 필드 */}
                        <HintTitle>강사명</HintTitle>
                        <InputField
                            type="text"
                            width="240px"
                            // placeholder="강사명"
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
                            width="430px"
                            value={lessonName}
                            onChange={(e) => setLessonName(e.target.value)}
                        />
                    </RowItem>
                    <RowItem>
                        <HintTitle>카테고리</HintTitle>
                        <Dropdown
                            title={categoryDropDown}
                            group={category}
                            onSelect={setSelectedCategory}
                            selectedItem={selectedCategory}
                            setSelectedItem={setSelectedCategory}
                        />
                    </RowItem>
                </RowWrapper>
                <RowWrapper>
                    <RowItem>
                        <HintTitle>장소</HintTitle>
                        <InputField
                            type="text"
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
                            // placeholder="수강료"
                            width="220px"
                            value={lessonFee}
                            onChange={(e) => setLessonFee(e.target.value)}
                        />
                    </RowItem>
                </RowWrapper>
            </Wrapper>
            <Wrapper>
                <RowWrapper>
                    <RowItem>
                        <HintTitle>개요</HintTitle>
                        <InputField
                            type="text"
                            width="450px"
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                        />
                    </RowItem>
                    <RowItem>
                        <HintTitle>준비물</HintTitle>
                        <InputField
                            type="text"
                            width="220px"
                            value={supply}
                            onChange={(e) => setSupply(e.target.value)}
                        />
                    </RowItem>
                </RowWrapper>
                <RowWrapper>
                    <RowItem>
                        <HintTitle>커리큘럼</HintTitle>
                        <TextAreaField
                            width="745px"
                            height="150px"
                            value={curriculum}
                            onChange={(e) => setCurriculumName(e.target.value)}
                        />
                    </RowItem>
                </RowWrapper>
            </Wrapper>

            <Wrapper>
                <UploadWrapper>
                    <UploadItem>
                        <HintTitle>썸네일 사진</HintTitle>
                        <FileUpload onChange={handleThumbnailFileChange} id="image" />
                    </UploadItem>
                    <UploadItem>
                        <HintTitle>프리뷰 영상</HintTitle>
                        <FileUpload onChange={handleVideoFileChange} id="video" />
                    </UploadItem>
                </UploadWrapper>
            </Wrapper>

            <StyledButton variant="registerBtn" onClick={handleSubmit} disabled={isDisabled}>
                예약 등록하기
            </StyledButton>
        </Container>
    );
};

export default LessonRegister;
