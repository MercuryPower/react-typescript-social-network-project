import React, {Component} from 'react';
import Flex from "./Flex";
import Button from "./Button";
import '../App.scss'

const Menu = () =>{
        return (
            <Flex direction={'column'} alignItems={'flex-start'}  className={['Menu','Button']} >
                <div>
                    <Button outlined primary>Моя страница</Button>
                    <Button outlined primary>Новости</Button>
                    <Button outlined primary>Сообщения</Button>
                    <Button outlined primary>Друзья</Button>
                </div>
            </Flex>
        );
}

export default Menu;