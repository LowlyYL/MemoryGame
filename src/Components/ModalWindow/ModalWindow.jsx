import { getGameTime } from '../../store/selectors/gameTimeSelector';
import { getCounter } from '../../store/selectors/counterSelector';
import { useSelector } from 'react-redux';
import './ModalWindow.css';
import { Link } from 'react-router-dom';
import { saveState } from '../../localStorage';
import { store } from '../../store';
import { useEffect } from 'react';

const ModalWindow = () => {
    const gameTimeStore = useSelector(getGameTime);
    const counter = useSelector(getCounter);

    useEffect(() => {
        store.dispatch(() => {
            saveState(store.getState())
        })
    }, [])
        
    return (
        <div className='ModalWindow-overlay'>
            <div className='ModalWindow'>
                <p className="Title-ModalWindow">Сongratulations</p>
                <p className="Text-body-ModalWindow">Your play time: {gameTimeStore}</p>
                <p className="Text-body-ModalWindow">Number of flips: {counter}</p>
                
                <Link to="/tableHighScore" >
                    <button className="ModalWindow-button">High score table</button>
                </Link>
            </div>
        </div>
    )
};

export default ModalWindow;
