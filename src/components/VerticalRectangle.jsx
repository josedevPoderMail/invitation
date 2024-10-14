import React from 'react'

export const VerticalRectangle = ({ prop, image }) => {
    return (
      <div className={` ${prop}`}>
        <img
          className="h-full w-full object-cover"
          src={image}
          alt="Imagen de una rosa como decoracion"
        />
      </div>
    );
  };
  