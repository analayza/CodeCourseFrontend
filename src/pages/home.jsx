import '../components/NavBar';
import NavBar from '../components/NavBar';
import penguinImage from '../images/piguimCodeCursos2.png';
import '../pages/css/menu.css';
import CourseSuggestions from '../components/CoursesSuggestions';
import MyCodeCourses from '../components/CodeCourses';
import CourseByTeacher from '../components/ListCourseByTeacher';
import Courses from '../components/courses';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />

export default function Home(){
    const user = JSON.parse(sessionStorage.getItem("user"));
    const name = user?.name
    const type = user?.type;

    if(type === "Aluno"){
        return(
            <>
                <NavBar userName={name} userRole={type}></NavBar>
                <div className='image-menu'>
                    <img src={penguinImage} alt="image_penguin"/>
                </div>
                <div className='listMyCourse'>
                    <h1>Meus Cursos:</h1>
                    <Courses/>
                </div>
                <div className='CourseSuggestions'>
                    <h1>Sugestões de Cursos:</h1>
                    <CourseSuggestions/>
                </div>
                <footer className='my-footer'>
                    <MyCodeCourses/>
                </footer>
            </>
        )
    }
    if(type === "Professor"){
        return(
            <>
                <NavBar userName={name} userRole={type}></NavBar>
                <div className='image-menu'>
                    <img src={penguinImage} alt="image_penguin"/>
                </div>
                <div className='listMyCourse'>
                    <h1>Meus Cursos:</h1>
                    <CourseByTeacher/>
                </div>
                <footer className='my-footer'>
                    <MyCodeCourses/>
                </footer>
            </>
        )
    }

}