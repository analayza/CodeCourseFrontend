import axios from "axios";
const BASE_URL = "http://localhost:8084/user-app/module";

export const updateModule = async (moduleId, title) => {
    
    let data = {};

    
    if (title && title.trim() !== "") data.title = title;

    
    console.log("Dados a serem enviados:", data);

    try {
        
        const response = await axios.put(`${BASE_URL}/update/${moduleId}`, data);
        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar o curso:", error);
        throw error;
    }
};
