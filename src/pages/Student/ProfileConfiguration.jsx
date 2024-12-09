import React, { useState } from "react";
import "../../components/ArrowBack";
import "../../components/Button";
import "../../components/Input";
import MyArrowBack from "../../components/ArrowBack";
import MyButton from "../../components/Button";
import MyInput from "../../components/Input";
import MyCodeCourses from "../../components/CodeCourses";
import { updatePassword } from "../../services/Teacher/UpdatePassword"; // O caminho do serviço
import "../css/ProfileConfiguration.css";
import profileConfiguration from '../../images/profile.png';

export default function ProfileConfiguration() {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");

    const handlePasswordUpdate = async () => {
        try {
            const response = await updatePassword(oldPassword, newPassword);
            setMessage("Senha atualizada com sucesso!");
            setOldPassword("");
            setNewPassword("");
        } catch (error) {
            setMessage("Erro ao atualizar a senha. Verifique os dados e tente novamente.");
        }
    };

    return (
        <>
            <div className="profile-configuration-container">
                <div className="profile-header">
                    <img src={profileConfiguration} alt="Foto do perfil" className="profile-picture" />
                    <div className="profile-info">
                        <h1 className="profile-name">Pedrina</h1>
                        <p className="profile-role">Aluno(a)</p>
                    </div>
                </div>

                <div className="arrow-back">
                    <MyArrowBack />
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
                    <MyButton
                        className="my-button"
                        colorButton="black"
                        text="Redefinir Senha"
                        onClick={handlePasswordUpdate}
                    />
                    <MyButton className="my-button red" colorButton="red" text="Excluir Conta" />
                </div>

                {message && <p className="message">{message}</p>}

                <div>
                    <MyCodeCourses className="my-code-courses" />
                </div>
            </div>
        </>
    );
}
