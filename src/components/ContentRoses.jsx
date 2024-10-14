import React from 'react'

export const ContentRoses = ({ image, styles }) => {
  return (
    <div className={`  ${styles}`}>
      <img
        className="object-fill h-full "
        src={image}
        alt="Imagen de una rosa"
      />
    </div>
  );
};