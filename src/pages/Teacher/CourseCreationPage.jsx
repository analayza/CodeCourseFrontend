import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MyButton from "../../components/Button";
import MyInput from "../../components/Input2";
import MyArrowBack from "../../components/ArrowBack";
import MyCodeCourses from "../../components/CodeCourses";
import { createCourse } from "../../services/Teacher/CourseLogic";
import "../css/CourseCreationPage.css";

export default function CourseCreationPage() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    value: "",
    description: "",
    idTeacher: null, 
  });

  const navigate = useNavigate(); 

  useEffect(() => {
    const { userId } = location.state || {};
    if (userId) {
      setFormData((prevData) => ({ ...prevData, idTeacher: userId }));
    }
  }, [location.state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const successMessage = await createCourse(formData);
      alert(successMessage);
      setFormData({
        title: "",
        image: "",
        value: "",
        description: "",
        idTeacher: formData.idTeacher,
      }); 
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="course-creation-container">
      <div className="arrow-back">
        <MyArrowBack onClick={() => navigate(-1)} />
      </div>
      <h3 className="course-creation-title">Criar Curso</h3>
      <div className="course-creation-form">
        <form onSubmit={handleSubmit}>
          <div className="course-creation-name-course-input">
            <MyInput
              placeholder="Digite o nome do curso"
              textLabel="Nome do Curso"
              typeInput="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              autocomplete="title"
            />
          </div>
          <div className="course-creation-align-inputs">
            <div className="course-creation-image-input">
              <MyInput
                placeholder="Caminho da imagem"
                textLabel="Imagem"
                typeInput="text"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                autocomplete="image"
              />
            </div>
            <div className="course-creation-valor-input">
              <MyInput
                placeholder="Digite o valor do curso"
                textLabel="Valor"
                typeInput="text"
                name="value"
                value={formData.value}
                onChange={handleInputChange}
                autocomplete="value"
              />
            </div>
          </div>
          <div className="course-creation-description-input">
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              placeholder="Digite uma descrição para o curso"
              className="course-creation-description-textarea"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              autocomplete="description"
            />
          </div>
          <MyButton className="course-creation-button" text="Criar Curso" type="submit" />
        </form>
      </div>
      <div className="my-code-courses-container">
        <MyCodeCourses />
      </div>
    </div>
  );
}
