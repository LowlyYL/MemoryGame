import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import './SignUp.css';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { setDataPlayer } from '../../store/reducers/playerDataReducer';
import { redColorOnBlur, requiredField, validateEmail } from '../../validators';

const SignUp = () => {
    const dispatch = useDispatch();

    const [inputFirstName, setInputFirstName] = useState()
    const [inputLastName, setInputLastName] = useState()
    const [inputEmail, setInputEmail] = useState()
    
    const [disabledBtn, setDisabledBtn] = useState(true)

    const [inputFilled, setInputFilled] = useState("inputNotFilled")

    useEffect(() => {
            (requiredField(inputEmail) && validateEmail(inputEmail) &&
            requiredField(inputFirstName) && requiredField(inputLastName)) ?
            filledData() : notFilledData()

    }, [inputEmail, inputFirstName, inputLastName])

    const filledData = () => {
        setInputFilled("inputFilled");
        setDisabledBtn(validateEmail(false));
    }

    const notFilledData = () => {
        setInputFilled("inputNotFilled");
        setDisabledBtn(true);
    }

    const onChangeFirstName = (event) => {
        setInputFirstName(event.target.value);
    }
    const onChangeLastName = (event) => {
        setInputLastName(event.target.value);
    }
    const onChangeEmail = (event) => {
        setInputEmail(event.target.value);
    }
    const sendDataPlayer = () => {
        if(validateEmail(inputEmail) === true) {
            dispatch(setDataPlayer(inputFirstName, inputLastName, inputEmail))
        }
    } 

    return (
        <div className="signUp">
                <div className="head">
                    <p className="header">Sign up</p>
                    <Logo />
                </div>
            <form className="authorization">
                    <input 
                        className={inputFilled} 
                        required  
                        type="text" 
                        onBlur={redColorOnBlur} 
                        onChange={onChangeFirstName} 
                        placeholder="First Name" 
                    />
                    <input 
                        className={inputFilled} 
                        required  type="text" 
                        onBlur={redColorOnBlur} 
                        onChange={onChangeLastName} 
                        placeholder="Last Name" 
                    />
                    <input 
                        className={inputFilled} 
                        required  type="email" 
                        onBlur={redColorOnBlur} 
                        onChange={onChangeEmail} 
                        placeholder="Email" 
                    />
            </form>
            <Button str="Rules" link="/rules" onClick={sendDataPlayer} disabled={disabledBtn} />
        </div>
    )
}

export default SignUp;