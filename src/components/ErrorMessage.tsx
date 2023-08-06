import React, {useState} from 'react';
import Flex from "./Flex";
import Rotating from "../UI/Animation/Rotating";


interface ErrorMessageProps {
    postError:string;
}
const ErrorMessage = (props:ErrorMessageProps) => {
    const [postError, setPostError]  = useState(props.postError)
    return (
        <div>
            <Flex justifyContent={'center'} margin={'1.5rem'}>
                <h2>Oops! Error: ${postError}
                    <hr/>
                </h2>
            </Flex>
            <div>
                <h4>
                    <Flex justifyContent={'center'} alignItems={'center'}>
                        <Rotating />Try to Refresh the page
                    </Flex>
                </h4>
            </div>
        </div>
    );
};

export default ErrorMessage;