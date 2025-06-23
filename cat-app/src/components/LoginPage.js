import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Logincss.css';
import FooterComp from "./FooterComp";


function LoginPage() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const letterRegex = /^[A-Za-z]+$/;

    const handleSubmit = e => {
        e.preventDefault();
        if (!letterRegex.test(name)) {
            alert('only English letters!!!');
            return;
        }
        if (!letterRegex.test(password)) {
            alert('only English letters!!!');
            return;
        }

        navigate('/page');
    };

    return (
        <div className="login-page">
            <h1>Let's get known each other</h1>
            <div className="login-content">
                <img src="/cat_donut.png" alt="donut cat"/>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">name</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        pattern="[A-Za-z]+"
                        title="Only English letters!!!"
                    />

                    <label htmlFor="password">password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        pattern="[A-Za-z]+"
                        title="Only English letters!!!"
                    />

                    <button type="submit">CONTINUE</button>
                </form>
            </div>
            <FooterComp />
        </div>
    );
}

export default LoginPage;
