import React from 'react';
import './App.css';
import Button from './Button';

const App = () => {
    return (
        <div>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button text="Button 1" disabled={false} />
                <Button text="Button 2" disabled={false} />
                <Button text="Button 3" disabled={true} />
            </nav>
        </div>
    );
};

export default App;
