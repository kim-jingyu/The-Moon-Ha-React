import React from 'react';
import { Container } from './styled';

/**
 * Siderbar
 *
 * @author 최유경
 * @since 2024.08.26
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.08.26  	최유경       최초 생성
 * 2024.09.13   최유경       sidebar 고정
 * </pre>
 */

import shortFormIcon from '../../assets/images/shortFormIcon_w.svg';
import lessonIcon from '../../assets/images/lessonIcon_w.svg';
import craftIcon from '../../assets/images/craftIcon_w.svg';
import studioIcon from '../../assets/images/studioIcon_w.svg';
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
        path: '/live/start',
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
