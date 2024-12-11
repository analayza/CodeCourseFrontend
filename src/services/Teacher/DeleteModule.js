import axios from "axios";
const BASE_URL = "http://localhost:8084/user-app/module";

export const deleteModule = async (modueId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/delete/${modueId}`
          );
        return response.ok;
    } catch (error) {
        console.error(error);
        throw error;
    }
}