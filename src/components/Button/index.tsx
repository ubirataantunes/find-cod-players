import './Button.css';

const Button = (props: any) => {
    return (
        <button className='button'>{props.children}</button>
    );
};

export default Button;