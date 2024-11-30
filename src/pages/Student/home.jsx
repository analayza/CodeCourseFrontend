import React from 'react';
import '../../components/NavBar';
import NavBar from '../../components/NavBar';
import penguinImage from '../../images/piguimCodeCursos2.png';
import '../css/menu.css';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />

export default function Home(){
    return(
        <>
            <NavBar></NavBar>
            <div className='image-menu'>
                <img src={penguinImage} alt="image_penguin"/>
            </div>
            <div className='listMyCourse'>
                <h1>Meus Cursos:</h1>
            </div>
        </>
    )
}