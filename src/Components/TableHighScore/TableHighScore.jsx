import Logo from '../Logo/Logo'
import './TableHighScore.css';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import UserCard from '../UserCard/UserCard';
import { shuffle } from '../GameZone';

const TableHighScore = () => {
    
    const [keys, setKeys] = useState([])
    const [preloader, setPreloader] = useState(false);
    
    const toogleVisblePreloader = () => {
        setPreloader((preloader) => !preloader)
    }
    const getArrKey = () => {
        let arrKey = [];
        for(let i=0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            arrKey.push(key)
        }
        return setKeys(arrKey)
    }
    
    useEffect(() => {
        Promise.all([
            new Promise(resolve => setTimeout(() => resolve(getArrKey()), 50)),
        ]).then(() => toogleVisblePreloader())
    }, [])

    return (
        <div className="tableHighScore">
            <div className="head">
                <Logo />
                <p className="header">Our Players</p>
            </div>
            <div className="tableHighScore-container">
                <div>
                    <ul className="userList">{preloader ? shuffle(keys).slice(0,10).map((item) => {
                        return <li key={uuidv4()}><UserCard data={JSON.parse(localStorage.getItem(item))} /></li>
                        }) : null}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TableHighScore;