import React from "react";
import MyButton from "../components/Button"; // Caminho relativo para a pasta components
import MyInput from "../components/Input";  // Caminho relativo para a pasta components
import "../components/css/RegisterPage.css"; // Estilo adicional para a página

export default function LoginPage() {
  return (
    <div className="login-container">
      {/* Lado esquerdo - Formulário */}
      <div className="login-form">
        <h3>Comece sua jornada conosco!</h3>
        <h1>Cadastre-se na Code Cursos</h1>
        <div className="border-form">
          <form>
            <MyInput
              placeholder="nome"
              textLabel="Nome"
              typeInput="name"
            />
            <MyInput
              placeholder="email"
              textLabel="Email"
              typeInput="email"
            />
            <MyInput
              placeholder="senha"
              textLabel="Senha"
              typeInput="password"
            />
            <p className="user-type-label">Tipo de usuário:</p>

            {/* Checkboxes para Aluno e Professor */}
            <div className="checkbox-container">
              <label>
                <input type="checkbox" name="user-type" value="aluno" />
                Aluno
              </label>
              <label>
                <input type="checkbox" name="user-type" value="professor" />
                Professor
              </label>
            </div>
            <br />

            <MyButton
              colorButton="black"
              text="Cadastrar"
            />
          </form>
        </div>
      </div>

      {/* Lado direito - Imagem */}
      <div className="login-image">
        <img
          src={require('../components/Image/pinguim.jpg')}
          alt="Pinguim com fone de ouvido e computador"
        />
      </div>
      <div className="footer">
      <div className="logo-container">
          <img 
            src={require('../components/Image/Codepen.png')} 
            alt="Logo do CodeCursos" 
            className="logo" 
          />
        </div>
        <span className="footer-text">CodeCursos</span>
      </div>
      
    </div>
  );
}
