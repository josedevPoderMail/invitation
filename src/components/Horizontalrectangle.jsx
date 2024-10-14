import React from 'react'

export const HorizontalRectangle = ({ image, props }) => {
    return (
      <div className={`w-1/2 md:h-[300px] md:w-auto   ${props}`}>
        <img
          className="h-full w-full object-cover "
          src={image}
          alt="Imagen de una rosa como decoracion"
        />
      </div>
    );
  };