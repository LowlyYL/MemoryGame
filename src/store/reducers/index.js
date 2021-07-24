import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import fetchBCReducer from './fetchBackCardReducer';
import flipReducer from './flipReducer';
import gameTime from './gameTime';
import playerDataReducer from './playerDataReducer';
import selectDifficultyReducer from './selectDifficultyReducer';
import timerReducer from './timerReducer';

export default combineReducers({
    urls: fetchBCReducer,
    difficult: selectDifficultyReducer,
    timerSwitch: timerReducer,
    flipper: flipReducer,
    counter: counterReducer,
    timeGame: gameTime,
    dataPlayer: playerDataReducer,
})