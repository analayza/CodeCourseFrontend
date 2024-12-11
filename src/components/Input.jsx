import './css/Input.css';

export default function MyInput({placeholder, textLabel, typeInput, value, onChange}){
    return(
        <>
            <div className='input-container'>
                <label className="labelInput">{textLabel}</label>
                <input className="Input" type={typeInput} placeholder={placeholder} value={value} onChange={onChange} />
            </div>
        </>
    );
}