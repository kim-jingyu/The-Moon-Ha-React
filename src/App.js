import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './Router';
import Layout from './layout';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

function App() {
    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Layout>
                        <Router />
                    </Layout>
                </BrowserRouter>
            </QueryClientProvider>
        </RecoilRoot>
    );
}

export default App;
