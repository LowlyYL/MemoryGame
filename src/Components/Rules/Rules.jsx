import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import './Rules.css';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetUrlBC } from '../../store/reducers/fetchBackCardReducer';
import { getUrlBackSideOfCard } from '../../store/selectors/fetchSelectors'
import { easyLevel, middleLevel, difficultLevel } from '../../store/reducers/selectDifficultyReducer';

const Rules = () => {
    const url = useSelector(getUrlBackSideOfCard);
    const dispatch = useDispatch();
    const getUrl = () => {
        dispatch(asyncGetUrlBC())
    }
    function selectDifficult(value) {
        if(value === '4x4') {
            dispatch(easyLevel())
        } else if(value === '6x6') {
            dispatch(middleLevel())
        } else if(value === '8x8') {
            dispatch(difficultLevel())
        }
    }
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
                        <select onChange={e => selectDifficult(e.target.value)} className="custom-select">
                            <option value="4x4">4x4</option>
                            <option value="6x6">6x6</option>
                            <option value="8x8">8x8</option>
                        </select>
                    </div>
                </div>
                <div className="category">
                    <p className="category-header">Сard back</p>
                    <button className="changeImg" onClick={getUrl}>Change</button>
                    <img className="cardBack" src={url} alt="img" />
                </div>
            </div>
            <Button str="Start" link="/game" />
        </div>
    )
}

export default Rules;