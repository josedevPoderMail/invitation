import React from 'react'

export const Stain = ({ styles, size }) => {
    return (
      <>
        <div
          style={{ height: size, width: size }}
          className={` ${styles}  xl:block hidden  `}
        >
          <img
            className={` h-full w-full `}
            src="\decorations\7.png"
            alt="Imagen de mancha ara decoracion"
          />
        </div>
      </>
    );
  };