import React, { useState } from 'react';
import { DropdownButton, DropdownContainer, DropdownItem, DropdownMenu, IconWrapper } from './styled';
import { MdKeyboardArrowDown } from 'react-icons/md';

export const Dropdown = ({ title, group = [], onSelect }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleMenu = () => setShowMenu(!showMenu);
    const handleItemClick = (item) => {
        setSelectedItem(item);
        onSelect(item);
        setShowMenu(false);
    };

    return (
        <DropdownContainer>
            <DropdownButton onClick={toggleMenu}>
                {selectedItem ? selectedItem.name : title}
                <IconWrapper>
                    <MdKeyboardArrowDown size={20} />
                </IconWrapper>
            </DropdownButton>
            <DropdownMenu show={showMenu}>
                {group.map((item) => (
                    <DropdownItem key={item.index} onClick={() => handleItemClick(item)}>
                        {item.name}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </DropdownContainer>
    );
};

export const tutorItems = [
    { index: 1, name: '최유경' },
    { index: 2, name: '손승완' },
    { index: 3, name: '김진규' },
    { index: 4, name: '조희정' },
];

export const category_ch1985 = [
    { index: 1, name: 'ON 라이브' },
    { index: 2, name: '파인 다이닝' },
    { index: 3, name: '살롱 1985' },
    { index: 4, name: '키즈 패밀리' },
    { index: 5, name: '클럽 웰니스' },
    { index: 6, name: '파워 트레이닝' },
    { index: 7, name: '취향 커뮤니티' },
    { index: 8, name: '인문 & 아트 살롱' },
];

export const category_center = [
    { index: 9, name: '인문예술' },
    { index: 10, name: '재테크' },
    { index: 11, name: '외국어' },
    { index: 12, name: '사진 여행' },
    { index: 13, name: '웰니스뷰티' },
    { index: 14, name: '쿠킹취미' },
    { index: 15, name: '미술 기악' },
    { index: 16, name: '노래 댄스' },
    { index: 17, name: '공연이벤트' },
    { index: 18, name: '엄마랑 아가랑' },
    { index: 19, name: '어린이 패밀리' },
    { index: 20, name: '자녀교육 프리맘' },
];
