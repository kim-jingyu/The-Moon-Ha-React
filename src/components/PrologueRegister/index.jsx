import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    HintTitle,
    InputField,
    RowItem,
    ContentWrapper,
    Wrapper,
    BodyWrapperTitle,
    BodyWrapper,
    ModalItem,
    ModalP,
    ModalContainer,
} from './styled';
import DatePicker from '../DatePicker';
import FileUpload from '../Upload';
import CustomModal from '../Modal';
import Button from '../Button';

import plusIcon from '../../assets/images/plusIcon.svg';
import cancelIcon from '../../assets/images/cancelIcon.svg';

const PrologueRegister = () => {
    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(true);
    const [themeName, setThemeName] = useState('');
    const [description, setDescription] = useState('');
    const [lessonName, setLessonName] = useState('');
    const [selectedDateRange, setSelectedDateRange] = useState([null, null]);
    const [thumbnailList, setThumbnailList] = useState([]);
    const [videoList, setVideoList] = useState([]);

    const handleDateChange = (dates, dateStrings) => {
        setSelectedDateRange(dates);
        console.log('Selected Dates:', dates);
        console.log('Selected Date Strings:', dateStrings);
    };

    const handleAddPrologue = (newThumbnail, newVideo) => {
        console.log('handleAddPrologue 썸네일 : ', newThumbnail);
        console.log('handleAddPrologue 비디오 : {}', newVideo);
        setThumbnailList([...thumbnailList, newThumbnail]);
        setVideoList([...videoList, newVideo]);
    };

    // const handleSubmit = async () => {
    //     if (!isDisabled) {
    //         // 서버로 데이터 전송
    //         const lessonRegister = {};

    //         try {
    //             // API 호출
    //             console.info('lessonRegister : {}', lessonRegister);
    //             console.log('thumbnailFile : {}', thumbnailFile);
    //             console.log('videoFile : {}', videoFile);
    //             const response = await LessonRegisterAPI(lessonRegister, thumbnailFile, videoFile);
    //             console.log('응답 : {}', response);
    //             if (response.status === 200) {
    //                 console.log('Success:', response.data);
    //                 navigate('/lesson');
    //             } else {
    //                 console.error('Server Error:', response.status, response.statusText);
    //             }
    //         } catch (error) {
    //             if (error.response) {
    //                 console.error('서버 응답 에러 데이터:', error.response.data);
    //                 console.error('서버 응답 상태:', error.response.status);
    //             } else {
    //                 console.error('요청 에러:', error.message);
    //             }
    //         }
    //     }
    // };

    // useEffect(() => {
    //     // 모든 상태가 null이 아니고 빈 문자열이 아닌지 확인
    //     if (lessonName !== '' && selectedDateRange !== null && thumbnailFile !== null && videoFile !== null) {
    //         console.log('활성화!!~');
    //         setIsDisabled(false);
    //     } else {
    //         setIsDisabled(true);
    //     }
    // }, [lessonName, selectedDateRange, thumbnailFile, videoFile]);

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

            <Wrapper />
            <Wrapper>
                <BodyWrapperTitle>프롤로그 등록</BodyWrapperTitle>
                <BodyWrapper>
                    <div>
                        {videoList.map((video, index) => (
                            <div key={index}>
                                {/* 동영상 미리보기 또는 정보를 렌더링 */}
                                <p>{video.name}</p>
                                {/* 추가 정보 표시 */}
                            </div>
                        ))}
                    </div>
                </BodyWrapper>

                <CustomModal
                    variant="prologuePlusBtn"
                    buttonContent={<img src={plusIcon} alt="open" style={{ width: '15px', height: '15px' }} />}
                    closeIcon={<img src={cancelIcon} alt="close" style={{ width: '15px', height: '15px' }} />}
                >
                    <RegisterModal onUpdate={handleAddPrologue} />
                </CustomModal>
            </Wrapper>

            <Button
                variant="lessonRegisterBtn"
                // onClick={handleSubmit}
                disabled={isDisabled}
            >
                예약 등록하기
            </Button>
        </Container>
    );
};

export default PrologueRegister;

const RegisterModal = ({ setOpen, setConfirmLoading, confirmLoading, onUpdate }) => {
    const [prologueName, setPrologueName] = useState('');
    const [thumbnailFile, setThumbnailFile] = useState(null);
    const [videoFile, setVideoFile] = useState(null);
    const [isDisabled, setIsDisabled] = useState(true);

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            if (onUpdate) {
                onUpdate(thumbnailFile, videoFile);
            }
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleThumbnailFileChange = (file) => {
        console.log('Thumbnail file:', file);
        setThumbnailFile(file);
    };

    const handleVideoFileChange = (file) => {
        console.log('Video file:', file);
        setVideoFile(file);
    };

    useEffect(() => {
        if (prologueName !== '' && thumbnailFile !== null && videoFile !== null) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [prologueName, thumbnailFile, videoFile]);

    return (
        <ModalContainer>
            <Wrapper>
                <RowItem>
                    <ModalP>영상 이름</ModalP>
                    <InputField
                        type="text"
                        width="400px"
                        value={prologueName}
                        onChange={(e) => setPrologueName(e.target.value)}
                    />
                </RowItem>
            </Wrapper>
            <Wrapper>
                {/* <ModalP>썸네일 사진</ModalP> */}
                <ModalItem>
                    <ModalP>썸네일 사진</ModalP>
                    <FileUpload onChange={handleThumbnailFileChange} id="image" width="400px" height="226px" />
                </ModalItem>
            </Wrapper>
            <Wrapper>
                <ModalItem>
                    <ModalP>프리뷰 영상</ModalP>
                    <FileUpload onChange={handleVideoFileChange} id="video" width="400px" height="225px" />
                </ModalItem>
            </Wrapper>
            <Button
                key="ok"
                type="primary"
                variant="prologueAddBtn"
                loading={confirmLoading ? confirmLoading : false}
                onClick={handleOk}
                disabled={isDisabled}
            >
                등록하기
            </Button>
        </ModalContainer>
    );
};
