import React, { useState, useEffect, useRef } from 'react';
import {
    DropdownButton,
    DropdownContainer,
    DropdownGroupContainer,
    DropdownItem,
    DropdownMenu,
    GroupTitle,
    IconWrapper,
} from './styled';
import { MdKeyboardArrowDown } from 'react-icons/md';

export const DropdownWithGroup = ({
    title = '',
    groups = [],
    onSelect,
    selectedItem,
    setSelectedItem,
    disabled = false,
}) => {
    const [showMenu, setShowMenu] = useState(false);
    // const [selectedItem, setSelectedItem] = useState(null);
    const dropdownRef = useRef(null);

    // 드롭다운 토글
    const toggleMenu = () => {
        if (!disabled) {
            setShowMenu(!showMenu);
        }
    };

    // 아이템 클릭 처리
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

    return (
        <DropdownContainer ref={dropdownRef}>
            <DropdownButton onClick={toggleMenu} disabled={disabled}>
                {selectedItem ? selectedItem.name : title}
                <IconWrapper>
                    <MdKeyboardArrowDown size={20} />
                </IconWrapper>
            </DropdownButton>
            {!disabled && (
                <DropdownMenu show={showMenu}>
                    {groups.map((group, groupIndex) => (
                        <DropdownGroup key={groupIndex} group={group} onSelect={handleItemClick} />
                    ))}
                </DropdownMenu>
            )}
        </DropdownContainer>
    );
};

// DropdownGroup 컴포넌트
const DropdownGroup = ({ group, onSelect }) => {
    return (
        <DropdownGroupContainer>
            <GroupTitle>{group.label}</GroupTitle>
            {group.items.map((item) => (
                <DropdownItem key={item.index} onClick={() => onSelect(item)}>
                    {item.name}
                </DropdownItem>
            ))}
        </DropdownGroupContainer>
    );
};

export const branchItem = [
    {
        label: 'CH 1985',
        items: [
            { index: 1, name: '더현대서울' },
            { index: 2, name: '중동점' },
            { index: 3, name: '압구정본점' },
            { index: 4, name: '더현대 대구' },
        ],
    },
    {
        label: '문화센터',
        items: [
            { index: 5, name: '무역센터점' },
            { index: 6, name: '천호점' },
            { index: 7, name: '신촌점' },
            { index: 8, name: '미아점' },
            { index: 9, name: '목동점' },
            { index: 10, name: '킨텍스점' },
            { index: 11, name: '디큐브시티' },
            { index: 12, name: '판교점' },
            { index: 13, name: '울산점' },
            { index: 14, name: '울산동구점' },
            { index: 15, name: '충청점' },
            { index: 16, name: '가든파이브' },
        ],
    },
    {
        label: '컬처커넥트',
        items: [{ index: 17, name: '커넥트현대' }],
    },
];
