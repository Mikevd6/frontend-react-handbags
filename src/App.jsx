import React from 'react';
import './App.css';
import ButtonSection from './ButtonSection';
import ProductSection from './ProductSection';
import TileSection from './TileSection';

const App = () => {
    return (
        <div>
            <h1>Handbags & Purses</h1>
            <ButtonSection />
            <ProductSection />
            <TileSection />
        </div>
    );
};

export default App;
