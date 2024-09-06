import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    HintTitle,
    InputField,
    RowItem,
    ContentWrapper,
    Wrapper,
    WrapperTitle,
    BodyWrapperTitle,
    BodyWrapper,
} from './styled';
import { StyledButton } from '../Button/styled';
import DatePicker from '../DatePicker';
import { LessonRegisterAPI } from '../../apis/Lesson';
import FileUpload from '../Upload';

const PrologueRegister = () => {
    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(true);
    const [themeName, setThemeName] = useState('');
    const [description, setDescription] = useState('');
    const [lessonName, setLessonName] = useState('');
    const [selectedDateRange, setSelectedDateRange] = useState([null, null]);
    const [thumbnailFile, setThumbnailFile] = useState(null);
    const [videoFile, setVideoFile] = useState(null);

    const handleDateChange = (dates, dateStrings) => {
        setSelectedDateRange(dates);
        console.log('Selected Dates:', dates);
        console.log('Selected Date Strings:', dateStrings);
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
        if (!isDisabled) {
            // 서버로 데이터 전송
            const lessonRegister = {};

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
        if (lessonName !== '' && selectedDateRange !== null && thumbnailFile !== null && videoFile !== null) {
            console.log('활성화!!~');
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [lessonName, selectedDateRange, thumbnailFile, videoFile]);

    return (
        <Container>
            <Wrapper>
                <BodyWrapperTitle>테마 등록</BodyWrapperTitle>
                <BodyWrapper>
                    <ContentWrapper>
                        <RowItem>
                            <HintTitle>테마명</HintTitle>
                            <InputField
                                type="text"
                                width="580px"
                                value={themeName}
                                onChange={(e) => setThemeName(e.target.value)}
                            />
                        </RowItem>
                        <RowItem>
                            <HintTitle>설명</HintTitle>
                            <InputField
                                type="text"
                                width="580px"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </RowItem>
                    </ContentWrapper>
                    <ContentWrapper>
                        <RowItem>
                            <HintTitle>기간</HintTitle>
                            <DatePicker onChange={handleDateChange} />
                        </RowItem>
                    </ContentWrapper>
                </BodyWrapper>
            </Wrapper>

            <Wrapper>
                <BodyWrapperTitle>프롤로그 등록</BodyWrapperTitle>
                <BodyWrapper></BodyWrapper>
            </Wrapper>

            <StyledButton variant="lessonRegisterBtn" onClick={handleSubmit} disabled={isDisabled}>
                예약 등록하기
            </StyledButton>
        </Container>
    );
};

export default PrologueRegister;
