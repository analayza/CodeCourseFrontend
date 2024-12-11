import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "../components/Button";
import MyInput from "../components/Input2";
import MyArrowBack from "../components/ArrowBack2";
import "../pages/css/RegisterPage.css";
import MyCodeCourses from "../components/CodeCourses";
import { registerUser } from "../services/Save";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    type: "",
  });

  const navigate = useNavigate(); 

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
      const successMessage = await registerUser(formData);
      alert(successMessage);
      navigate("/Login"); 
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="register-container">
      <div className="arrow-back">
        <MyArrowBack onClick={() => navigate("/Login")} />
      </div>
      <div className="register-form">
        <h3>Comece sua jornada conosco!</h3>
        <h1>
          <span>Cadastre-se na</span>
          <br />
          <span>Code Cursos</span>
        </h1>

        <div className="register-border-form">
          <form onSubmit={handleSubmit}>
            <MyInput
              placeholder="Nome"
              textLabel="Nome"
              typeInput="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              autocomplete="name"
            />
            <MyInput
              placeholder="Email"
              textLabel="Email"
              typeInput="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              autocomplete="email"
            />
            <MyInput
              placeholder="Senha"
              textLabel="Senha"
              typeInput="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              autocomplete="new-password"
            />
            <p className="user-type-label">Tipo de usuário:</p>
            <div className="radio-container">
              <label>
                <input
                  type="radio"
                  name="type"
                  value="Aluno"
                  checked={formData.type === "Aluno"}
                  onChange={handleInputChange}
                />
                Aluno
              </label>
              <label>
                <input
                  type="radio"
                  name="type"
                  value="Professor"
                  checked={formData.type === "Professor"}
                  onChange={handleInputChange}
                />
                Professor
              </label>
            </div>
            <br />
            <MyButton colorButton="black" text="Cadastrar" type="submit" />
          </form>
        </div>
      </div>

      <div className="register-image">
        <img
          src={require("../images/pinguim.jpg")}
          alt="Pinguim com fone de ouvido e computador"
        />
      </div>

      <MyCodeCourses />
    </div>
  );
}
