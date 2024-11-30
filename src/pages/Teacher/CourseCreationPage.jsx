import React from "react";
import MyButton from "../components/Button"; 
import MyInput from "../components/Input";  
import MyArrowBack from "../components/ArrowBack"; 
import "../css/CourseCreationPage.css"; 
import MyCodeCourses from "../../components/CodeCourses";

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

      <MyCodeCourses/>
    </div>
  );
}
