import { useLocation } from "react-router-dom";
import "../pages/css/CourseDetails.css"
import MyCodeCourses from "../components/CodeCourses";
import MyArrowBack from "../components/ArrowBack";
import { getModulesFromCourse } from "../services/Student/ListModuleCourse"
import { useEffect, useState } from "react";
import { getClassFromModule } from "../services/Student/ListModuleClass";
import MyButton from "../components/Button";
import {getStudentCourseByTeacher} from "../services/Teacher/ListStudentCourseByTeacher";
import { useNavigate } from "react-router-dom";
import {deleteCourse} from "../../src/services/Teacher/DeleteCourse";
import {AcquirngCourse} from "../../src/services/Student/AcquirngCourse";

function useSearchModule(courseId) {
    const [modules, setModules] = useState([]);
    useEffect(() => {
        const fetchModule = async () => {
            try {
                const data = await getModulesFromCourse(courseId);
                setModules(data);
            } catch (error) {
                console.error("Erro ao carregar módulos:", error);
            }
        };

        fetchModule();
    }, [courseId]);

    return modules;
}

function ListStudentCourseByTeacher(courseId) {
    const [students, setStudents] = useState([]); 

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const data = await getStudentCourseByTeacher(courseId);
                setStudents(data);
                console.log(students)
            } catch (error) {
                console.error("Erro ao buscar alunos:", error);
            }
        };

        fetchStudents();
    }, [courseId]);

    return students;
}

