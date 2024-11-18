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
                    <img src='./images/quick-about.jpg' alt='Image' />
                    <img src='./images/quick-about.jpg' alt='Image' />
                    <img src='./images/quick-about.jpg' alt='Image' />
                    <img src='./images/quick-about.jpg' alt='Image' />
                    <img src='./images/quick-about.jpg' alt='Image' />
                    <img src='./images/quick-about.jpg' alt='Image' />
                </div>
                <div className='col1'>
                    <img src='./images/quick-about.jpg' alt='Image' />
                    <img src='./images/quick-about.jpg' alt='Image' />
                    <img src='./images/quick-about.jpg' alt='Image' />
                    <img src='./images/quick-about.jpg' alt='Image' />
                    <img src='./images/quick-about.jpg' alt='Image' />
                    <img src='./images/quick-about.jpg' alt='Image' />
                </div>
                <div className='col1'>
                    <img src='./images/quick-about.jpg' alt='Image' />
                    <img src='./images/quick-about.jpg' alt='Image' />
                    <img src='./images/quick-about.jpg' alt='Image' />
                    <img src='./images/quick-about.jpg' alt='Image' />
                    <img src='./images/quick-about.jpg' alt='Image' />
                    <img src='./images/quick-about.jpg' alt='Image' />
                </div>
            </div>
        </div>
        </>
    );
}

export default Gallery;
