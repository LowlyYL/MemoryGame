import './Button.css';

const Button = (props) => {
    return (
        <div className="btnContainer">
                <button className="button" onClick={props.onClick} disabled={props.disabled}>
                    {props.str}
                </button>
        </div>
    )
}

export default Button;