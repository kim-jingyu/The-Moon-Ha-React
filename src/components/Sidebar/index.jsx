import React from 'react';
import { Container } from './styled';

import shortFormIcon from '../../assets/images/shortFormIcon.svg';
import lessonIcon from '../../assets/images/lessonIcon.svg';
import craftIcon from '../../assets/images/craftIcon.svg';
import analysticIcon from '../../assets/images/analysticIcon.svg';
import studioIcon from '../../assets/images/studioIcon.svg';
import SidebarButton from '../SidebarButton';

const menus = [
    {
        name: '숏폼 관리',
        icon: shortFormIcon,
        path: '/shortForm',
    },
    {
        name: '강좌 관리',
        icon: lessonIcon,
        path: '/lesson',
    },
    {
        name: '통계',
        icon: analysticIcon,
        path: '/main',
    },
    {
        name: '문화 공방',
        icon: craftIcon,
        path: '/craft',
        subBtn: [
            { to: '/prologue', label: '프롤로그 관리' },
            { to: '/suggestion', label: '제안합니다' },
        ],
    },
    {
        name: '방송 관리',
        icon: studioIcon,
        path: '/studio',
    },
];

const Sidebar = () => {
    return (
        <Container>
            {menus.map((btn, i) => (
                <SidebarButton key={i} name={btn.name} icon={btn.icon} path={btn.path} subBtn={btn.subBtn} />
            ))}
        </Container>
    );
};

export default Sidebar;
