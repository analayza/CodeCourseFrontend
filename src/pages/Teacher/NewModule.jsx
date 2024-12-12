import React, { useState, useEffect } from 'react';
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


    const course = location.state?.course;
    const courseId = course?.id;
    console.log(course);
    useEffect(() => {
        if (!courseId) {
            console.error("Curso não encontrado ou não foi passado corretamente.");
        }
    }, [courseId]);

  
    const addModule = () => {
        setModules([...modules, { title: "", videoUrl: "" }]);
    };

    const handleSave = async (e) => {
        e.preventDefault();

        if (!moduleTitle.trim()) {
            console.error("Título do módulo não informado.");
            return;
        }

        if (!courseId) {
            console.error("Curso não encontrado.");
            return;
        }

        try {
            const newModule = await createModule(moduleTitle, courseId); 
            console.log("Novo módulo salvo com sucesso:", newModule);
            alert('Módulo atualizado com sucesso!');

            
            if (classTitle.trim() && classUrl.trim()) {
                const newClass = await createClass(classTitle, classUrl, newModule.id);
                console.log("Nova aula salva com sucesso:", newClass);
                alert('Aula atualizada com sucesso!');
            }
        } catch (error) {
            console.error("Erro ao salvar o módulo e/ou aula:", error);
        }
    };

    const hadleNewModule = () => {
        navitage('/UpdateCourse', { state: { course } })
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
