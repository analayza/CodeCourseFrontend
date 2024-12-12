import React, { useEffect, useState } from 'react';
import { getClassFromModules } from "../../services/Teacher/UpdateModuleClass"; 
import '../css/UpdateModuleClass.css';
import MyCodeCourses from "../../components/CodeCourses";
import MyArrowBack from "../../components/ArrowBack"; 
import MyInput from '../../components/Input';
import MyButton from "../../components/Button";
import MyButtonDelete from '../../components/ButtonDelete';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {deleteModuleClass} from "../../services/Teacher/DeleteModuleClass";
import { updateModule } from '../../services/Teacher/ModuleUpdate';
import { updateClass } from '../../services/Teacher/ClassUpdate.';

export default function UpdateModuleClass() {
    const [classes, setClasses] = useState([]);
    const [selectedClass, setSelectedClass] = useState(null);
    const [classTitle, setClassTitle] = useState('');
    const [classUrl, setClassUrl] = useState('');
    const location = useLocation();
    const module = location.state?.module;
    const course = location.state?.course;
    console.log(module)
    const navitage = useNavigate();
    const [moduleTitle, setModuleTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Verifique se module é válido e atribua os valores de forma adequada
        if (!module) {
            console.error("Módulo não encontrado.");
            return;
        }
    
        const finalModuleTitle = moduleTitle.trim() === "" ? module.title : moduleTitle;
        console.log({ finalModuleTitle });
    
        try {
            // Atualizar o módulo
            const updatedModule = await updateModule(module.id, finalModuleTitle);
            console.log("Módulo atualizado com sucesso:", updatedModule);
    
            // Verifique se há uma aula selecionada e atualize a aula também
            if (selectedClass) {
                const finalClassTitle = classTitle.trim() === "" ? selectedClass.title : classTitle;
                const finalClassUrl = classUrl.trim() === "" ? selectedClass.url : classUrl;
    
                // Atualizar a aula
                const updatedClass = await updateClass(selectedClass.id, finalClassTitle, finalClassUrl);
                console.log("Aula atualizada com sucesso:", updatedClass);
                alert('Módulo e/ou Aula com sucesso!');
            }
        } catch (error) {
            console.error("Erro ao atualizar o módulo e/ou aula:", error);
        }
    };
    
    const handleDeleteModuleClass = async (clazzId) => {
        try {
            await deleteModuleClass(clazzId); 
            setClasses((prevModules) => prevModules.filter((classes) => classes.id !== clazzId)); // Atualiza a lista
            console.log("Módulo deletado com sucesso:", clazzId);
            alert('Aula deletada com sucesso!');
        } catch (error) {
            console.error("Erro ao deletar o módulo:", error);
        }
    };

    const hadleNewModule = () => {
        navitage('/UpdateModule', { state: {module, course}})
    };

    useEffect(() => {
        const fetchModulesClass = async () => {
            try {
                const data = await getClassFromModules(module.id);
                setClasses(data);
            } catch (error) {
                console.error("Erro ao carregar módulos:", error);
            }
        };

        fetchModulesClass();
    }, [module.id]);

    const handleModuleClick = (moduleClass) => {
        if (selectedClass?.id === moduleClass.id) {
            // Se o módulo clicado já estiver selecionado, desmarque-o
            setSelectedClass(null);
        } else {
            // Caso contrário, selecione o módulo
            setSelectedClass(moduleClass);
        }
        console.log("Aula clicada:", moduleClass);
    };

    return (
        <>
            <div className='update-module-class-container'>
                <div className="arrow-back">
                    <MyArrowBack onClick={hadleNewModule}/>
                </div>

                <h1>Atualizar Módulo</h1>
                <div className="update-module-class-list">
                    <div className='input-name-module'>
                        <label className='labelInput'>Nome</label>
                        <input type="text" className="my-input" placeholder="Digite o novo nome do Módulo" value={moduleTitle} onChange={(e) => setModuleTitle(e.target.value)}/>
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
                                <MyButtonDelete onClick={() => {
                                    handleDeleteModuleClass(moduleClass.id);
                                        }} />
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
                                    <MyInput className="my-input" textLabel="Título da aula" typeInput="text" placeholder="Digite o título da aula" value={classTitle} onChange={(e)=> setClassTitle(e.target.value)}/>
                                </div>
                                <div>
                                    <MyInput className="my-input" textLabel="URL do Video" typeInput="text" placeholder="Digite a URL do vídeo" value={classUrl} onChange={(e)=> setClassUrl(e.target.value)}/>
                                </div>
                            </form>
                        </div>
                    )}  
                </div>

                <div className='button-update-module-class'>
                    <MyButton className="my-button" colorButton="black" text="Atualizar Módulo" onClick={handleSubmit}/>
                </div>
            </div>

            
            <MyCodeCourses/>
        </>
    );
}
