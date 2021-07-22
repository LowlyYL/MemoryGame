import './Greeting.css';
import Button from '../Button/Button'

const Greeting = () => {
    return (
        <div className="greeting">
            <img className="greeting-logo" src="img/greeting.png" alt="greeting" />
            <Button  />
        </div>
    )
}

export default Greeting;