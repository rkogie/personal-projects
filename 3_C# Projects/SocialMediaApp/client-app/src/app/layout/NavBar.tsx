import React from 'react';
import { Container, Menu, Button } from 'semantic-ui-react';

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img
                        src='/assets/logo.png'
                        alt='logo'
                        style={{marginRight: '10px'}} />
                    SocialMediaApp
                </Menu.Item>
                <Menu.Item name='Activites' />
                <Menu.Item>
                    <Button
                        positive
                        content='Create Activity'
                        onClick={() => console.log("Button Clicked")} />
                </Menu.Item>
            </Container>

        </Menu>
    )

}