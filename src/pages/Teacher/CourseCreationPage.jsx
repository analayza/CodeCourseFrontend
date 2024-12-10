import React from "react";
import MyButton from "../../components/Button";
import MyInput from "../../components/Input2";
import MyArrowBack from "../../components/ArrowBack";
import MyCodeCourses from "../../components/CodeCourses";
import "../css/CourseCreationPage.css";

export default function CourseCreationPage() {
  return (
    <div className="course-creation-container">
      <div className="arrow-back">
        <MyArrowBack />
      </div>
      <h3 className="course-creation-title">Criar Curso</h3>
      <div className="course-creation-form">
        
       <form>
              <div className="course-creation-name-course-input">
              <MyInput 
                placeholder="Digite o nome do curso"
                textLabel="Nome do Curso"
                typeInput="text"
              />
              </div>
              <div className="course-creation-align-inputs">
                <div className="course-creation-image-input">
                  <MyInput
                    placeholder="Caminho da imagem"
                    textLabel="Imagem"
                    typeInput="text"
                  />
                </div>
                <div className="course-creation-valor-input">
                  <MyInput
                    placeholder="Digite o valor do curso"
                    textLabel="Valor"
                    typeInput="text"
                  />
                </div>
              </div>
              <div className="course-creation-description-input">
                <label htmlFor="description">Descrição</label>
                <textarea
                  id="description"
                  placeholder="Digite uma descrição para o curso"
                  className="course-creation-description-textarea"
                />
              </div>
              <MyButton className="course-creation-button" text="Criar Curso" />
            </form>
      </div>

      <div className="my-code-courses-container">
        <MyCodeCourses />
      </div>
    </div>
  );
}
