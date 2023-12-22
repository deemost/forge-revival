import React from 'react';

const AboutCard = ({ imageUrl }) => (
    <div className="image-with-text">
        <img src={imageUrl} alt="Description" />
    </div>
);

export default AboutCard;
