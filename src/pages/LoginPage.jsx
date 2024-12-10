import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyButton from "../components/Button";
import MyInput from "../components/Input2";
import "../pages/css/LoginPage.css";
import MyCodeCourses from "../components/CodeCourses";
import { authenticateUser } from "../services/authService";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const user = await authenticateUser(formData);

      console.log("Dados do usuário:", user);

      sessionStorage.setItem("user", JSON.stringify(user));

      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-form-area">
          <h3>Comece sua jornada conosco!</h3>
          <h1>Entre na Code Cursos</h1>
          <div className="border-form">
            <form onSubmit={handleLogin}>
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
                autocomplete="current-password"
              />
              <MyButton
                colorButton="black"
                text="Entrar"
                type="submit"
              />
            </form>
            {error && <p className="error-message">{error}</p>}
            <p>
              Não possui cadastro? <Link to="/Register">Clique aqui</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="login-image">
        <img
          src={require("../images/pinguim.jpg")}
          alt="Pinguim com fone de ouvido e computador"
        />
      </div>
      <MyCodeCourses />
    </div>
  );
}
