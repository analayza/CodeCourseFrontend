import axios from "axios";
const BASE_URL = "http://localhost:8084/user-app/module";

export const getModulesFromCourse = async (cursoId) => {
    try {
        const response = await axios.get(`${BASE_URL}/listModuleCurseById/${cursoId}`);
        return response.data; 
    } catch (error) {
        console.error("Erro ao buscar os módulos do curso:", error);
        throw error; 
    }
};