import './css/Button.css'

export default function MyButton({colorButton, text}){
    return(
        <button className="my-button" style={{background: colorButton}}>{text}</button>
    );
}