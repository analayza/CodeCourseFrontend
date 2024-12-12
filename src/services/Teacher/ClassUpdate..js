import axios from "axios";
const BASE_URL = "http://localhost:8084/user-app/class";

export const updateClass = async (clazzId, title, url ) => {
    
    let data = {};

    
    if (title && title.trim() !== "") data.title = title;
    if (url && url.trim() !== "") data.url = url;

    
    console.log("Dados a serem enviados:", data);

    try {
        
        const response = await axios.put(`${BASE_URL}/update/${clazzId}`, data);
        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar o curso:", error);
        throw error;
    }
};
