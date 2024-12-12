import React, { useEffect, useState } from 'react';
import { getModulesFromCourse } from "../../services/Teacher/UpdateModule"; 
import '../css/UpdateModule.css'; 
import MyCodeCourses from "../../components/CodeCourses";
import MyArrowBack from "../../components/ArrowBack"; 
import MyButtonDelete from '../../components/ButtonDelete';
import { useNavigate } from "react-router-dom";
import { deleteModule } from '../../services/Teacher/DeleteModule';
import { useLocation } from "react-router-dom";


export default function UpdateModule() {
    const [modules, setModules] = useState([]);
    const navitage = useNavigate();
    const location = useLocation();
    const course = location.state?.course;
    console.log(course)
    const courseId = course.id;

    const hadleListModules = () => {
        navitage('/UpdateCourse', { state: { course } })
    };

    const hadleupdateModuleClass = (module) => {
        navitage('/UpdateModuleClass', { state: { module, course }})
        console.log(course)
    };

    const handleDeleteModule = async (moduleId) => {
        try {
            await deleteModule(moduleId); 
            setModules((prevModules) => prevModules.filter((module) => module.id !== moduleId)); // Atualiza a lista
            console.log("Módulo deletado com sucesso:", moduleId);
            alert('Módulo deletado com sucesso!');
        } catch (error) {
            console.error("Erro ao deletar o módulo:", error);
        }
    };


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
                        <MyArrowBack onClick={hadleListModules}/>
                </div>

                <h1>Atualizar Módulo</h1>
                <div className="update-module-list">
                    {modules.length > 0 ? (
                        modules.map((module) => (
                        <div className='container-buttons-update-module'>
                            <button className='button-module'
                                key={module.id}
                                onClick={() => {hadleupdateModuleClass(module)}}
                                >
                                {module.title}
                                
                            </button>
                            
                                <MyButtonDelete onClick={() => handleDeleteModule(module.id)}/>
                            
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
