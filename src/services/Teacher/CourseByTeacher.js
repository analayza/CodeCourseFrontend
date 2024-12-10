import axios from "axios";

const BASE_URL = "http://localhost:8084/user-app/course";

export const getCourseByTeacher = async (teacherId) => {
    try {
        const response = await axios.get(`${BASE_URL}/listCourseByTeacher/${teacherId}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar os cursos do estudante:", error);
        throw error;
    }
};