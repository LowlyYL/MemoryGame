import './GameZone.css';
import { useSelector, useDispatch } from 'react-redux';
import { getDifficultMode } from '../../store/selectors/modeSelector';
import { getUrlBackSideOfCard } from '../../store/selectors/fetchSelectors';
import { arrImg, shuffle } from './index';
import { getFlipperCount, getFlipperSrcFirst, getFlipperSrcSecond } from '../../store/selectors/flipperSelector';
import { getCounter } from '../../store/selectors/counterSelector';
import { flipCard, newRound } from '../../store/reducers/flipReducer';
import { useState, useEffect, useRef } from 'react';
import { timerOff, timerOn } from '../../store/reducers/timerReducer';
import { countAdd } from '../../store/reducers/counterReducer';
import ModalWindow from '../ModalWindow/ModalWindow';
import { EASY, MIDDLE, DIFFICULT } from '../../store/reducers/selectDifficultyReducer';
import Preloader from '../Preloader/Preloader';

const GameZone = () => {
    const dispatch = useDispatch();
    const [prepearCards, setPrepearCards] = useState();
    const [visibleModalWindow, setVisibleModalWindow] = useState(false);

    const toogleVisbleModalWindow = () => {
        setVisibleModalWindow(true)
    }

    const ulRef = useRef();

    useEffect(() => {
        if(difficultMode === EASY) {
            const arrCards = shuffle(arrImg).slice(0, 8)
            return setPrepearCards(shuffle(arrCards.concat(arrCards)))
        } else if(difficultMode === MIDDLE) {
            const arrCards = shuffle(arrImg).slice(0, 18)
            return setPrepearCards(shuffle(arrCards.concat(arrCards)))
        } else if(difficultMode === DIFFICULT) {
            const arrCards = shuffle(arrImg).slice(0, 32)
            return setPrepearCards(shuffle(arrCards.concat(arrCards)))
        }
    }, [])

    const difficultMode = useSelector(getDifficultMode);
    const backSideOfCard = useSelector(getUrlBackSideOfCard);

    const count = useSelector(getFlipperCount);

    const counter = useSelector(getCounter);

    const flipperSrcFirst = useSelector(getFlipperSrcFirst);
    const flipperSrcSecond = useSelector(getFlipperSrcSecond);

    useEffect(() => {
        if(counter === 0 &&  count === 1) {
            dispatch(timerOn())
        }
        if((flipperSrcFirst !== flipperSrcSecond) && count === 2) {
            Promise.all([
                new Promise(resolve => setTimeout(() => resolve(noneMod()), 50)),
                new Promise(resolve => setTimeout(() => resolve(notMatch()), 500)),
                new Promise(resolve => setTimeout(() => resolve(autoMod()), 1000)),
            ])
        } else if((flipperSrcFirst === flipperSrcSecond) && count === 2) {
            Promise.all([
                new Promise(resolve => setTimeout(() => resolve(noneMod()), 50)),
                new Promise(resolve => setTimeout(() => resolve(match()), 500)),
                new Promise(resolve => setTimeout(() => resolve(autoMod()), 1000)),
            ]).then(() => showModalWondow())
        }
    }, [count])

    const showModalWondow = () => {
        if(difficultMode === EASY && 
        [...ulRef.current.childNodes]
            .filter((item) => item.className === "lock")
            .length === 16) {
            dispatch(timerOff())
            toogleVisbleModalWindow()
        } else if(difficultMode === MIDDLE && 
        [...ulRef.current.childNodes]
            .filter((item) => item.className === "lock")
            .length === 36) {
            dispatch(timerOff())
            toogleVisbleModalWindow()
        } else if(difficultMode === DIFFICULT && 
        [...ulRef.current.childNodes]
            .filter((item) => item.className === "lock")
            .length === 64) {
            dispatch(timerOff())
            toogleVisbleModalWindow()
        }
    }

    const match = () => {
        lockMod()
        dispatch(countAdd())
        dispatch(newRound())
    }

    const notMatch = () => {
        [...ulRef.current.childNodes].filter((item) =>
                item.className === "inverted").forEach(item => item.className = 'notInverted')
        dispatch(countAdd())
        dispatch(newRound())
    }

    const flip = (event) => {
        if((count === 0 || count === 1) && event.currentTarget.className === "notInverted") {
            noneMod()
            event.currentTarget.className = "inverted";
            dispatch(flipCard([...ulRef.current.childNodes][event.currentTarget.id].childNodes[0].src))
            setTimeout((autoMod()), 600)
        }
    }

    const lockMod = () => {
        [...ulRef.current.childNodes].filter((item) =>
                item.className === "inverted").forEach(item => item.className = 'lock')
    }

    const autoMod = () => {
        [...ulRef.current.childNodes].forEach(item => item.style.pointerEvents = 'auto')
    }

    const noneMod = () => {
        [...ulRef.current.childNodes].forEach(item => item.style.pointerEvents = 'none');
    }
    return (
        <div className="gameZone">
            {visibleModalWindow && <ModalWindow />}
            <ul ref={ulRef} className={"gameZone-container ul-" + difficultMode}>
                {!prepearCards ? <Preloader /> : prepearCards.map((item, index) => 
                    <li 
                        id={index}
                        className="notInverted" 
                        key={'card-' + index} 
                        onClick={flip} 
                        style={{backgroundImage: `url(${backSideOfCard})`}}>
                            <img className='card' src={item} alt="img" />
                    </li>
                )}
             </ul>  
        </div>
    )
}

export default GameZone;