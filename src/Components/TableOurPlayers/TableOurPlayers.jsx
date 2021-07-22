import Logo from '../Logo/Logo'
import './TableHighScore.css';

const TableHighScore = () => {

    return (
        <div className="tableHighScore">
            <div className="head">
                <Logo />
                <p className="header">Our Players</p>
            </div>
            <div className="tableHighScore-container">
                <div>
                    <ul className="userList">
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TableHighScore;