import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './Router';
import Header from './components/Header';
import { Center } from './components/Default/styled';

const queryClient = new QueryClient();

function App() {
    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <Header />
                <Center>
                    <Router />
                </Center>
            </QueryClientProvider>
        </RecoilRoot>
    );
}

export default App;
