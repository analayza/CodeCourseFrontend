import React, { useState, useEffect } from 'react';
import { getNewModule } from "../../services/Teacher/NewModule"; 
import '../css/NewModule.css';
import MyCodeCourses from "../../components/CodeCourses";
import MyArrowBack from "../../components/ArrowBack"; 
import MyInput from '../../components/Input';
import MyButton from "../../components/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { createClass } from '../../services/Teacher/CreateClass';
import { createModule } from '../../services/Teacher/CreateModule';

export default function NewModule() {
    const [modules, setModules] = useState([]); 
    const [moduleTitle, setModuleTitle] = useState('');
    const [classTitle, setClassTitle] = useState('');
    const [classUrl, setClassUrl] = useState('');
    const [selectedClass, setSelectedClass] = useState(null);
    const navitage = useNavigate();
    const location = useLocation();

    // Garantir que o curso seja passado corretamente via useLocation
    const course = location.state?.course;
    const courseId = course?.id;
    console.log(course);
    useEffect(() => {
        if (!courseId) {
            console.error("Curso não encontrado ou não foi passado corretamente.");
        }
    }, [courseId]);

    // Função para adicionar um novo módulo
    const addModule = () => {
        setModules([...modules, { title: "", videoUrl: "" }]);
    };

    const handleSave = async (e) => {
        e.preventDefault();

        // Verifique se moduleTitle é válido
        if (!moduleTitle.trim()) {
            console.error("Título do módulo não informado.");
            return;
        }

        if (!courseId) {
            console.error("Curso não encontrado.");
            return;
        }

        try {
            // Salvar o novo módulo
            const newModule = await createModule(moduleTitle, courseId); // Passando o ID do curso para o módulo
            console.log("Novo módulo salvo com sucesso:", newModule);

            // Verifique se há uma aula selecionada e salve a aula também
            if (classTitle.trim() && classUrl.trim()) {
                const newClass = await createClass(classTitle, classUrl, newModule.id);
                console.log("Nova aula salva com sucesso:", newClass);
            }
        } catch (error) {
            console.error("Erro ao salvar o módulo e/ou aula:", error);
        }
    };

    const hadleNewModule = () => {
        navitage('/UpdateCourse')
    };

    return (
        <div className='new-module-class-container'>
            <h1>Novo Módulo</h1>

            <div className="arrow-back">
                <MyArrowBack onClick={hadleNewModule}/>
            </div>

            <div className='new-module-class-list'>
                <div className='input-name-new-module'>
                    <label className='new-module-label-input'>Nome</label>
                    <input 
                        type="text" 
                        className="new-module-my-input" 
                        placeholder="Nome do Módulo" 
                        value={moduleTitle} 
                        onChange={(e) => setModuleTitle(e.target.value)} 
                    />
                </div>

                {modules.map((module, index) => (
                    <div key={index} className='form-container-new-module'>
                        <form className='form-new-module-class'>
                            <div>
                                <MyInput
                                    className="my-input"
                                    textLabel="Título da Aula"
                                    typeInput="text"
                                    placeholder="Digite o título da aula"
                                    value={classTitle}
                                    onChange={(e) => setClassTitle(e.target.value)}
                                />
                            </div>
                            <div>
                                <MyInput
                                    className="my-input"
                                    textLabel="URL do Vídeo"
                                    typeInput="text"
                                    placeholder="Digite a URL do vídeo"
                                    value={classUrl}
                                    onChange={(e) => setClassUrl(e.target.value)}
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
