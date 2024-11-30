import React from "react";
import MyButton from "../components/Button"; // Caminho relativo para a pasta components
import MyInput from "../components/Input";  // Caminho relativo para a pasta components
import "../components/css/LoginPage.css"; // Estilo adicional para a página

export default function LoginPage() {
  return (
    <div className="login-container">
      {/* Lado esquerdo - Formulário */}
      <div className="login-form">
        <h3>Comece sua jornada conosco!</h3>
        <h1>Entre na Code Cursos</h1>
        <div className="border-form">
          <form>
            <MyInput
              placeholder="email"
              textLabel="Email"
              typeInput="email"
            />
            <br />
            <MyInput
              placeholder="senha"
              textLabel="Senha"
              typeInput="password"
            />
            <br />
            <MyButton
              colorButton="black"
              text="Entrar"
            />
          </form>
          <br />
          <br />
          <p>
            Não possui cadastro? <a href="#cadastro">Clique aqui</a>
          </p>
        </div>
      </div>

      {/* Lado direito - Imagem */}
      <div className="login-image">
        <img
          src={require('../components/Image/pinguim.jpg')}
          alt="Pinguim com fone de ouvido e computador"
        />
      </div>

      {/* Rodapé com logo e nome CodeCursos */}
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
