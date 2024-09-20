import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, HintTitle, InputField, RowItem, BodyWrapper, ContentWrapper, ContentItem } from './styled';
import { StyledButton } from '../Button/styled';
import { DropdownWithGroup, branchItem } from '../DropdownWithGroup';
import { ShoreFormRegisterAPI } from '../../apis/Lesson';
import FileUpload from '../Upload';
import WeekPicker from '../WeekPicker';
import dayjs from 'dayjs';
import { Dropdown } from '../Dropdown';
import { useRecoilValue } from 'recoil';
import { setUpDataState } from '../../recoil';

const ShortFormRegister = () => {
    const setUpData = useRecoilValue(setUpDataState);
    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(true);
    const [selectedBranch, setSelectedBranch] = useState(null);
    const [lessonDropDown, setLessonDropDown] = useState([]);
    const [startDate, setStartDate] = useState(null);
    const [expireDate, setExpireDate] = useState(null);
    const [shortFormName, setShortFormName] = useState('');
    const [dropDownTitle, setDropDownTitle] = useState('강좌 선택');
    const [lesson, setLesson] = useState(null);
    const [thumbnailFile, setThumbnailFile] = useState(null);
    const [videoFile, setVideoFile] = useState(null);

    const handleWeekChange = (startDateString, endDateString) => {
        const startDateDayjs = dayjs(startDateString);
        const endDateDayjs = dayjs(endDateString);

        // YYYY-MM-DDTHH:mm:ss 형식으로 변환
        const formattedStartDate = startDateDayjs.format('YYYY-MM-DDTHH:mm:ss');
        const formattedEndDate = endDateDayjs.format('YYYY-MM-DDTHH:mm:ss');

        // Date 객체로 변환
        const startDate = new Date(formattedStartDate);
        const endDate = new Date(formattedEndDate);

        // 상태 설정
        setStartDate(startDate);
        setExpireDate(endDate);
        console.log('startDate:', startDate);
        console.log('endDate:', endDate);
    };

    const handleShortFormFileChange = (file) => {
        console.log('Video file:', file);
        setVideoFile(file);
    };

    const handleThumbnailFileChange = (file) => {
        console.log('image file:', file);
        setThumbnailFile(file);
    };

    const handleSubmit = async () => {
        if (!isDisabled) {
            // 서버로 데이터 전송
            console.log('shortFormRegister lesson : ', lesson);
            console.log('shortFormRegister lesson.index : ', lesson.index);
            const shortFormRegister = {
                lessonId: lesson.index,
                name: shortFormName,
                startDate: startDate,
                expireDate: expireDate,
            };

            try {
                // API 호출
                const response = await ShoreFormRegisterAPI(shortFormRegister, thumbnailFile, videoFile);
                console.log('응답 : {}', response);

                if (response.status === 200) {
                    console.log('Success:', response.data);
                    navigate('/shortForm');
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
            shortFormName !== '' &&
            lesson !== '' &&
            startDate !== null &&
            expireDate !== null &&
            dropDownTitle !== null &&
            videoFile !== null &&
            thumbnailFile !== null
        ) {
            console.log('활성화!!~');
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [selectedBranch, shortFormName, lesson, startDate, expireDate, dropDownTitle, videoFile, thumbnailFile]);

    useEffect(() => {
        if (selectedBranch) {
            const foundIndex = selectedBranch ? selectedBranch.index : null;

            if (foundIndex !== null) {
                setDropDownTitle('강좌 선택');
                setLesson(null);
                setLessonDropDown(setUpData?.lessonBranchDTOList?.find((l) => l.label === foundIndex)?.items || []);
            } else {
                setLessonDropDown([]);
            }
        } else {
            setLessonDropDown([]);
        }
    }, [selectedBranch]);

    return (
        <Container>
            <BodyWrapper>
                <ContentItem>
                    <RowItem>
                        <FileUpload
                            onChange={handleThumbnailFileChange}
                            id="image"
                            ratio="9/16"
                            placeholder="썸네일 업로드"
                        />
                        <FileUpload
                            onChange={handleShortFormFileChange}
                            id="video"
                            ratio="9/16"
                            placeholder="영상 업로드"
                        />
                    </RowItem>
                </ContentItem>
            </BodyWrapper>
            <BodyWrapper>
                <ContentWrapper>
                    <HintTitle>강좌 선택</HintTitle>
                    <ContentItem>
                        <RowItem>
                            <DropdownWithGroup
                                title="지점 선택"
                                width="200px"
                                groups={branchItem}
                                onSelect={setSelectedBranch}
                                selectedItem={selectedBranch}
                                setSelectedItem={setSelectedBranch}
                            />
                            <Dropdown
                                title={dropDownTitle}
                                group={lessonDropDown}
                                onSelect={setLesson}
                                selectedItem={lesson}
                                setSelectedItem={setLesson}
                            />
                        </RowItem>
                        <RowItem>
                            <InputField
                                type="text"
                                placeholder="숏폼 제목"
                                value={shortFormName}
                                onChange={(e) => setShortFormName(e.target.value)}
                            />
                        </RowItem>
                    </ContentItem>
                    <HintTitle>날짜 설정</HintTitle>
                    <ContentItem>
                        <RowItem>
                            <HintTitle>기간</HintTitle>
                            <WeekPicker onChange={handleWeekChange} />
                        </RowItem>
                    </ContentItem>
                    <StyledButton variant="registerBtn" onClick={handleSubmit} disabled={isDisabled}>
                        예약하기
                    </StyledButton>
                </ContentWrapper>
            </BodyWrapper>
        </Container>
    );
};

export default ShortFormRegister;
