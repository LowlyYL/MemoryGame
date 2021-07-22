import './Timer.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTimerSwitch } from '../../store/selectors/timerSelector';
import { useRef } from 'react';
import { setTimeGame } from '../../store/reducers/gameTime';

const Timer = () => {
    const dispatch = useDispatch();

    const [time, setTime] = useState(0);

    const timerRef = useRef();

    const timerStore = useSelector(getTimerSwitch);

    useEffect(() => {
    let interval = null;
    if(!timerStore) {
      let time = [...timerRef.current.childNodes]
      dispatch(setTimeGame(time[0].innerText + ':' + time[2].innerText + ':' + time[4].innerText))
    }

    if (timerStore) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerStore) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerStore]);
  
    return (
            <div className="Timers">
                <div id="display" ref={timerRef}>
                    <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>
                    <span>:</span>
                    <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
                    <span>:</span>
                    <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
                </div>
            </div>
  )
}

export default Timer;