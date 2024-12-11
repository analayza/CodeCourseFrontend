import { useLocation } from "react-router-dom";
import "../pages/css/CourseDetails.css"
import MyCodeCourses from "../components/CodeCourses";
import MyArrowBack from "../components/ArrowBack";
import { getModulesFromCourse } from "../services/Student/ListModuleCourse"
import { useEffect, useState } from "react";
import { getClassFromModule } from "../services/Student/ListModuleClass";
import MyButton from "../components/Button";
import {getStudentCourseByTeacher} from "../services/Teacher/ListStudentCourseByTeacher"

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
                setStudents(data); // Armazena os alunos no estado
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

    const modules = useSearchModule(course.id);
    const students = ListStudentCourseByTeacher(course.id);
    const [classes, setClasses] = useState([]); // Estado para armazenar as aulas
    const [activeModuleId, setActiveModuleId] = useState(null); // Para controlar qual módulo está expandido

    const handleModuleClick = async (moduleId) => {
        if (activeModuleId === moduleId) {
            // Se o módulo clicado já estiver ativo, desativa ele
            setActiveModuleId(null);
            setClasses([]);
        } else {
            try {
                const data = await getClassFromModule(moduleId);
                setClasses(data); // Atualiza o estado com as aulas do módulo
                setActiveModuleId(moduleId); // Marca o módulo como ativo
            } catch (error) {
                console.error("Erro ao carregar aulas:", error);
            }
        }
    };

    return (
        <>
            <div className="div-course">
                <MyArrowBack />
                <h1>Detalhes do Curso</h1>
                <div className="course-details">
                    <h2>{course.title}</h2>
                    <img src={course.image} alt={`Imagem do curso ${course.title}`} />
                    <p>{course.description}</p>
                </div>
                <div className="listModule">
                    {modules.map((module) => (
                        <div key={module.id}>
                            <button
                                className="buttonModule"
                                onClick={() => handleModuleClick(module.id)} // Chama a função ao clicar no botão do módulo
                            >
                                <span>{module.title}</span>
                            </button>

                            {/* Exibe as aulas apenas para o módulo ativo */}
                            {activeModuleId === module.id && (
                                <div className="listClasses">
                                    {classes.length > 0 ? (
                                        classes.map((clazz) => (
                                            <div key={clazz.id} className="classItem">
                                                <h5>{clazz.title}</h5>
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
                <div className="div-buttons-update-delete">
                    <MyButton className="my-button" colorButton="green" text="Atualizar Módulo"/>
                    <MyButton className="my-button" colorButton="red" text="Deletar Curso"/>
                </div>

                <div className="div-students-course">
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
                
            </div>
            <footer className="footer-details">
                <MyCodeCourses />
            </footer>
        </>
    );
}
