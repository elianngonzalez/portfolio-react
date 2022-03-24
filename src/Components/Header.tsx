import { Button, Badge, Burger } from '@mantine/core';
import React from 'react';

const Header = () => {
    //const theme = useMantineTheme();
    const [opened, setOpened] = React.useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';

    return (
        <header>
            <div className="content-desktop">
                <div>
                    <Badge size="lg" radius={10} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>portfolio</Badge>
                </div>
                <div>
                    <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} onClick={() => redirectToLink('https://github.com/elianngonzalez')}>Check out my Github</Button>
                </div>
            </div>

            <div className="content-mobile">
                <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    title={title}
                >
                    <div>
                        {/* <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} onClick={() => redirectToLink('https://github.com/elianngonzalez')}>Check out my Github</Button>*/}
                        <a href="https://github.com/elianngonzalez">Check out my Github</a>
                    </div>
                </Burger>
            </div>
        </header>
    );
};

export default Header;

const redirectToLink = (link: string): void => {
    window.open(link, '_blank');
};