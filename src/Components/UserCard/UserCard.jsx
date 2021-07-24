import './UserCard.css';
import { useState } from 'react';
import ModalWindowPlayer from '../ModalWindowPlayer/ModalWindowPlayer';

const UserCard = (props) => {
    const [visibleModal, setVisibleModal] = useState(false);
    const toogleVisibleModal = () => {
        setVisibleModal((visibleModal) => !visibleModal)
    }
    return (
        <div className="userCard" onClick={toogleVisibleModal}>
            <p className="userCard-player">{props.data.dataPlayer.firstName}</p>
             {visibleModal && <ModalWindowPlayer 
                    data={props.data}
                    closeModal={toogleVisibleModal}
                              />}
        </div>
    )
}

export default UserCard;