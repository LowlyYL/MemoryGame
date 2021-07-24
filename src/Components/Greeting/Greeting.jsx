import './Greeting.css';
import Button from '../Button/Button'

const Greeting = () => {
    return (
        <div className="greeting">
            <img className="greeting-logo" src="img/greeting.png" alt="greeting" />
            <Button str="Sign up" link="/signup" />
        </div>
    )
}

export default Greeting;