import React from "react";
import './css/NavBar.css';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function NavBar({ userName, userRole }){

    const navigate = useNavigate();

    const user = JSON.parse(sessionStorage.getItem("user"));

    const handleProfileClick = () => {
        console.log(user)
        if (user) {
            navigate('/Profile', { state: { user } });
        }
    };
    

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
                        src={user.profile}
                        alt="Avatar do usuário"
                        className="user-avatar"
                    />
                    <button className="button-profile" onClick={handleProfileClick}>
                        <span className="user-name">{userName}<br></br> 
                            <span className="user-role">
                                {userRole}
                            </span>
                        </span>
                    </button>
                    
                </div>
            </div>
        </nav>
    )
}