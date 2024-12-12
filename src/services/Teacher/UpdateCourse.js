import axios from "axios";
const BASE_URL = "http://localhost:8084/user-app/course";

export const updateCourse = async (courseId, title, image, value, description) => {

    let data = {};


    if (title && title.trim() !== "") data.title = title;
    if (image && image.trim() !== "") data.image = image;
    if (value && value > 0) data.value = value; 
    if (description && description.trim() !== "") data.description = description;


    console.log("Dados a serem enviados:", data);

    try {

        const response = await axios.put(`${BASE_URL}/update/${courseId}`, data);
        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar o curso:", error);
        throw error;
    }
};
