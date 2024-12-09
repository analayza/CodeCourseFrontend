// app.post('/api/create-module', async (req, res) => {
//     const { title, videoUrl } = req.body;

//     try {
//         // Salva os dados no banco
//         await db.createModule({ title, videoUrl });
//         res.status(201).send({ message: "Módulo criado com sucesso!" });
//     } catch (error) {
//         res.status(500).send({ error: "Erro ao criar o módulo." });
//     }
// });