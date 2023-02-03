import './InputField.css';

const InputField = (props: any) => {
    const handleChange = (e: any) => {
        props.changed(e.target.value);
    };

    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input value={props.value} onChange={handleChange} type="text" placeholder={props.placeholder} required={props.required} />
        </div>
    );
};

export default InputField;