import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SurveyPage from './components/SurveyPage';
import ResultPage from './components/ResultPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/page" element={<SurveyPage />} />
                <Route path="/result" element={<ResultPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
