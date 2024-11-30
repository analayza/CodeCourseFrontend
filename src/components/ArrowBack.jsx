import './css/ArrowBack.css';
import arrowback from '../images/arrowback.png';

export default function MyArrowBack(){
    return(
        <>
            <button className='buttonArrowBack'>
                <img src={arrowback} alt="Voltar" />
            </button>
        </>
    );
}