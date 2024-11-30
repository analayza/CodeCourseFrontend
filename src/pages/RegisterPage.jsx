import React from "react";
import MyButton from "../components/Button"; 
import MyInput from "../components/Input";  
import "../pages/css/RegisterPage.css"; 
import MyCodeCourses from "../components/CodeCourses";

export default function LoginPage() {
  return (
    <div className="login-container">
      
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
