import axios from "axios";
const BASE_URL = "http://localhost:8084/user-app/module";

export const createModule = async (title, courseId) => {
    const data = { title, courseId };

    console.log("Dados a serem enviados para o módulo:", data);

    try {
        const response = await axios.post(`${BASE_URL}/save`, data);
        return response.data; 
    } catch (error) {
        console.error("Erro ao criar o módulo:", error);
        throw error;
    }
};