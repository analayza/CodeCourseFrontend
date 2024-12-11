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
    const user = location.state?.user;
    const navitage = useNavigate();
    const type = user?.type;

    const [visualizer, setVisualizer] = useState("none");

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

    return (
        <>
            <div className="div-course">
                <MyArrowBack onClick={hadleBackClick}/>
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
                                onClick={() => handleModuleClick(module.id)}
                            >
                                <span>{module.title}</span>
                            </button>

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
                <div className="div-buttons-update-delete" style={{display: visualizer}}>
                    <MyButton className="my-button" colorButton="green" text="Atualizar Módulo" onClick={handleCourseActualization}/>
                    <MyButton className="my-button" colorButton="red" text="Deletar Curso"/>
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
                
            </div>
            <footer className="footer-details">
                <MyCodeCourses />
            </footer>
        </>
    );
}
