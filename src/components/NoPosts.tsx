import React from 'react';
import Flex from "./Flex";
import Shaking from "../UI/Animation/Shaking";
import Rotating from "../UI/Animation/Rotating";

const NoPosts = () => {
    return (
        <div>
            <Flex justifyContent={'center'} padding={'5rem'}>
                <h2>There are no posts here :(
                    <hr/>
                </h2>
            </Flex>

            <div>
                <h4>
                    <Flex justifyContent={'center'} alignItems={'center'}>
                        <Shaking /> Try another request
                    </Flex>
                    <Flex justifyContent={'center'} alignItems={'center'} padding={'15px'}>
                        or
                    </Flex>
                    <Flex justifyContent={'center'} alignItems={'center'}>
                        <Rotating />Refresh the page
                    </Flex>
                </h4>
            </div>
        </div>
    );
};

export default NoPosts;