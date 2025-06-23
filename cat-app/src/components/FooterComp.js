import React from 'react';
import './Footercss.css';
import {Link} from "react-router-dom";


function FooterComp(){
    return(
    <div className="foot_component">
        <Link to="/">
            <img src="/heart.png" alt="heart" />
        </Link>
    </div>
)}
export default  FooterComp;