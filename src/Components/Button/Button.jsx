import { Link } from 'react-router-dom';
import './Button.css';

const Button = (props) => {
    return (
        <div className="btnContainer">
            <Link to={props.link} >
                <button className="button" onClick={props.onClick} disabled={props.disabled}>
                    {props.str}
                </button>
            </Link>
        </div>
    )
}

export default Button;