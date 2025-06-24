import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Surveycss.css';
import FooterComp from "./FooterComp";

function SurveyPage() {
    const navigate = useNavigate();

    const questions = [
        {
            text: 'Do you like cats?',
            options: ['yes', 'of course']
        },
        {
            text: 'What is your mood?',
            options: ['silly', 'angry', 'sad', 'happy', 'confused']
        }
    ];


    const [step, setStep] = useState(0);
    const [answer, setAnswer] = useState('');

    function  nextStep() {
        if (!answer) {
            alert('You have to choose!!!');
            return;
        }

        if (step < questions.length - 1) {
            setStep(step + 1);
            setAnswer('');
        } else {
            navigate('/result', { state: { mood: answer } });
        }
    }

    return (
        <div className="survey-page">
            <h2>{questions[step].text}</h2>
            <div className="options">
                {questions[step].options.map(option => (
                    <label key={option}>
                        <input
                            type="radio"
                            name="option"
                            value={option}
                            checked={answer === option}
                            onChange={() => setAnswer(option)}
                        />
                        {option}
                    </label>
                ))}
            </div>
            <button onClick={nextStep}>
                yes
            </button>
            <FooterComp />
        </div>
    );
}

export default SurveyPage;