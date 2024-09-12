import { Content } from 'antd/es/layout/layout';
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
