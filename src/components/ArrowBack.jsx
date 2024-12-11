import './css/ArrowBack.css';
import arrowback from '../images/arrowback.png';
import React from "react";

export default function MyArrowBack({ onClick }) {
    return (
        <button className='buttonArrowBack' onClick={onClick}>
            <img src={arrowback} alt="Voltar" />
        </button>
    );
}