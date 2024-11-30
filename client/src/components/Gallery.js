import React from 'react';
import './Gallery.css';

const Gallery = () => {
    return (
        <>
        <div className='gallery-container' id='gallery'>
            <div className='heading'>
                <h3>Photo <span>Gallery</span></h3>
            </div>
            <div className='box'>
                <div className='col1'>
                    <img src='./images/gal-1.png' alt='Image' />
                    <img src='./images/gal-10.png' alt='Image' />
                    <img src='./images/gal-4.png' alt='Image' />
                    <img src='./images/gal-11.JPG' alt='Image' />
                </div>
                <div className='col1'>
                    <img src='./images/gal-7.png' alt='Image' />
                    <img src='./images/gal-6.png' alt='Image' />
                    <img src='./images/gal-5.png' alt='Image' />
                    <img src='./images/gal-12.jpg' alt='Image' />
                </div>
                <div className='col1'>
                    <img src='./images/gal-8.png' alt='Image' />
                    <img src='./images/gal-9.png' alt='Image' />
                    <img src='./images/gal-3.png' alt='Image' />
                    <img src='./images/quick-about.jpg' alt='Image' />
                </div>
            </div>
        </div>
        </>
    );
}

export default Gallery;
