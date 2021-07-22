import './GameMain.css';
import Logo from '../Logo/Logo'
import Timer from '../Timer/Timer'
import GameZone from '../GameZone/GameZone'

const GameMain = () => {
    return (
        <div className="gameMain">
            <div className="head">
                <Logo />
                <p className="header">Memory Game</p>
            </div>
            <div className="gameMainContainer">
            <div>
                <Timer />
            </div>
                <GameZone />
            </div>
        </div>
    )
}

export default GameMain;