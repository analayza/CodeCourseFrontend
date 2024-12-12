export const createCourse = async (formData) => {
  const { title, image, value, description, idTeacher } = formData;

  if (!title || !image || !value || !description || !idTeacher) {
    throw new Error("Por favor, preencha todos os campos!");
  }

  const endpoint = "http://localhost:8083/course-app/course/save";

  const payload = {
    id: 0, 
    title,
    image,
    value,
    description,
    idTeacher, 
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
      return "Curso criado com sucesso!";
    } else {
      throw new Error("Erro ao criar o curso. Tente novamente.");
    }
  } catch (error) {
    console.error("Erro ao realizar a criação do curso:", error);
    throw new Error("Erro ao criar curso. Verifique os dados e tente novamente.");
  }
};
