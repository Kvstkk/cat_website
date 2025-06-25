import React,{ useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FooterComp from './FooterComp';
import './Resultcss.css';

function ResultPage() {
    const location = useLocation();
    const mood = location.state?.mood || 'orange';

    const [fact, setFact] = useState('loading..');

    async function loadFact() {
        try {
            const response = await fetch('https://catfact.ninja/fact');
            const data = await response.json();
            setFact(data.fact);
        } catch (error) {
            setFact('oops, error(');
        }
    }

    useEffect(() => {
        loadFact();
        const time = setInterval(() => {
            loadFact();
        }, 5000);
        return () => {
            clearInterval(time);
        };
    }, []);


    return (
        <div className="result-page">
            <h1>Here is your cat:</h1>
            <img src={`https://cataas.com/cat/${mood}`} alt="hola" className="cat-image" />
            <p>{fact}</p>
            <FooterComp />
        </div>
    );
}

export default ResultPage;
