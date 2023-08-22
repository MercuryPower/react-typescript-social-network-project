import React, {useContext} from 'react';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Flex from "../components/Flex";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', 'true');
    }
    return (
        <div className={'login_block'}>
                <div>
                    <h1>Login</h1>
                </div>
                <div className={'login_block_form'}>
                    <form onSubmit={login}>
                        <Input type="text" placeholder={'Email'}></Input>
                        <Input type="password" placeholder={'Password'}></Input>
                        <Button alignSelf={'center'}>Log in</Button>
                    </form>

                </div>
        </div>
    );
};

export default Login;