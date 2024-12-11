import axios from "axios";
const BASE_URL = "http://localhost:8084/user-app/teacher";
const BASE_Url = "http://localhost:8084/user-app/student"

export const deleteStudent = async (studentId) => {
    try {
        const response = await axios.delete(`${BASE_Url}/delete/${studentId}`
          );
        return response.ok;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const deleteTeacher = async (teacherId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/delete/${teacherId}`
        );
        return response.ok;
    } catch (error) {
        console.error(error);
        throw error;
    }
};