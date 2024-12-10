const BASE_URL = "http://localhost:8084/user-app";

export const authenticateUser = async (formData) => {
  const { email, password } = formData;

  if (!email || !password) {
    throw new Error("Por favor, preencha todos os campos!");
  }

  const endpoint = `${BASE_URL}/login/?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const userData = await response.json();
      return userData;
    } else if (response.status === 404) {
      throw new Error("Usuário não cadastrado.");
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || "Erro ao autenticar. Tente novamente.");
    }
  } catch (error) {
    console.error("Erro ao autenticar:", error);
    throw new Error("Erro ao conectar ao servidor. Tente novamente.");
  }
};
