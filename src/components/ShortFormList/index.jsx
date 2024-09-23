/**
 * 숏폼 조회 컴포넌트
 * @author 최유경
 * @since 2024.09.12
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.12  	최유경       최초 생성
 * </pre>
 */

import React, { useEffect, useState } from 'react';
import {
    BodyWrapper,
    Container,
    ContentItem,
    ContentWrapper,
    GridItem,
    HeadWrapper,
    VideoGrid,
    Wrapper,
} from './styled';
import { fetchShortFormAPI } from '../../apis/Lesson';
import Player from '../Player';
import { branchItem, DropdownWithGroup } from '../DropdownWithGroup';
import { colors } from '../../styles/colors';
import CalendarHeader from '../CalendarHeader';
import { addMonths, format, subMonths } from 'date-fns';

const ShortFormList = () => {
    const [selectedBranch, setSelectedBranch] = useState(null);
    const [shortFormList, setShortFormList] = useState([]);

    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 데이터를 가져오는 함수
    const getShortFormList = async () => {
        try {
            setLoading(true);

            const response = await fetchShortFormAPI(
                selectedBranch ? selectedBranch.index : null,
                format(currentMonth, 'yyyy-MM'),
            );

            setShortFormList(response.data); // 데이터를 상태로 저장
        } catch (err) {
            setError(err); // 에러 상태 설정
        } finally {
            setLoading(false); // 로딩 상태 해제
        }
    };

    useEffect(() => {
        getShortFormList();
    }, [selectedBranch, currentMonth]);

    const prevMonth = () => {
        setCurrentMonth((currentMonth) => subMonths(currentMonth, 1));
    };

    const nextMonth = () => {
        setCurrentMonth((currentMonth) => addMonths(currentMonth, 1));
    };

    return (
        <Container>
            <Wrapper>
                <HeadWrapper>
                    <CalendarHeader currentMonth={currentMonth} prevMonth={prevMonth} nextMonth={nextMonth} />
                    <DropdownWithGroup
                        title="지점명"
                        width="200px"
                        groups={branchItem}
                        onSelect={setSelectedBranch}
                        selectedItem={selectedBranch}
                        setSelectedItem={setSelectedBranch}
                    />
                </HeadWrapper>
                <BodyWrapper>
                    <VideoGrid>
                        {shortFormList.map((video) => (
                            <GridItem key={video.id}>
                                <Player
                                    url={video.videoUrl}
                                    thumbnail={video.thumbnailUrl}
                                    width="250px"
                                    ratio="9/16"
                                />
                                <ContentWrapper>
                                    <ContentItem>{video.name}</ContentItem>
                                    <ContentItem color={colors.drak_gray} size="12px">
                                        조회수 {video.viewCount}
                                    </ContentItem>
                                </ContentWrapper>
                            </GridItem>
                        ))}
                    </VideoGrid>
                </BodyWrapper>
            </Wrapper>
        </Container>
    );
};

export default ShortFormList;
