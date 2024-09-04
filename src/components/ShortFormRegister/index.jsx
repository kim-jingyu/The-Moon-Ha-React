import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, HintTitle, InputField, RowItem, BodyWrapper, ContentWrapper, ContentItem } from './styled';
import { StyledButton } from '../Button/styled';
import { DropdownWithGroup, branchItem } from '../DropdownWithGroup';
import { LessonRegisterAPI } from '../../apis/Lesson';
import FileUpload from '../Upload';
import WeekPicker from '../WeekPicker';

const ShortFormRegister = () => {
    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(true);
    const [selectedBranch, setSelectedBranch] = useState(null);
    // // const [category, setCategory] = useState([]);
    const [startDate, setStartDate] = useState([]);
    const [expireDate, setExpireDate] = useState([]);
    const [teacherName, setTeacherName] = useState('');
    const [lessonName, setLessonName] = useState('');
    const [videoFile, setVideoFile] = useState(null);

    const handleWeekChange = (startDate, endDate) => {
        setStartDate(startDate);
        setExpireDate(endDate);
        console.log('startDate:', startDate);
        console.log('endDate:', endDate);
    };

    const handleShortFormFileChange = (file) => {
        console.log('Video file:', file);
        setVideoFile(file);
    };

    const handleSubmit = async () => {
        if (!isDisabled) {
            // 서버로 데이터 전송
            const lessonRegister = {
                lessonId: 56,
                name: teacherName,
                startDate: startDate ? startDate.format('YYYY-MM-DDTHH:mm:ss') : null,
                expireDate: expireDate ? expireDate.format('YYYY-MM-DDTHH:mm:ss') : null,
            };
            console.log('lessonRegister.startDate : ', lessonRegister.startDate);
            console.log('lessonRegister.expireDate : ', lessonRegister.expireDate);
            try {
                // API 호출
                console.log('videoFile : {}', videoFile);
                const response = await LessonRegisterAPI(lessonRegister, videoFile);
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
            teacherName !== '' &&
            lessonName !== '' &&
            startDate !== null &&
            expireDate !== null &&
            videoFile !== null
        ) {
            console.log('활성화!!~');
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [selectedBranch, teacherName, lessonName, startDate, expireDate, videoFile]);

    return (
        <Container>
            <FileUpload onChange={handleShortFormFileChange} id="video" width="280px" height="496px" />
            <BodyWrapper>
                <ContentWrapper>
                    <HintTitle>강좌 선택</HintTitle>
                    <ContentItem>
                        <RowItem>
                            <DropdownWithGroup title="지점 선택" groups={branchItem} onSelect={setSelectedBranch} />
                            <InputField
                                type="text"
                                width="240px"
                                value={teacherName}
                                onChange={(e) => setTeacherName(e.target.value)}
                            />
                        </RowItem>
                        <RowItem>
                            <InputField
                                type="text"
                                width="495px"
                                value={lessonName}
                                onChange={(e) => setLessonName(e.target.value)}
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
                </ContentWrapper>
                <StyledButton variant="shortFormRegisterBtn" onClick={handleSubmit} disabled={isDisabled}>
                    예약하기
                </StyledButton>
            </BodyWrapper>
        </Container>
    );
};

export default ShortFormRegister;
