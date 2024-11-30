import React from "react";
import MyButton from "../components/Button"; // Caminho relativo para a pasta components
import MyInput from "../components/Input";  // Caminho relativo para a pasta components
import MyArrowBack from "../components/ArrowBack";  // Caminho relativo para a pasta components
import "../components/css/CourseCreationPage.css"; // Estilo adicional para a página

export default function CourseCreationPage() {
  return (
    <div className="login-container">
          <MyArrowBack className="arrow-back" />
      <h3 className="title">Criar Curso</h3>
      
      <div className="login-form">
        <div className="border-form">
          <form>
            <MyInput 
              placeholder="Digite o nome do curso" 
              textLabel="Nome do Curso" 
              typeInput="text" 
            />
            <div className="login-form-align-inputs">
              <div className="image-input">
                <MyInput 
                  placeholder="Caminho da imagem" 
                  textLabel="Imagem" 
                  typeInput="text" 
                />
              </div>
              <div className="valor-input">
                <MyInput 
                  placeholder="Digite o valor do curso" 
                  textLabel="Valor" 
                  typeInput="text" 
                />
              </div>
            </div>
            <div className="description-input">
              <label htmlFor="description">Descrição</label>
              <textarea 
                id="description" 
                placeholder="Digite uma descrição para o curso"
                className="description-textarea"
              />
            </div>
            <MyButton colorButton="black" text="Criar Curso" />
          </form>
        </div>
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
