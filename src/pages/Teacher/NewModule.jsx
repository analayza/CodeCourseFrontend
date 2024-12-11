import React, { useState } from 'react';
import { getNewModule } from "../../services/Teacher/NewModule"; 
import '../css/NewModule.css';
import MyCodeCourses from "../../components/CodeCourses";
import MyArrowBack from "../../components/ArrowBack"; 
import MyInput from '../../components/Input';
import MyButton from "../../components/Button";

export default function NewModule() {
    const [modules, setModules] = useState([]); // Estado para armazenar os módulos

    // Função para adicionar um novo módulo
    const addModule = () => {
        setModules([...modules, { title: "", videoUrl: "" }]);
    };

    // Função para atualizar o título e a URL do vídeo de um módulo específico
    const handleInputChange = (index, field, value) => {
        const updatedModules = [...modules];
        updatedModules[index][field] = value;
        setModules(updatedModules);
    };

    // Função para salvar os dados
    const handleSave = async () => {
        try {
            const response = await fetch(`/api/create-module`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(modules), // Envia todos os módulos de uma vez
            });

            if (!response.ok) {
                throw new Error("Erro ao salvar os dados");
            }

            console.log("Dados salvos com sucesso!");
            // Opcional: Limpar os campos após o envio bem-sucedido
            setModules([]);
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

                {modules.map((module, index) => (
                    <div key={index} className='form-container-new-module'>
                        <form className='form-new-module-class' onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <MyInput
                                    className="my-input"
                                    textLabel="Título da Aula"
                                    typeInput="text"
                                    placeholder="Digite o título da aula"
                                    value={module.title}
                                    onChange={(e) => handleInputChange(index, 'title', e.target.value)}
                                />
                            </div>
                            <div>
                                <MyInput
                                    className="my-input"
                                    textLabel="URL do Vídeo"
                                    typeInput="text"
                                    placeholder="Digite a URL do vídeo"
                                    value={module.videoUrl}
                                    onChange={(e) => handleInputChange(index, 'videoUrl', e.target.value)}
                                />
                            </div>
                        </form>
                    </div>
                ))}
                <button className="circle-button" onClick={addModule}>+</button>       
            </div>

            <div className='button-new-module-class'>
                <MyButton 
                    className="my-button" 
                    colorButton="black" 
                    text="Salvar Módulo"
                    onClick={handleSave}
                />
            </div>
            <MyCodeCourses />
        </div>
    );
}
