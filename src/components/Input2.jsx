import './css/Input.css';

export default function MyInput({
    placeholder,
    textLabel,
    typeInput,
    name,
    value,
    onChange,
    autocomplete, 
}) {
    return (
        <div className="input-container">
            <label className="labelInput" htmlFor={name}>{textLabel}</label>
            <input
                className="Input"
                id={name} 
                type={typeInput}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                autoComplete={autocomplete} 
            />
        </div>
    );
}
