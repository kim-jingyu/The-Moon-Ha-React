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
    AddWrapper,
} from './styled';
import DatePicker from '../DatePicker';
import FileUpload from '../Upload';
import CustomModal from '../Modal';
import Button from '../Button';

import plusIcon from '../../assets/images/plusIcon.svg';
import cancelIcon from '../../assets/images/cancelIcon.svg';
import CustomTable from '../Table';
import { prologueRegisterAPI, prologueRegisterAPIV2 } from '../../apis/Craft';
import { getFileNameServer } from '../../util';
import { getPresignedUrl, getPresignedUrlList, uploadFileToS3 } from '../../apis/S3';

const PrologueRegister = () => {
    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(true);
    const [themeName, setThemeName] = useState('');
    const [description, setDescription] = useState('');
    const [selectedDateRange, setSelectedDateRange] = useState([null, null]);
    const [titleList, setTitleList] = useState([]);
    const [thumbnailList, setThumbnailList] = useState([]);
    const [videoList, setVideoList] = useState([]);
    const [prologueList, setPrologueList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [presignedUrls, setPresignedUrls] = useState({ videoUrls: {}, thumbnailUrls: {} });
    const [fileNames, setFileNames] = useState({ videoFileNames: [], prologueFileNames: [] });

    const handleDateChange = (dates, dateStrings) => {
        setSelectedDateRange(dates);
        console.log('Selected Dates:', dates);
        console.log('Selected Date Strings:', dateStrings);
    };

    const handleAddPrologue = (prologueName, newThumbnail, newVideo) => {
        console.log('handleAddPrologue 썸네일 : ', newThumbnail);
        console.log('handleAddPrologue 비디오 : {}', newVideo);
        setThumbnailList([...thumbnailList, newThumbnail]);
        setVideoList([...videoList, newVideo]);
        setTitleList([...titleList, prologueName]);

        console.log('prologueList.length + 1 : ', prologueList.length);
        setPrologueList([
            ...prologueList,
            {
                key: prologueList.length + 1,
                video: newVideo,
                thumbnail: newThumbnail,
                title: prologueName,
                edit: '편집',
            },
        ]);
    };

    const handleSubmit = async () => {
        const videoFileNames = videoList.map((file) => file.name);
        const thumbnailFileNames = thumbnailList.map((file) => file.name);

        setFileNames({
            videoFileNames,
            thumbnailFileNames,
        });
        console.log('videoFileNames : {}', videoFileNames);
        console.log('thumbnailFileNames : {}', thumbnailFileNames);
        await new Promise((resolve) => setTimeout(resolve, 0));

        setLoading(true);

        if (!isDisabled) {
            console.log('1. 비디오 파일 presigned URLs 요청 ', videoFileNames);

            // 1. 비디오 파일 presigned URLs 요청
            const videoResponse = await getPresignedUrlList(videoFileNames);
            console.log('videoResponse : {}', videoResponse);
            const videoPresignedUrls = await videoResponse.data;
            console.log('videoPresignedUrls : {}', videoPresignedUrls);

            console.log('2. 프롤로그 파일 presigned URLs 요청 ', thumbnailFileNames);
            // 2. 프롤로그 파일 presigned URLs 요청
            const thumbnailResponse = await getPresignedUrlList(thumbnailFileNames);
            console.log('thumbnailResponse : {}', thumbnailResponse);
            const thumbnailPresignedUrls = await thumbnailResponse.data;
            console.log('thumbnailPresignedUrls : {}', thumbnailPresignedUrls);

            // Presigned URLs을 상태에 저장
            setPresignedUrls({
                videoUrls: videoPresignedUrls,
                thumbnailUrls: thumbnailPresignedUrls,
            });
            console.log('videoPresignedUrls : {}', videoPresignedUrls);
            console.log('thumbnailPresignedUrls : {}', thumbnailPresignedUrls);

            // await new Promise((resolve) => setTimeout(resolve, 0));

            // console.log('presignedUrls.videoUrls keys:', Object.keys(videoPresignedUrls));
            // console.log('presignedUrls.thumbnailUrls keys:', Object.keys(thumbnailPresignedUrls));

            // 3. 파일 업로드
            const uploadPromises = [
                ...videoList.map((file, index) => {
                    const fileName = videoFileNames[index];
                    const presignedUrl = videoPresignedUrls[fileName];
                    console.log('fileName, presignedUrl ', fileName, ' ', presignedUrl);
                    return uploadFileToS3(file, presignedUrl);
                }),
                ...thumbnailList.map((file, index) => {
                    const fileName = thumbnailFileNames[index];
                    const presignedUrl = thumbnailPresignedUrls[fileName];
                    console.log('fileName, presignedUrl ', fileName, ' ', presignedUrl);
                    return uploadFileToS3(file, presignedUrl);
                }),
            ];
            await Promise.all(uploadPromises);
            console.log('파일 업로드 완료');

            // 4. 업로드된 파일의 URL 생성
            const baseUrl = 'https://image.themoonha.site/';
            const updatedVideoUrls = videoFileNames.map((fileName) => `${baseUrl}${fileName}`);
            const updatedThumbnailUrls = thumbnailFileNames.map((fileName) => `${baseUrl}${fileName}`);

            // 서버로 데이터 전송
            const prologueRegister = {
                name: themeName,
                memberId: 8,
                description: description,
                videoCnt: titleList.length,
                startDate: selectedDateRange ? selectedDateRange[0].format('YYYY-MM-DD') : null,
                expireDate: selectedDateRange ? selectedDateRange[1].format('YYYY-MM-DD') : null,
                prologueList: titleList,
                thumbnailList: updatedThumbnailUrls,
                videoList: updatedVideoUrls,
            };

            try {
                // API 호출
                console.info('lessonRegister : {}', prologueRegister);
                // const response = await prologueRegisterAPI(prologueRegister, thumbnailList, videoList);

                const response = await prologueRegisterAPIV2(prologueRegister);

                console.log('응답 : {}', response);
                if (response.status === 200) {
                    console.log('Success:', response.data);
                    navigate('/prologue');
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
        if (
            themeName !== '' &&
            description !== '' &&
            selectedDateRange[0] !== null &&
            titleList.length !== 0 &&
            thumbnailList.length !== 0 &&
            videoList.length !== 0 &&
            titleList.length === thumbnailList.length &&
            titleList.length === videoList.length
        ) {
            console.log('리스트 담긴 수 확인하기 : {}, {}', titleList.length, thumbnailList.length);
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [themeName, description, selectedDateRange, titleList, thumbnailList, videoList]);

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
                <AddWrapper>
                    <CustomTable columns={columns} data={prologueList} hasPage={false} />
                </AddWrapper>

                <CustomModal
                    variant="prologuePlusBtn"
                    buttonContent={<img src={plusIcon} alt="open" style={{ width: '15px', height: '15px' }} />}
                    closeIcon={<img src={cancelIcon} alt="close" style={{ width: '15px', height: '15px' }} />}
                >
                    <RegisterModal onUpdate={handleAddPrologue} />
                </CustomModal>
            </Wrapper>

            <Button variant="registerBtn" onClick={handleSubmit} disabled={isDisabled}>
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
        // 파일 이름을 getFileNameServer 함수로 변경
        const thumbnailFileName = thumbnailFile ? getFileNameServer('craft', thumbnailFile.name) : null;
        const videoFileName = videoFile ? getFileNameServer('craft', videoFile.name) : null;

        console.log('thumbnailFileName : ', thumbnailFileName);
        console.log('videoFileName : ', videoFileName);

        // 새로운 파일 객체 생성
        const renamedThumbnailFile = thumbnailFile
            ? new File([thumbnailFile], thumbnailFileName, { type: thumbnailFile.type })
            : null;
        const renamedVideoFile = videoFile ? new File([videoFile], videoFileName, { type: videoFile.type }) : null;

        console.log('renamedThumbnailFile : ', renamedThumbnailFile);
        console.log('renamedVideoFile : ', renamedVideoFile);
        setTimeout(() => {
            if (onUpdate) {
                onUpdate(prologueName, renamedThumbnailFile, renamedVideoFile);
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

const columns = [
    {
        title: '프롤로그',
        dataIndex: 'video',
        key: 'video',
        width: '250px',
    },
    {
        title: '썸네일',
        dataIndex: 'thumbnail',
        key: 'thumbnail',
        width: '250px',
    },
    {
        title: '제목',
        dataIndex: 'title',
        key: 'title',
        width: '450px',
    },
    {
        title: '',
        dataIndex: 'edit',
        key: 'edit',
        width: '150px',
    },
];
