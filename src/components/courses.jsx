import { useState, useEffect } from "react";
import { getCoursesFromStudent } from "../services/Student/RegisterCourse";
import "../components/css/Courses.css";
import { useNavigate } from "react-router-dom";

function useSearchCourses(userId) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCoursesFromStudent(userId);
        setCourses(data);
      } catch (error) {
        console.error("Erro ao carregar cursos:", error);
      }
    };

    fetchCourses();
  }, [userId]);

  return courses;
}

export default function Courses() {
  const courses = useSearchCourses(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      Math.min(prevIndex + itemsPerPage, courses.length - itemsPerPage)
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const visibleCourses = courses.slice(currentIndex, currentIndex + itemsPerPage);

  const handleCourseClick = (courseId) => {
    navigate(`/course-details/${courseId}`);
  };

  return (
    <>
      {courses.length > 0 && (
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
                <button className="course-button" style={{ backgroundImage: `url(${course.image})` }} onClick={() => handleCourseClick(course.id)}></button>
                <span className="course-title">{course.title}</span>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="carousel-button"
            disabled={currentIndex + itemsPerPage >= courses.length}
          >
            {">"}
          </button>
        </div>
      )}
    </>
  );
}
