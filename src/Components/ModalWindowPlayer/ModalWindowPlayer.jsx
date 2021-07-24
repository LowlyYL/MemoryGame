import './ModalWindowPlayer.css';

const ModalWindowPlayer = (props) => {
    return (
        <div className='ModalWindow-overlay'>
            <div className='ModalWindow'>
                <p className="title-ModalWindowPlayer">Player: {props.data.dataPlayer.firstName}</p>
                <p className="text-ModalWindowPlayer">Difficult: {props.data.difficult.difficulty}</p>
                <p className="text-ModalWindowPlayer">Number of flips: {props.data.counter.count}</p>
                <p className="text-ModalWindowPlayer">Time: {props.data.timeGame.time}</p>
            </div>
        </div>
    )
};

export default ModalWindowPlayer;
