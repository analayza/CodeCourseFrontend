import MyButton from "../../components/Button"; 
import MyInput from "../../components/Input";  
import MyArrowBack from "../../components/ArrowBack"; 
import "../css/UpdateCourse.css"; 
import MyCodeCourses from "../../components/CodeCourses";
import { updateCourse } from "../../services/Teacher/UpdateCourse";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function UpdateCourse() {
    const location = useLocation();
    const course = location.state?.course;  
    console.log(course);
    const navitage = useNavigate();
    const user = JSON.parse(sessionStorage.getItem("user"));
    

    
    const [courseTitle, setCourseName] = useState(course?.title || ""); 
    const [imageURL, setImageURL] = useState(course?.image || ""); 
    const [courseValue, setCourseValue] = useState(course?.value || ""); 
    const [description, setDescription] = useState(course?.description || ""); 

    const hadleNewModule = () => {
        navitage('/NewModule', { state: { course }})
        console.log(course)
    };

    const hadleListModules = () => {
        navitage('/UpdateModule', { state: { course }})
        console.log(course)
    };

    const hadleBackDetails= () => {
        navitage('/course-details', { state: { course, user }})
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        
        if (!course) {
            console.error("Curso não encontrado.");
            return;
        }

        
        const finalCourseTitle = courseTitle.trim() === "" ? course.title : courseTitle;
        const finalImageURL = imageURL.trim() === "" ? course.image : imageURL;
        const finalCourseValue = 
        (String(courseValue).trim() === "" || isNaN(courseValue)) 
            ? course.value 
            : courseValue;
        const finalDescription = description.trim() === "" ? course.description : description;

        
        console.log({
            finalCourseTitle,
            finalImageURL,
            finalCourseValue,
            finalDescription
        });

        try {
            const updatedCourse = await updateCourse(course.id, finalCourseTitle, finalImageURL, finalCourseValue, finalDescription);
            console.log("Curso atualizado com sucesso:", updatedCourse);
            alert('Curso atualizado com sucesso!');
        } catch (error) {
            console.error("Erro ao atualizar o curso:", error);
        }
    };

    return (
        <div className="update-courses-container">
            <div className="arrow-back">
                <MyArrowBack onClick={hadleBackDetails}/>
            </div>
            <h3 className="title">Atualizar Curso</h3>
            
            <div className="update-courses-form">
                <div className="border-forms">
                    <form onSubmit={handleSubmit}>
                        <MyInput 
                            placeholder="Digite o novo nome do curso" 
                            textLabel="Nome do Curso" 
                            typeInput="text" 
                            value={courseTitle} 
                            onChange={(e) => setCourseName(e.target.value)}
                        />
                        <div className="atualizar-curso-form-align-inputs">
                            <div className="image-input">
                                <MyInput 
                                    placeholder="URL da imagem" 
                                    textLabel="Imagem" 
                                    typeInput="text" 
                                    value={imageURL} 
                                    onChange={(e) => setImageURL(e.target.value)}
                                />
                            </div>
                            <div className="valor-input">
                                <MyInput 
                                    placeholder="Digite o novo valor do curso" 
                                    textLabel="Valor" 
                                    typeInput="text" 
                                    value={courseValue} 
                                    onChange={(e) => setCourseValue(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="description-input">
                            <label htmlFor="description">Descrição</label>
                            <textarea 
                                id="description" 
                                placeholder="Digite uma descrição para o curso"
                                className="description-textarea"
                                value={description} 
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="buttons-update-courses">
                            <MyButton colorButton="black" text="Atualizar Curso" type="submit"/>
                            <MyButton colorButton="black" text="Adicionar Novo Modulo" onClick={hadleNewModule}/>
                            <MyButton colorButton="black" text="Atualizar Modulos" onClick={hadleListModules}/>
                        </div>
                    </form>
                </div>
            </div>
            <MyCodeCourses />
        </div>
    );
}
