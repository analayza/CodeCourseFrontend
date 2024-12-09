import React from "react";
import './css/NavBar.css';

export default function NavBar(){
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <div className="search-container">
                    <input 
                        type="text" 
                        className="search-input" 
                        placeholder="Digite o nome do curso que quer encontrar">
                    </input>
                    <button className="search-button">Pesquisar</button>
                </div>

                <div className="user-profile">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="Avatar do usuário"
                        className="user-avatar"
                    />
                    <button className="button-profile">
                        <span className="user-name">Pedrina <br></br> 
                            <span className="user-role">
                                Aluno(a)
                            </span>
                        </span>
                    </button>
                    
                </div>
            </div>
        </nav>
    )
}