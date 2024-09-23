/**
 * Layout 구성
 * @author 최유경
 * @since 2024.09.09
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.09  	최유경       최초 생성
 * </pre>
 */

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Center, LayoutContainer } from './styled';

const Layout = ({ children }) => {
    return (
        <LayoutContainer>
            <Header />
            <Sidebar />
            <Center>{children}</Center>
        </LayoutContainer>
    );
};

export default Layout;
