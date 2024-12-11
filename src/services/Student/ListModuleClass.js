import axios from "axios";
const BASE_URL = "http://localhost:8084/user-app/class";

export const getClassFromModule = async (moduleId) => {
    try {
        const response = await axios.get(`${BASE_URL}/listClassModule/${moduleId}`);
        return response.data; 
    } catch (error) {
        console.error("Erro ao buscar os módulos do curso:", error);
        throw error; 
    }
};