import React from 'react';
import Product from './Product';

const ProductSection = () => {
    return (
        <main>
            <Product 
                label="New" 
                image="path/to/image1.jpg" 
                name="Luxury Bag 1" 
                price="$200" 
            />
            <Product 
                label="Sale" 
                image="path/to/image2.jpg" 
                name="Luxury Bag 2" 
                price="$150" 
            />
            <Product 
                label="Limited Edition" 
                image="path/to/image3.jpg" 
                name="Luxury Bag 3" 
                price="$300" 
            />
            <Product 
                label="Exclusive" 
                image="path/to/image4.jpg" 
                name="Luxury Bag 4" 
                price="$250" 
            />
        </main>
    );
};

export default ProductSection;
