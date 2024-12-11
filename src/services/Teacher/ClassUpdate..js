import axios from "axios";
const BASE_URL = "http://localhost:8084/user-app/class";

export const updateClass = async (clazzId, title, url ) => {
    // Cria um objeto com os dados que serão enviados
    let data = {};

    // Adiciona os campos apenas se não estiverem vazios ou nulos
    if (title && title.trim() !== "") data.title = title;
    if (url && url.trim() !== "") data.url = url;

    // Log para verificar o objeto data antes do envio
    console.log("Dados a serem enviados:", data);

    try {
        // Faz a requisição PUT, passando apenas os campos preenchidos
        const response = await axios.put(`${BASE_URL}/update/${clazzId}`, data);
        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar o curso:", error);
        throw error;
    }
};
