import axios from "axios";
const BASE_URL = "http://localhost:8084/user-app/module";

export const updateModule = async (moduleId, title) => {
    // Cria um objeto com os dados que serão enviados
    let data = {};

    // Adiciona os campos apenas se não estiverem vazios ou nulos
    if (title && title.trim() !== "") data.title = title;

    // Log para verificar o objeto data antes do envio
    console.log("Dados a serem enviados:", data);

    try {
        // Faz a requisição PUT, passando apenas os campos preenchidos
        const response = await axios.put(`${BASE_URL}/update/${moduleId}`, data);
        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar o curso:", error);
        throw error;
    }
};
