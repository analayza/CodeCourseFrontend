import './css/Button.css';

export default function MyButton({colorButton, text}){
    return(
        <button className="button" style={{background: colorButton}}>{text}</button>
    );
}