import React from "react";
import MyButton from "../components/Button";
import MyInput from "../components/Input";  
import "../pages/css/LoginPage.css"; 
import MyCodeCourses from "../components/CodeCourses";

export default function LoginPage() {
  return (
    <div className="login-container">
      
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

      
      <div className="login-image">
        <img
          src={require('../images/pinguim.jpg')}
          alt="Pinguim com fone de ouvido e computador"
        />
      </div>

        <MyCodeCourses/>
    </div>
  );
}
