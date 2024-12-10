import React, { useEffect, useState } from 'react';
import { getNewModule } from "../../services/Teacher/NewModule"; 
import '../css/NewModule.css';
import MyCodeCourses from "../../components/CodeCourses";
import MyArrowBack from "../../components/ArrowBack"; 
import MyInput from '../../components/Input';
import MyButton from "../../components/Button";

export default function NewModule() {
    const [title, setTitle] = useState(""); // Estado para o título
    const [videoUrl, setVideoUrl] = useState(""); // Estado para a URL do vídeo

    const handleSave = async () => {
        try {
            const response = await fetch(`/api/create-module`, { // Atualize a rota conforme necessário
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    videoUrl,
                }),
            });

            if (!response.ok) {
                throw new Error("Erro ao salvar os dados");
            }

            console.log("Dados salvos com sucesso!");
            // Opcional: Limpar os campos após o envio bem-sucedido
            setTitle("");
            setVideoUrl("");
        } catch (error) {
            console.error("Erro ao salvar dados:", error);
        }
    };

    return (
        <div className='new-module-class-container'>
            <h1>Novo Módulo</h1>

            <div className="arrow-back">
                    <MyArrowBack />
            </div>

            <div className='new-module-class-list'>
                <div className='input-name-new-module'>
                        <label className='ew-module-label-input'>Nome</label>
                        <input type="text" className="new-module-my-input" placeholder="Nome do Módulo"/>
                </div>

                <div className='form-container-new-module'>
                    <form className='form-new-module-class' onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <MyInput 
                                className="my-input" 
                                textLabel="Título da Aula" 
                                typeInput="text" 
                                placeholder="Digite o título da aula"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <MyInput 
                                className="my-input" 
                                textLabel="URL do Vídeo" 
                                typeInput="text" 
                                placeholder="Digite a URL do vídeo"
                                value={videoUrl}
                                onChange={(e) => setVideoUrl(e.target.value)}
                            />
                        </div>

                        
                    </form>
                </div>
                <button className="circle-button"> +</button>       
            </div>

                <div className='button-new-module-class'>
                    <MyButton 
                        className="my-button" 
                        colorButton="black" 
                        text="Salvar Módulo"
                        onClick={handleSave}
                    />
                </div>
            <MyCodeCourses/>
        </div>
    );
}