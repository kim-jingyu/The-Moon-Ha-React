import React, { useState, useEffect, useRef } from 'react';
import { DropdownButton, DropdownContainer, DropdownItem, DropdownMenu, IconWrapper } from './styled';
import { MdKeyboardArrowDown } from 'react-icons/md';

export const Dropdown = ({ title, width, group = [], onSelect, selectedItem, setSelectedItem, disabled = false }) => {
    const [showMenu, setShowMenu] = useState(false);
    // const [selectedItem, setSelectedItem] = useState(null);
    const dropdownRef = useRef(null);

    const toggleMenu = () => {
        if (!disabled) {
            setShowMenu(!showMenu);
        }
    };
    const handleItemClick = (item) => {
        if (!disabled) {
            setSelectedItem(item);
            onSelect(item);
            setShowMenu(false);
        }
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        // mousedown 이벤트 리스너 등록
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // 컴포넌트 언마운트 시 이벤트 리스너 제거
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        // 외부에서 selectedItem을 업데이트하면 메뉴를 닫음
        setShowMenu(false);
    }, [selectedItem]);

    return (
        <DropdownContainer ref={dropdownRef} width={width}>
            <DropdownButton onClick={toggleMenu} disabled={disabled} width={width}>
                {selectedItem ? selectedItem.name : title}
                <IconWrapper>
                    <MdKeyboardArrowDown size={20} />
                </IconWrapper>
            </DropdownButton>
            {!disabled && (
                <DropdownMenu show={showMenu} width={width}>
                    {group.map((item) => (
                        <DropdownItem key={item.index} onClick={() => handleItemClick(item)}>
                            {item.name}
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            )}
        </DropdownContainer>
    );
};

export const category_ch1985 = [
    { index: 13, name: 'ON 라이브' },
    { index: 14, name: '파인 다이닝' },
    { index: 15, name: '살롱 1985' },
    { index: 16, name: '키즈 패밀리' },
    { index: 17, name: '클럽 웰니스' },
    { index: 18, name: '파워 트레이닝' },
    { index: 19, name: '취향 커뮤니티' },
    { index: 20, name: '인문 & 아트 살롱' },
];

export const category_center = [
    { index: 1, name: '인문예술' },
    { index: 2, name: '재테크' },
    { index: 3, name: '외국어' },
    { index: 4, name: '사진 여행' },
    { index: 5, name: '웰니스뷰티' },
    { index: 6, name: '쿠킹취미' },
    { index: 7, name: '미술 기악' },
    { index: 8, name: '노래 댄스' },
    { index: 9, name: '공연이벤트' },
    { index: 10, name: '엄마랑 아가랑' },
    { index: 11, name: '어린이 패밀리' },
    { index: 12, name: '자녀교육 프리맘' },
];

export const lessonList = [
    {
        label: 1,
        items: [
            { index: 1, name: '무역센터점' },
            { index: 2, name: '천호점' },
            { index: 3, name: '신촌점' },
            { index: 4, name: '미아점' },
            { index: 5, name: '목동점' },
            { index: 6, name: '킨텍스점' },
            { index: 7, name: '디큐브시티' },
            { index: 8, name: '판교점' },
        ],
    },
    {
        label: 2,
        items: [
            { index: 9, name: '더현대서울' },
            { index: 10, name: '중동점' },
            { index: 11, name: '압구정본점' },
            { index: 12, name: '더현대 대구' },
        ],
    },
];
