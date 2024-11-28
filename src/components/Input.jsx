import './css/Input.css';

export default function MyInput({placeholder, textLabel, typeInput}){
    return(
        <>
            <div className='input-container'>
                <label className="labelInput">{textLabel}</label>
                <input className="Input" type={typeInput} placeholder={placeholder} />
            </div>
        </>
    );
}