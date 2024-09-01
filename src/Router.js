import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import { Center } from './components/Default/styled';
import Sidebar from './components/Sidebar';

import Main from './pages/Main';
import Lesson from './pages/Lesson';
import ShortForm from './pages/ShortForm';
import Craft from './pages/Craft';
import Prologue from './pages/Prologue';
import Suggestion from './pages/Suggestion';
import Studio from './pages/Studio';

const Router = () => {
    return (
        <BrowserRouter>
            <Center>
                <Sidebar />
                <Routes>
                    <Route path="/main" element={<Main />} />
                    <Route path="/shortForm" element={<ShortForm />} />
                    <Route path="/lesson" element={<Lesson />} />
                    <Route path="/craft" element={<Craft />} />
                    <Route path="/prologue" element={<Prologue />} />
                    <Route path="/suggestion" element={<Suggestion />} />
                    <Route path="/studio" element={<Studio />} />
                </Routes>
            </Center>
        </BrowserRouter>
    );
};

export default Router;
