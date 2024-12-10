const BASE_URL = "http://localhost:8084/user-app";

export const registerUser = async (formData) => {
  const { name, email, password, type } = formData;

  if (!name || !email || !password || !type) {
    throw new Error("Por favor, preencha todos os campos!");
  }

  const endpoint =
    type === "Professor"
      ? `${BASE_URL}/teacher/save`
      : `${BASE_URL}/student/save`;

  const payload = {
    name,
    email,
    password,
    type,
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return "Usuário cadastrado com sucesso!";
    } else {
      throw new Error("Erro ao cadastrar o usuário. Tente novamente.");
    }
  } catch (error) {
    console.error("Erro ao realizar cadastro:", error);
    throw new Error("Erro ao realizar cadastro. Verifique os dados e tente novamente.");
  }
};
