import React from "react";
import MyButton from "../../components/Button"; 
import MyInput from "../../components/Input";  
import MyArrowBack from "../../components/ArrowBack"; 
import "../css/UpdateCourse.css"; 
import MyCodeCourses from "../../components/CodeCourses";

export default function UpdateCourse(){
    return(
        <div className="update-courses-container ">
            <div className="arrow-back">
                    <MyArrowBack />
            </div>
        <h3 className="title">Atualizar Curso</h3>
        
        <div className="update-courses-form">
            <div className="border-form">
                <form>
                    <MyInput 
                    placeholder="Digite o novo nome do curso" 
                    textLabel="Nome do Curso" 
                    typeInput="text" 
                    />
                    <div className="atualizar-curso-form-align-inputs">
                        <div className="image-input">
                            <MyInput 
                            placeholder="URL da imagem" 
                            textLabel="Imagem" 
                            typeInput="text" 
                            />
                        </div>
                        <div className="valor-input">
                            <MyInput 
                            placeholder="Digite o novo valor do curso" 
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
                    <div className="buttons-update-courses">
                        <MyButton colorButton="black" text="Atualizar Curso" />
                        <MyButton colorButton="black" text="Adicionar Novo Modulo" />
                        <MyButton colorButton="black" text="Atualizar Modulos" />
                    </div>
                    
                </form>
            </div>
        </div>
        <MyCodeCourses/>
    </div>
    )
}