export default function CourseDetails() {
    const location = useLocation();
    const course = location.state?.course;
    console.log(course)
    const user = location.state?.user;
    const navitage = useNavigate();
    const type = user?.type;
    const origin = location.state?.origin;
    const [courses, setCourses] = useState([]);
    const [isCourseAcquired, setIsCourseAcquired] = useState(false);

    const [visualizer, setVisualizer] = useState("none");


    const handleAcquiringCourse = async () => {
        try {
            // Pegando os valores de userId e courseId da sessão ou de outras fontes
            const userId = user?.id || sessionStorage.getItem("userId"); // Tentando pegar do contexto ou sessão
            const courseId = course?.id || sessionStorage.getItem("courseId"); // Tentando pegar do contexto ou sessão
            const userName = user?.name || sessionStorage.getItem("userName");

            // Verificando se os valores foram obtidos
            if (!userId || !courseId) {
                console.error("Erro: userId ou courseId não encontrados!");
                return; // Saindo da função se algum valor estiver ausente
            }
    
            // Chama a API para adquirir o curso
            await AcquirngCourse(courseId, userId,userName);
    
            // Atualiza o estado para indicar que o curso foi adquirido
            setIsCourseAcquired(true);
            console.log("Curso adquirido com sucesso!");
    
            // Redireciona o usuário para a página principal ou para outra página de cursos
            navitage('/'); // Supondo que você tenha uma página de "Meus Cursos"
        } catch (error) {
            console.error("Erro ao adquirir o curso:", error);
        }
    };
    

    const handleDeleteCourse = async (courseId) => {
        try {
            await deleteCourse(courseId); // Chama a API para excluir o curso
            console.log("Curso deletado com sucesso:", courseId);

            navitage('/');
            // Atualiza a lista de cursos visíveis
            setCourses((prevCourses) =>
                prevCourses.filter((course) => course.id !== courseId)
            );
    
            // Opcional: redirecionar ou exibir uma mensagem de sucesso
        } catch (error) {
            console.error("Erro ao deletar o curso:", error);
        }
    };
    

    useEffect(() => {
        if (type === "Professor") {
            setVisualizer("flex");
        } else if (type === "Aluno") {
            setVisualizer("none");
        }
    }, [type]);

    const modules = useSearchModule(course.id);
    const students = ListStudentCourseByTeacher(course.id);
    const [classes, setClasses] = useState([]);
    const [activeModuleId, setActiveModuleId] = useState(null);

    const hadleBackClick = () => {
        navitage('/')
    };

    const handleModuleClick = async (moduleId) => {
        if (activeModuleId === moduleId) {
            setActiveModuleId(null);
            setClasses([]);
        } else {
            try {
                const data = await getClassFromModule(moduleId);
                setClasses(data);
                setActiveModuleId(moduleId);
            } catch (error) {
                console.error("Erro ao carregar aulas:", error);
            }
        }
    };

    const handleCourseActualization = () => {
        navitage('/UpdateCourse', { state: { course } })
        console.log(course)
    }

    const [selectedClassLink, setSelectedClassLink] = useState(null);

    const formatYouTubeLink = (link) => {
        if (link.includes("youtube.com/watch?v=")) {
            const videoId = link.split("v=")[1].split("&")[0];
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return link;
    };

    const handleClassClick = (classUrl) => {
        const formattedLink = formatYouTubeLink(classUrl);
        setSelectedClassLink(formattedLink);
    };

    const closeModal = () => {
        setSelectedClassLink(null);
    };

    if(origin === "CoursesSuggestions"){
        return(
            <>
            <div className="div-course">
                <MyArrowBack onClick={hadleBackClick}/>
                <h1>Detalhes do Curso</h1>
                <div className="course-details">
                    <h2>{course.title}</h2>
                    <img src={course.image} alt={"Imagem do curso ${course.title}"}/>
                    <p>{course.description}</p>
                </div>
                <div className="listModule">
                    {modules.map((module) => (
                        <div key={module.id}>
                            <button
                                className="buttonModule"
                                onClick={() => handleModuleClick(module.id)}
                            >
                                <span>{module.title}</span>
                            </button>

                            {activeModuleId === module.id && (
                                <div className="listClasses">
                                    {classes.length > 0 ? (
                                        classes.map((clazz) => (
                                            <div key={clazz.id} className="classItem">
                                                <button className="buttonClass" onClick={() => handleClassClick(clazz.url)}
                                                >{clazz.title}</button>
                                            </div>
                                        ))
                                    ) : (
                                        <p>Não há aulas para este módulo.</p>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="button-acquire-course">
                    <MyButton className="my-button" colorButton="green" text="Adquirir Curso" onClick={handleAcquiringCourse}/>
                </div>
            </div>
            </>
        )
    }

    return (
        <>
            <div className="div-course">
                <MyArrowBack onClick={hadleBackClick}/>
                <h1>Detalhes do Curso</h1>
                <div className="course-details">
                    <h2>{course.title}</h2>
                    <img src={course.image} alt={"Imagem do curso ${course.title}"}/>
                    <p>{course.description}</p>
                </div>
                <div className="listModule">
                    {modules.map((module) => (
                        <div key={module.id}>
                            <button
                                className="buttonModule"
                                onClick={() => handleModuleClick(module.id)}
                            >
                                <span>{module.title}</span>
                            </button>

                            {activeModuleId === module.id && (
                                <div className="listClasses">
                                    {classes.length > 0 ? (
                                        classes.map((clazz) => (
                                            <div key={clazz.id} className="classItem">
                                                <button className="buttonClass" onClick={() => handleClassClick(clazz.url)}
                                                >{clazz.title}</button>
                                            </div>
                                        ))
                                    ) : (
                                        <p>Não há aulas para este módulo.</p>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="div-buttons-update-delete" style={{display: visualizer}}>
                    <MyButton className="my-button" colorButton="green" text="Atualizar Módulo" onClick={handleCourseActualization}/>
                    <MyButton className="my-button" colorButton="red" text="Deletar Curso" onClick={() => handleDeleteCourse(course.id)}/>
                </div>

                <div className="div-students-course" style={{display: visualizer}}>
                    <h5>Alunos do Curso</h5>
                    {students.length > 0 ? (
                        <ul>
                            {students.map((student) => (
                                <li key={student.userId}>{student.userName}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>Não há alunos cadastrados neste curso.</p>
                    )}
                </div>
                {selectedClassLink && (
                    <div className="modal-overlay" onClick={() => closeModal}>
                        <div
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <iframe className="iframe"
                                src={selectedClassLink}
                                title="Video Aula"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <button className="close-modal" onClick={closeModal}>
                                Fechar
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <footer className="footer-details">
                <MyCodeCourses />
            </footer>
        </>
    );
}