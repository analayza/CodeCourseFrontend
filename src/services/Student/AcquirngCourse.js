import axios from "axios";

// URL base da sua API
const BASE_URL = "http://localhost:8084/user-app/registerCourse";

export const AcquirngCourse = async (courseId, userId, userName) => {
    try {
        // Validação básica dos dados (ajuste conforme necessário)
        if (typeof courseId !== 'number' || typeof userId !== 'number') {
          throw new Error('courseId e userId devem ser números');
        }
    
        // Enviando o POST para a API com os dados necessários
        const response = await axios.post(`${BASE_URL}/Register/`,{
          courseId,
          userId,
          userName,
        });
    
        // Verificando se a resposta foi bem-sucedida
        if (response.status === 200) {
          console.log('Curso adquirido com sucesso!', response.data);
          return response.data;
        } else {
          console.error(`Falha ao adquirir o curso. Status: ${response.status}, Mensagem: ${response.data.message || 'Erro desconhecido'}`);
          return null;
        }
      } catch (error) {
        console.error('Erro ao adquirir o curso:', error);
        // Logar informações adicionais sobre o erro (opcional)
        console.error('Detalhes do erro:', {
          method: error.config.method,
          url: error.config.url,
          data: error.config.data,
          headers: error.config.headers,
        });
        throw error;
      }
}
