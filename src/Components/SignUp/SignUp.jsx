import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import './SignUp.css';

const SignUp = () => {
    
    return (
        <div className="signUp">
                <div className="head">
                    <p className="header">Sign up</p>
                    <Logo />
                </div>
            <form className="authorization">
                    <input 
                        required  
                        type="text" 
                        placeholder="First Name" 
                    />
                    <input 
                        required  type="text" 
                        placeholder="Last Name" 
                    />
                    <input 
                        required  type="email" 
                        placeholder="Email" 
                    />
            </form>
            <Button str="Rules" link="/rules" />
        </div>
    )
}

export default SignUp;