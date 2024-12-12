import axios from "axios";
const BASE_URL = "http://localhost:8084/user-app/course";

export const deleteCourse = async (courseId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/delete/${courseId}`
          );
        return response.ok;
    } catch (error) {
        console.error(error);
        throw error;
    }
}