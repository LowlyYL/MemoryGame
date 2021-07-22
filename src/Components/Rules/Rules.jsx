import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import './Rules.css';

const Rules = () => {
    
    return (
        <div className="rules">
            <div className="head">
                <Logo />
                <p className="header">Rules</p>
            </div>
            <div className="rules-container">
                <p className="text">You need to find two copies of the cards.</p>
                <div className="category">
                    <p className="category-header">Difficulty of the game</p>
                    <div className="select-container">
                        <select className="custom-select">
                            <option value="4x4">4x4</option>
                            <option value="6x6">6x6</option>
                            <option value="8x8">8x8</option>
                        </select>
                    </div>
                </div>
                <div className="category">
                    <p className="category-header">Сard back</p>
                    <button className="changeImg">Change</button>
                    <img className="cardBack"  alt="img" />
                </div>
            </div>
            <Button str="Start" link="/game" />
        </div>
    )
}

export default Rules;