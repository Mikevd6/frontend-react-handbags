import React from 'react';
import Button from './Button';

const ButtonSection = () => {
    return (
        <nav>
            <Button text="Button 1" disabled={false} />
            <Button text="Button 2" disabled={false} />
            <Button text="Button 3" disabled={true} />
        </nav>
    );
};

export default ButtonSection;
