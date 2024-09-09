import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Center, LayoutContainer } from './styled';

const Layout = ({ children }) => {
    return (
        <LayoutContainer>
            <Header />
            <Center>
                <Sidebar />
                {children}
            </Center>
        </LayoutContainer>
    );
};

export default Layout;
