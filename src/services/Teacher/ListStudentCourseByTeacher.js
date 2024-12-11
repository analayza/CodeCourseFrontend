import axios from "axios";
const BASE_URL = "http://localhost:8084/user-app/registerCourse";

export const getStudentCourseByTeacher = async (cursoId) => {
    try {
        const response = await axios.get(`${BASE_URL}/listCourseUsers/${cursoId}`);
        return response.data; 
    } catch (error) {
        console.error("Erro ao buscar os módulos do curso:", error);
        throw error; 
    }
};
