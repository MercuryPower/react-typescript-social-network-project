import React from 'react';
import {useNavigate} from "react-router-dom";
import Button from "../UI/Button/Button";
import Flex from "../components/Flex";

const NotFound = () => {
    const navigate = useNavigate();

    const handleRedirectToHome = () => {
        navigate('/home');
    };
    return (
        <Flex justifyContent={'center'} alignItems={'center'} direction={'column'} margin={'1rem'}>
            <h1>404 - Not Found</h1>
            <div>
                <Button big onClick={handleRedirectToHome}>Go to Home Page</Button>
            </div>
        </Flex>
    );
};

export default NotFound;