import './css/Button.css'

export default function MyButton({colorButton, text, onClick}){
    return(
        <button onClick={onClick} className="my-button" style={{background: colorButton}}>{text}</button>
    );
}