import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/ArrowBack.css';
import arrowback from '../images/arrowback.png';

export default function MyArrowBack({ onClick }) {
  return (
    <button className='buttonArrowBack' onClick={onClick}>
      <img src={arrowback} alt="Voltar" />
    </button>
  );
}
