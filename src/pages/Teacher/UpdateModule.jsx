import React, { useEffect, useState } from 'react';
import { getModulesFromCourse } from "../../services/Teacher/UpdateModule"; 
import '../css/UpdateModule.css'; 
import MyCodeCourses from "../../components/CodeCourses";
import MyArrowBack from "../../components/ArrowBack"; 



export default function UpdateModule() {
    const [modules, setModules] = useState([]);
    const courseId = 1; 

    useEffect(() => {
        const fetchModules = async () => {
            try {
                const data = await getModulesFromCourse(courseId);
                setModules(data);
            } catch (error) {
                console.error("Erro ao carregar módulos:", error);
            }
        };

        fetchModules();
    }, [courseId]);

    const handleModuleClick = (module) => {
        console.log("Módulo clicado:", module);
        // Adicione a lógica desejada ao clicar em um módulo
    };

    return (
        <>
            <div className='update-module-container'>
                <div className="arrow-back">
                        <MyArrowBack />
                </div>

                <h1>Atualizar Módulo</h1>
                <div className="update-module-list">
                    {modules.length > 0 ? (
                        modules.map((module) => (
                        <div>
                            <button className='button-module'
                                key={module.id}
                                onClick={() => alert(`Você clicou no módulo: ${module.title}`)}
                                >
                                {module.title} 
                            </button>
                        </div>
                        ))
                    ) : (
                        <p>Nenhum módulo disponível.</p>
                    )}
                </div>

                <MyCodeCourses/>
            </div>
        </>
    );
}
