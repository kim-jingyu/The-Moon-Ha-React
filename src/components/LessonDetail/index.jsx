/**
 * 강좌 상세 조회
 *
 * @author 최유경
 * @since 2024.09.09
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.09 	최유경       최초 생성
 * </pre>
 */

import React, { useEffect, useState } from 'react';
import Player from '../Player';
import {
    Container,
    HintTitle,
    InputField,
    RowWrapper,
    Wrapper,
    CheckBoxContainer,
    RowItem,
    RadioContainer,
    RadioInput,
    RadioLabel,
    UploadItem,
    VideoWrapper,
    CheckBox,
    TextAreaField,
} from './styled';
import CustomImage from '../Image';
import { fetchLessonDetailAPI } from '../../apis/Lesson';
import { DropdownWithGroup } from '../DropdownWithGroup';
import { Dropdown } from '../Dropdown';
import DatePicker from '../DatePicker';
import TimePicker from '../TimePicker';
import dayjs from 'dayjs';

const daysOfWeek = ['월', '화', '수', '목', '금', '토', '일'];
const target = ['성인', '엄마랑 아이랑', '유아/어린이', '패밀리'];

const LessonDetail = ({ record, lessonId }) => {
    const [detail, setDetail] = useState(null);
    const [dates, setDates] = useState([]);
    const [times, setTimes] = useState([]);
    const [isRealTime, setIsRealTime] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('LessonDetail : ', record);
        console.log('LessonDetail lessonId : ', lessonId);
        if (record != null) {
            setDetail(record);
            setLoading(false);
        } else {
            const getLessonDetail = async () => {
                try {
                    console.log('LessonDetail lessonId : ', lessonId);
                    const response = await fetchLessonDetailAPI(lessonId);

                    console.log('fetchLessonDetailAPI : ', response);
                    setDetail(response.data);
                    setLoading(false);
                } catch (err) {
                    setError(err); // 에러 상태 설정
                    setLoading(false);
                }
            };
            getLessonDetail();
        }
    }, [record, lessonId]);

    useEffect(() => {
        if (detail) {
            const startDate = dayjs(detail.startDate);
            const endDate = dayjs(detail.endDate);
            const startTime = dayjs(detail.startTime, 'HH:mm');
            const endTime = dayjs(detail.endTime, 'HH:mm');

            setDates([startDate, endDate]);
            setTimes([startTime, endTime]);

            if (detail?.isOnline === 1) setIsRealTime(true);
        }
    }, [detail]);

    return (
        <Container>
            <Wrapper>
                <RowWrapper>
                    <RowItem>
                        <HintTitle>지점 선택</HintTitle>
                        {/* 지점 선택 드롭다운 */}
                        <DropdownWithGroup
                            title="지점명"
                            width="200px"
                            onSelect={() => {}}
                            selectedItem={{ index: detail?.branchId, name: detail?.branchName }}
                            disabled={true}
                        />
                    </RowItem>
                    <RowItem>
                        {/* 강사명 입력 필드 */}
                        <HintTitle>강사명</HintTitle>
                        <InputField
                            type="text"
                            width="240px"
                            value={detail?.tutorName || ''}
                            readOnly
                            placeholder="강사명"
                        />
                    </RowItem>
                    <RowItem>
                        {/* 실시간 여부 체크박스 */}
                        <CheckBoxContainer>
                            <CheckBox checked={isRealTime} />
                            <HintTitle>실시간 여부</HintTitle>
                        </CheckBoxContainer>
                    </RowItem>
                </RowWrapper>
                <RowWrapper>
                    <RowItem>
                        <HintTitle>강좌명</HintTitle>
                        <InputField
                            type="text"
                            width="450px"
                            value={detail?.title || ''}
                            placeholder={detail?.title || '강좌명'}
                            readOnly
                        />
                    </RowItem>
                    <RowItem>
                        <HintTitle>카테고리</HintTitle>
                        <Dropdown
                            title="카테고리명"
                            onSelect={() => {}}
                            selectedItem={{ index: detail?.categoryId, name: detail?.category }}
                            disabled={true}
                        />
                    </RowItem>
                </RowWrapper>
                <RowWrapper>
                    <RowItem>
                        <HintTitle>장소</HintTitle>
                        <InputField
                            type="text"
                            width="300px"
                            value={detail?.place || ''}
                            placeholder={detail?.place || '장소'}
                            readOnly
                        />
                    </RowItem>
                    <RowItem>
                        <HintTitle>수강 대상</HintTitle>
                        <RadioContainer>
                            {target.map((item, idx) => (
                                <RadioLabel key={item}>
                                    <RadioInput
                                        type="radio"
                                        name="target"
                                        value={idx}
                                        checked={detail?.target - 1 === idx}
                                        onChange={() => {}}
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
                        <DatePicker value={dates} disabled={true} />
                    </RowItem>
                    <RowItem>
                        <HintTitle>수업 시간</HintTitle>
                        <TimePicker value={times} disabled={true} />
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
                                        value={detail?.day}
                                        checked={detail?.day === day}
                                        onChange={() => {}}
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
                            width="100%"
                            value={detail?.cost || ''}
                            placeholder={detail?.cost || '수강료'}
                            readOnly
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
                            value={detail?.summary || ''}
                            placeholder={detail?.summary || '개요'}
                            readOnly
                        />
                    </RowItem>
                    <RowItem>
                        <HintTitle>준비물</HintTitle>
                        <InputField
                            type="text"
                            width="100%"
                            value={detail?.supply || ''}
                            placeholder={detail?.supply || '준비물'}
                            readOnly
                        />
                    </RowItem>
                </RowWrapper>
                <RowWrapper>
                    <RowItem>
                        <HintTitle>커리큘럼</HintTitle>
                        <TextAreaField
                            height="150px"
                            value={detail?.curriculum || ''}
                            placeholder={detail?.curriculum || '준비물'}
                            readOnly
                        />
                    </RowItem>
                </RowWrapper>
            </Wrapper>

            <Wrapper>
                <VideoWrapper>
                    <UploadItem>
                        <HintTitle>썸네일 사진</HintTitle>
                        <CustomImage src={detail?.thumbnailUrl} width="380px" />
                    </UploadItem>
                    <UploadItem>
                        <HintTitle>프리뷰 영상</HintTitle>
                        <Player url={detail?.previewVideoUrl} width="380px" />
                    </UploadItem>
                </VideoWrapper>
            </Wrapper>
        </Container>
    );
};

export default LessonDetail;
