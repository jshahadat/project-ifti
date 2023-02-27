import React, { useState, useEffect } from 'react';

const images = [
    'https://i.ibb.co/m9xgv1D/female-automation-engineer-wear-blue-uniform-with-helmet-safety-inspection-control-robot-arm-welding.jpg',
    'https://i.ibb.co/YTDcWQN/male-electrician-works-switchboard-with-electrical-connecting-cable-1.jpg',
    'https://i.ibb.co/YdXKr6v/repairman-doing-air-conditioner-service.jpg'
];

const AutoSlider = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((currentImage + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentImage]);

    return (
        <div>
            <img src={images[currentImage]} alt={`Image ${currentImage}`} />
        </div>
    );
};

export default AutoSlider;
