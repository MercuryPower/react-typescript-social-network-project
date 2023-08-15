import React from 'react';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Flex from "../components/Flex";

const Login = () => {
    return (
        <div className={'login_block'}>
                <div>
                    <h1>Login</h1>
                </div>
                <div className={'login_block_form'}>
                    <form>
                        <Input type="text" placeholder={'Email'}></Input>
                        <Input type="password" placeholder={'Password'}></Input>
                    </form>
                    <Button>Log in</Button>
                </div>
        </div>
    );
};

export default Login;