import axios from "axios";


const BASE_URL = "http://localhost:8084/user-app/registerCourse";

export const AcquirngCourse = async (courseId, userId, userName) => {
    try {
        
        if (typeof courseId !== 'number' || typeof userId !== 'number') {
          throw new Error('courseId e userId devem ser números');
        }
    
        
        const response = await axios.post(`${BASE_URL}/Register/`,{
          courseId,
          userId,
          userName,
        });
    
        
        if (response.status === 200) {
          console.log('Curso adquirido com sucesso!', response.data);
          return response.data;
        } else {
          console.error(`Falha ao adquirir o curso. Status: ${response.status}, Mensagem: ${response.data.message || 'Erro desconhecido'}`);
          return null;
        }
      } catch (error) {
        console.error('Erro ao adquirir o curso:', error);
       
        console.error('Detalhes do erro:', {
          method: error.config.method,
          url: error.config.url,
          data: error.config.data,
          headers: error.config.headers,
        });
        throw error;
      }
}
