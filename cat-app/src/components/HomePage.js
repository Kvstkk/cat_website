import './Homecss.css';
import { useNavigate } from 'react-router-dom';
import FooterComp from './FooterComp';

function HomePage() {
    const navigate = useNavigate();
    return (
        <div className="home-page">
            <h1>Hello world.</h1>
            <h3>What cat are you?</h3>
            <img src="/cat.gif" alt="Cat GIF" />
            <br />
            <button onClick={() => navigate('/login')}>
                Find out
            </button>
            <FooterComp />
        </div>)
}

export default HomePage;
