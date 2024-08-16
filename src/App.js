import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardPage from './pages/DashboardPage';
import ContentPage from './pages/ContentPage';
import MediaPage from './pages/MediaPage';
import SchedulePage from './pages/SchedulePage';

const App = () => {
    return (
        <Routes>
       
                <Route path="/"  element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/dashboard" element={<DashboardPage/>} />
                <Route path="/content" element={<ContentPage/>} />
                <Route path="/media" element={<MediaPage/>} />
                <Route path="/schedule" element={<SchedulePage/>} />
           
        </Routes>
    );
};

export default App;







