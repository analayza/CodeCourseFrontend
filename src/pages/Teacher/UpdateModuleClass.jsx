import React, { useEffect, useState } from 'react';
import { getClassFromModules } from "../../services/Teacher/UpdateModuleClass"; 
import '../css/UpdateModuleClass.css';
import MyCodeCourses from "../../components/CodeCourses";
import MyArrowBack from "../../components/ArrowBack"; 
import MyInput from '../../components/Input';
import MyButton from "../../components/Button";
import MyButtonDelete from '../../components/ButtonDelete';

export default function UpdateModuleClass() {
    const [classes, setClasses] = useState([]);
    const [selectedClass, setSelectedClass] = useState(null);
    const moduleId = 1; 

    useEffect(() => {
        const fetchModulesClass = async () => {
            try {
                const data = await getClassFromModules(moduleId);
                setClasses(data);
            } catch (error) {
                console.error("Erro ao carregar módulos:", error);
            }
        };

        fetchModulesClass();
    }, [moduleId]);

    const handleModuleClick = (moduleClass) => {
        setSelectedClass(moduleClass); 
        console.log("Aula clicada:", moduleClass);
    };

    return (
        <>
            <div className='update-module-class-container'>
                <div className="arrow-back">
                    <MyArrowBack />
                </div>

                <h1>Atualizar Módulo</h1>
                <div className="update-module-class-list">
                    <div className='input-name-module'>
                        <label className='labelInput'>Nome</label>
                        <input type="text" className="my-input" placeholder="Digite o novo nome do Módulo"/>
                    </div>
                    {classes.length > 0 ? (
                        classes.map((moduleClass) => (
                            <div key={moduleClass.id} className='container-buttons-update-module-class'>
                                <button 
                                    className='button-module-class'
                                    onClick={() => handleModuleClick(moduleClass)}
                                >
                                    {moduleClass.title}
                                </button>
                                <MyButtonDelete onClick={() => {}}/>
                            </div>
                        ))
                    ) : (
                        <p>Nenhuma Aula e Modulo disponíveis para serem Atualizados.</p>
                    )}  

                        {selectedClass && (
                        <div className="form-container">
                            <h3>{selectedClass.title}</h3>
                            <form className='form-update-module-class'>
                                <div>
                                    <MyInput className="my-input" textLabel="Título da aula" typeInput="text" placeholder="Digite o título da aula"/>
                                </div>
                                <div>
                                    <MyInput className="my-input" textLabel="URL do Video" typeInput="text" placeholder="Digite a URL do vídeo"/>
                                </div>
                            </form>
                        </div>
                    )}  
                </div>

                <div className='button-update-module-class'>
                    <MyButton className="my-button" colorButton="black" text="Atualizar Módulo" />
                </div>
            </div>

            
            <MyCodeCourses/>
        </>
    );
}
