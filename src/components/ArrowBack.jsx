import './css/ArrowBack.css';
import arrowback from './Image/arrowback.png';

export default function MyArrowBack(){
    return(
        <>
            <button className='buttonArrowBack'>
                <img src={arrowback} alt="Voltar" />
            </button>
        </>
    );
}