import axios from "axios";
const BASE_URL = "http://localhost:8084/user-app/class";

export const createClass = async (title, url, moduleId) => {
    const data = { title, url, moduleId };
    console.log("Dados a serem enviados para a aula:", data);

    try {
        const response = await axios.post(`${BASE_URL}/save`, data);
        return response.data;
    } catch (error) {
        console.error("Erro ao criar a aula:", error);
        throw error;
    }
};