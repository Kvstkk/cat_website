import React from 'react';
import { useLocation } from 'react-router-dom';
import FooterComp from './FooterComp';
import './Resultcss.css';

function ResultPage() {
    const location = useLocation();
    const mood = location.state?.mood || 'orange';

    return (
        <div className="result-page">
            <h1>Here is your cat:</h1>
            <img src={`https://cataas.com/cat/${mood}`} alt="hola" className="cat-image" />

            <FooterComp />
        </div>
    );
}

export default ResultPage;
