import React from "react";
import "../../components/ArrowBack";
import "../../components/Button";
import "../../components/Input";
import MyArrowBack from "../../components/ArrowBack";
import MyButton from "../../components/Button";
import MyInput from "../../components/Input";
import MyCodeCourses from "../../components/CodeCourses";
import "../css/TeacherProfileConfiguration.css";
import profileConfiguration from '../../images/profile.png';

export default function TeacherProfileConfiguration(){
    return(
        <>
        <div className="profile-configuration-container">
            <div className="profile-header">
                <img src={profileConfiguration} alt="Foto do perfil" className="profile-picture" />
                <div className="profile-info">
                    <h1 className="profile-name">Michelly</h1>
                    <p className="profile-role">Professor(a)</p>
                </div>
            </div>

            <div className="arrow-back">
                <MyArrowBack />
            </div>

                <div className="formePassword">
                    <MyInput className="my-input" textLabel="Senha antiga" typeInput="password" placeholder="Senha antiga" />
                    <MyInput className="my-input" textLabel="Senha nova" typeInput="password" placeholder="Senha nova" />
                    <MyButton className="my-button" colorButton="black" text="Redefinir Senha" />
                    <MyButton className="my-button red" colorButton="red" text="Excluir Conta" />
                </div>

                <div>
                    <MyCodeCourses className="my-code-courses"/>
                </div>
        </div>
        </>
    )
}