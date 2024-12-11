import { useEffect, useState } from "react";
import {getCourseByTeacher} from "../services/Teacher/CourseByTeacher"
import "../components/css/Courses.css"
import { useLocation, useNavigate } from "react-router-dom";

function useCourseByTeacher(userId) {
    const [courseByTeacher, setCourseByTeacher] = useState([]);
  
    useEffect(() => {
      const fetchCourses = async () => {
        try {
          const data = await getCourseByTeacher(userId);
          setCourseByTeacher(data);
        } catch (error) {
          console.error("Erro ao carregar cursos:", error);
        }
      };
  
      fetchCourses();
    }, [userId]);
  
    return courseByTeacher;
}

export default function CourseByTeacher() {
    const courseByTeacher = useCourseByTeacher(1);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 5;
    const navigate = useNavigate();
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => 
        Math.min(prevIndex + itemsPerPage, courseByTeacher.length - itemsPerPage)
      );
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
    };
  
    const visibleCourses = courseByTeacher.slice(currentIndex, currentIndex + itemsPerPage);

    const handleCourseClick = (course) => {
      const user = JSON.parse(sessionStorage.getItem("user"));
      navigate(`/course-details/${course.id}`, { state: { course, user } });
    }; 
  
    return (
      <>
        {courseByTeacher.length > 0 && (
          <div className="carousel">
            <button
              onClick={handlePrev}
              className="carousel-button"
              disabled={currentIndex === 0}
            >
              {"<"}
            </button>
  
            <div className="carousel-content">
              {visibleCourses.map((course, index) => (
                <div key={index} className="carousel-item">
                  <button className="course-button" style={{ backgroundImage: `url(${course.image})` }}  onClick={() => handleCourseClick(course)}></button>
                  <span className="course-title">{course.title}</span>
                </div>
              ))}
            </div>
  
            <button
              onClick={handleNext}
              className="carousel-button"
              disabled={currentIndex + itemsPerPage >= courseByTeacher.length}
            >
              {">"}
            </button>
          </div>
        )}
      </>
    );
  }
  