/**
 * App.js
 * @author 최유경
 * @since 2024.08.26
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.08.26   최유경       최초 생성
 * 2024.09.03   최유경       header, sidebar 추가
 * 2024.09.09  	최유경       Layout 구성
 * </pre>
 */

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
