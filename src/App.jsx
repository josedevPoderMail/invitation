import "./App.css";

function App() {
  return (
    <>
      <section className="w-screen h-screen overflow-x-hidden scroll">
        <div className=' h-full w-full overflow-hidden   bg-[url("/fondo.png")] bg-center bg-contain relative z-20'>
          <VerticalRectangle
            image="/decorations/3.png"
            prop=" w-[30%] h-[250px] md:h-[350px] md:w-auto absolute -top-10 md:-left-24  md:-top-16 -left-4"
          />
          <VerticalRectangle
            image="/decorations/2.png"
            prop=" w-[30%] h-[250px] md:h-[350px] md:w-auto absolute -top-10 md:-right-24 md:-top-16 -right-4"
          />
          <HorizontalRectangle
            image="/decorations/19.png"
            props="absolute -bottom-10 -left-10 md:-left-10  md:-bottom-3  "
          />
          <HorizontalRectangle
            image="/decorations/20.png"
            props="absolute -bottom-10 -right-10 md:-right-10 md:-bottom-3   "
          />
          <Stain styles="absolute left-20 -top-20 " size="200px" />
          <Stain styles="absolute -left-[200px] bottom-[10px] " size="500px" />
          <Stain styles="absolute right-[300px] -top-[300px] " size="500px" />
          <Stain
            styles="absolute -right-40 top-0 bottom-0 m-auto"
            size="650px"
          />
          <section className="h-full w-full  flex justify-center items-center ">
            <div className=" h-[75%] w-full md:w-2/5 flex flex-col justify-center items-center  relative ">
              <img
                className="object-cover h-[40%] xl:h-[70%] "
                src="/decorations/1.png"
                alt="Imagen de los novios, sosteniendo las manos uno al otro"
              />
              <div className="flex flex-col  items-center justify-center text-center mt-4">
                <p className=" text-secondary  text-[35px] font-pinyon">
                  Nos Casamos
                </p>
                <p className=" text-primary text-[40px] font-pinyon ">
                  Raquel y angel
                </p>
                <h6 className=" text-sm font-playfair">
                  Este día tan especial estaremos junto a <br /> nuestros seres
                  queridos{" "}
                </h6>
              </div>
              <div className=" h-[90px] w-[70%]  xl:w-full  my-10 flex gap-2 justify-between item-center">
                <div className="h-full flex flex-col flex-1 px-1 justify-center items-center  gap-2">
                  <LineStyle />
                  <h2 className="text-primary font-cormorant xl:text-[30px] md:text-md  font-extrabold">
                    SÁBADO
                  </h2>
                  <LineStyle />
                </div>
                <div className="h-full flex flex-col justify-center items-center gap-1">
                  <h2 className=" p-0 m-0 font-playfair text-primary font-bold  md:text-[50px] xl:text-[70px] text-5xl ">
                    9
                  </h2>
                  <h3 className="font-cormorant text-md font-semibol text-[15px]">
                    NOVIEMBRE
                  </h3>
                </div>
                <div className="h-full flex flex-col flex-1 px-1 justify-center items-center gap-2">
                  <LineStyle />
                  <h2 className="text-primary font-cormorant xl:text-[30px] md:text-md font-extrabold">
                    6:00 PM
                  </h2>
                  <LineStyle />
                </div>
              </div>
              <ContentRoses
                styles="xl:h-44 xl:w-[120px]  h-[180px] bottom-[200px]    absolute xl:-left-10  xl:top-[50%] -left-10 rotate-45 xl:rotate-0 "
                image="/decorations/4.png"
              />
              <ContentRoses
                styles="xl:h-44 xl:w-[120px]  h-[180px] bottom-[100px]    absolute xl:-right-10 xl:top-[35%] -right-8  xl:rotate-45"
                image="/decorations/4.png"
              />
            </div>
          </section>
        </div>

        <div className=' h-full w-full    bg-[url("/fondo.png")] bg-center bg-contain relative'>
          <VerticalRectangle
            image="/decorations/3.png"
            prop=" w-[30%] h-[200px] md:h-[350px] md:w-auto absolute -top-10 md:-left-24  md:-top-16 -left-4"
          />
          <VerticalRectangle
            image="/decorations/2.png"
            prop=" w-[30%] h-[200px] md:h-[350px] md:w-auto absolute -top-10 md:-right-24 md:-top-16 -right-4"
          />
          <HorizontalRectangle
            image="/decorations/19.png"
            props="absolute -bottom-10 -left-10 md:-left-10  md:-bottom-3  "
          />
          <HorizontalRectangle
            image="/decorations/20.png"
            props="absolute -bottom-10 -right-10 md:-right-10 md:-bottom-3   "
          />

          <Stain styles="absolute left-32 -top-32" size="300px" />
          <Stain styles="absolute -left-20 -bottom-10" size="500px" />
          <Stain styles="absolute right-32 -top-52" size="400px" />
          <Stain styles="absolute -right-20 top-52" size="450px" />

          <section className=" h-full w-full flex justify-center items-center">
            <div className="xl:w-[50%] w-[90%] h-[60%] relative text-center flex flex-col justify-evenly">
              {/* Mensaje de agradecimiento */}
              <div className="flex flex-col gap-6">
                <h2 className="font-pinyon text-primary/60 font-semibold xl:text-5xl text-5xl">
                  En este Día especial <br /> te invitamos a celebrar nuestra unión
                </h2>
                <h3 className="font-cormorant text-black/80  text-[20px] font-bold">
                  Con la bendición de Dios y de nuestros <br /> padres
                </h3>
              </div>

              <div className="">
                {/* Nombres de los padres de la novia */}
                <aside className="my-10">
                  <h3 className="font-cormorant font-bold text-4xl line-clamp-6 mb-4">
                    Padres de la novia
                  </h3>
                  <p className="font-cormorant text-2xl text-black/80  font-bold">
                    Sr. Roberto Bolaños Ibarra
                  </p>
                  <p className="font-cormorant text-2xl text-black/80  font-bold">
                    Sra. Verónica Corso Rios
                  </p>
                </aside>
                <aside>
                  <h3 className="font-cormorant font-bold text-4xl line-clamp-6 mb-4">
                    Padres del novio
                  </h3>
                  <p className="font-cormorant   text-2xl text-black/80  font-bold">
                    Sr. Rigoberto Hernández García
                  </p>
                  <p className="font-cormorant   text-2xl text-black/80  font-bold">
                    Sra. Clara Luz Hernández Pérez
                  </p>
                </aside>
              </div>
              <ContentRoses
                styles="xl:h-48 xl:w-[120px]  h-[180px] bottom-[200px]    absolute xl:-left-10  xl:top-[50%] -left-10 -rotate-[20deg] "
                image="/decorations/5.png"
              />
              <ContentRoses
                styles="xl:h-56 xl:w-[120px]  h-[180px] bottom-[100px]    absolute xl:-right-10 xl:top-[35%] -right-8  xl:rotate-45"
                image="/decorations/4.png"
              />
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

const ContentRoses = ({ image, styles }) => {
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

const LineStyle = () => {
  return (
    <span className="p-0 m-0 h-1  w-full bg-gradient-to-r from-[#ddb92b8f] to-[#8f6d1c] "></span>
  );
};
const VerticalRectangle = ({ prop, image }) => {
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

const HorizontalRectangle = ({ image, props }) => {
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
const Stain = ({ styles, size }) => {
  return (
    <>
      {/* Stain */}
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
export default App;
