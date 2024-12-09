
import axios from "axios";
const BASE_URL = "http://localhost:8084/user-app/teacher";

export const updatePassword = async (teacherId, oldPassword, newPassword) => {
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
