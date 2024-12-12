import React, { useState } from "react";
import "../../components/ArrowBack";
import "../../components/Button";
import "../../components/Input";
import MyArrowBack from "../../components/ArrowBack";
import MyInput from "../../components/Input";
import MyCodeCourses from "../../components/CodeCourses";
import { updatePasswordStudent, updatePasswordTeacher } from "../../services/UpdatePassword"; 
import "../../pages/css/ProfileConfiguration.css";
import MyButton from "../../components/Button";
import {useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { deleteStudent, deleteTeacher } from "../../services/DeleteAccount";

export default function ProfileConfiguration() {

    const navigate = useNavigate();

    const location = useLocation();
    const user = location.state?.user;

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");

    const hadleBackClick = () => {
        navigate('/')
    }

    const handleDeleteClick = async (userId) => {
        try {
            if (user.type === "Aluno") {
  
                const response = await deleteStudent(user.id);
                console.log("Resposta da API (Aluno):", response);
                navigate('/Login')
            } else if (user.type === "Professor") {
             
                const response = await deleteTeacher(user.id);
                console.log("Resposta da API (Professor):", response);
                navigate('/Login')
            }
        } catch (error) {
            console.error("Erro deletar conta", error);
        }
    }

    const handlePasswordUpdate = async () => {
        console.log("Tentando atualizar a senha...");
        if (!oldPassword || !newPassword) {
            setMessage("Por favor, preencha todos os campos.");
            return;
        }

    
        if (oldPassword !== user.password) {
            setMessage("A senha antiga não corresponde.");
            return;
        }

        try {
            if (user.type === "Aluno") {
               
                const response = await updatePasswordStudent(user.id, oldPassword, newPassword);
                console.log("Resposta da API (Aluno):", response);
                setMessage("Senha atualizada com sucesso!");
            } else if (user.type === "Professor") {
                
                const response = await updatePasswordTeacher(user.id, oldPassword, newPassword);
                console.log("Resposta da API (Professor):", response);
                setMessage("Senha atualizada com sucesso!");
            }

            
            setOldPassword("");
            setNewPassword("");
        } catch (error) {
            console.error("Erro ao atualizar a senha:", error);
            setMessage("Erro ao atualizar a senha. Verifique os dados e tente novamente.");
        }
    };

    return (
        <>
            <div className="profile-configuration-container">
                <div className="profile-header">
                    <img src={user.profile} alt="Foto do perfil" className="profile-picture" />
                    <div className="profile-info">
                        <h1 className="profile-name">{user.name}</h1>
                        <p className="profile-role">{user.type}(a)</p>
                    </div>
                </div>

                <div className="arrow-back">
                    <MyArrowBack onClick={hadleBackClick}/>
                </div>

                <div className="formePassword">
                    <MyInput
                        className="my-input"
                        textLabel="Senha antiga"
                        typeInput="password"
                        placeholder="Senha antiga"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <MyInput
                        className="my-input"
                        textLabel="Senha nova"
                        typeInput="password"
                        placeholder="Senha nova"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <MyButton className="my-button"
                        colorButton="black"
                        text="Redefinir Senha"
                        onClick={handlePasswordUpdate}
                        />
                    <MyButton className="my-button" colorButton="red" text="Excluir Conta" onClick={() => handleDeleteClick(user.id)}/>
                </div>

                {message && <p className="message">{message}</p>}

                <div>
                    <MyCodeCourses className="my-code-courses" />
                </div>
            </div>
        </>
    );
}
