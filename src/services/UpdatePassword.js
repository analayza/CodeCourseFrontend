import axios from "axios";
const BASE_URL = "http://localhost:8084/user-app/teacher";
const BASE_Url = "http://localhost:8084/user-app/student"

export const updatePasswordStudent = async (studentId, oldPassword, newPassword) => {
    try {
        const response = await axios.put(`${BASE_Url}/update-password/${studentId}`, {
            studentId,
            oldPassword,
            newPassword,
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar a senha:", error);
        throw error;
    }
};

export const updatePasswordTeacher = async (teacherId, oldPassword, newPassword) => {
    try {
        const response = await axios.put(`${BASE_URL}/update-password/${teacherId}`, {
            teacherId,
            oldPassword,
            newPassword,
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar a senha:", error);
        throw error;
    }
};