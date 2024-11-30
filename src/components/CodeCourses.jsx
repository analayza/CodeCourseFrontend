import '../components/css/CodeCourses.css'

export default function MyCodeCourses(){
    return(
        <>
            <div className="footer">
                <div className="logo-container">
                    <img 
                        src={require('../images/Codepen.png')} 
                        alt="Logo do CodeCursos" 
                        className="logo" 
                    />
                </div>
                <span className="footer-text">CodeCursos</span>
            </div>
        </>
    );
}