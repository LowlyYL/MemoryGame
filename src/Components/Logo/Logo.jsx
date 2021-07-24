import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => {
    return (
        <div className="logo-container">
            <Link to="/" >
                <img className="logo" src="img/logo.png" alt="logo" />
            </Link>
        </div>
    )
}

export default Logo;