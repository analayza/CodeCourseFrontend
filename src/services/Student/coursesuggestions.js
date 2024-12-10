import axios from "axios";

const BASE_URL = "http://localhost:8084/user-app/registerCourse";

export const getCourseSuggestions = async (studentId) => {
    try {
        const response = await axios.get(`${BASE_URL}/listFindCoursesThatStudentDoesNotHave/${studentId}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar os cursos do estudante:", error);
        throw error;
    }
};