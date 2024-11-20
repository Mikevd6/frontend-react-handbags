import React from 'react';
import Tile from './Tile';

const TileSection = () => {
    return (
        <footer>
            <Tile 
                image="path/to/brand-logo1.jpg" 
                title="" 
                paragraphs={[]} 
            />
            <Tile 
                title="Our Mission" 
                paragraphs={[
                    "To deliver the best luxury accessories.",
                    "Crafted with precision and care."
                ]} 
            />
            <Tile 
                image="path/to/brand-logo2.jpg" 
                title="" 
                paragraphs={[]} 
            />
            <Tile 
                title="About Us" 
                paragraphs={[
                    "Established in 2020.",
                    "A journey of craftsmanship and excellence.",
                    "Join us in our story."
                ]} 
            />
        </footer>
    );
};

export default TileSection;
