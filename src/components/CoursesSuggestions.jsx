import { useEffect, useState } from "react";
import {getCourseSuggestions} from "../services/Student/coursesuggestions"
import "../components/css/Courses.css"
import { useNavigate } from "react-router-dom";

function useCourseSuggestions(userId) {
    const [courseSuggestions, setSuggestions] = useState([]);
  
    useEffect(() => {
      const fetchCourses = async () => {
        try {
          const data = await getCourseSuggestions(userId);
          setSuggestions(data);
        } catch (error) {
          console.error("Erro ao carregar cursos:", error);
        }
      };
  
      fetchCourses();
    }, [userId]);
  
    return courseSuggestions;
}

export default function CourseSuggestions() {
    const coursesSuggestions = useCourseSuggestions(1);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 5;
    const navigate = useNavigate();
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => 
        Math.min(prevIndex + itemsPerPage, coursesSuggestions.length - itemsPerPage)
      );
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
    };
  
    const visibleCourses = coursesSuggestions.slice(currentIndex, currentIndex + itemsPerPage);

    const handleCourseClick = (course) => {
      const user = JSON.parse(sessionStorage.getItem("user"));
      navigate(`/course-details/${course.id}`, { state: { course, user } });
    }; 
  
    return (
      <>
        {coursesSuggestions.length > 0 && (
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
                  <button className="course-button" style={{ backgroundImage: `url(${course.image})` }} onClick={() => handleCourseClick(course)}></button>
                  <span className="course-title">{course.title}</span>
                </div>
              ))}
            </div>
  
            <button
              onClick={handleNext}
              className="carousel-button"
              disabled={currentIndex + itemsPerPage >= coursesSuggestions.length}
            >
              {">"}
            </button>
          </div>
        )}
      </>
    );
  }
  