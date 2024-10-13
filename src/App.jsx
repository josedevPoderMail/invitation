import "./App.css";

function App() {
  return (
    <>
      <section className="w-screen h-screen overflow-x-hidden   bg-[url(/background.png)] bg-center bg-contain relative ">
        <div className=' h-full w-full relative'>
          <VerticalRectangle
            image="/decorations/3.png"
            prop=" w-[30%] h-[150px] md:h-[350px] md:w-auto absolute -top-10 md:-left-24  md:-top-16 -left-4"
          />
          <VerticalRectangle
            image="/decorations/2.png"
            prop=" w-[30%] h-[150px] md:h-[350px] md:w-auto absolute -top-10 md:-right-24 md:-top-16 -right-4"
          />
          <HorizontalRectangle
            image="/decorations/19.png"
            props="absolute bottom-0 -left-10 md:-left-10  md:-bottom-3  "
          />
          <HorizontalRectangle
            image="/decorations/20.png"
            props="absolute bottom-0 -right-10 md:-right-10 md:-bottom-3   "
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
                  Raquel y Angel
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
        <div className="h-full w-full relative " >
        <VerticalRectangle
            image="/decorations/3.png"
            prop=" w-[30%] h-[200px] md:h-[350px] md:w-auto absolute -top-5 md:-left-24  md:-top-16 -left-10"
          />
          <VerticalRectangle
            image="/decorations/2.png"
            prop=" w-[30%] h-[200px] md:h-[350px] md:w-auto absolute -top-5 md:-right-24 md:-top-16 -right-10"
          />
          <HorizontalRectangle
            image="/decorations/19.png"
            props="absolute bottom-0 -left-10 md:-left-10  md:-bottom-3  "
          />
          <HorizontalRectangle
            image="/decorations/20.png"
            props="absolute bottom-0 -right-10 md:-right-10 md:-bottom-3   "
          />

        <section className="w-full h-full flex flex-col items-center justify-center gap-10 ">
          {/* Textos de gracias */}
          <div className="w-[90%] xl:w-[60%]  flex flex-col items-center justify-center gap-5">
            <h2 className="font-pinyon text-center text-primary/60 font-semibold text-3xl xl:text-6xl ">En este día especial <br /> te invitamos a celebrar  nuestra unión</h2>
            <p className="text-center font-cormorant font-black/80 text-[20px] xl:text-2xl">Con la bendición de Dios y de nuestros <br /> padres</p>
          </div>
          <div className="w-full xl:w-[60%]  flex flex-col gap-10 justify-evenly items-center ">
            {/* Nombre de los padres de la novia */}
            <div className="w-full text-center">
            <h2 className="my-2 font-cormorant font-bold text-3xl xl:text-5xl text-black/80">Padres de la novia</h2>
              <h3 className=" font-cormorant  text-xl xl:text-3xl  text-black/70 font-semibold">Sr. Roberto Bolaños Ibarra</h3>
              <h3 className="font-cormorant  text-xl xl:text-3xl  text-black/70 font-semibold">Sra. Verónica Corzo Rios</h3>
            </div>

            {/* Nombres de los padres del novio*/}
            <div className="w-full text-center">
            <h2 className="my-2 font-cormorant font-bold text-3xl xl:text-5xl text-black/80">Padres del novio</h2>
              <h3 className=" font-cormorant  text-xl xl:text-3xl  text-black/70 font-semibold">Sr. Rigoberto Hernández García</h3>
              <h3 className="font-cormorant  text-xl xl:text-3xl  text-black/70 font-semibold">Sra. Clara Luz Hernández Pérez</h3>
            </div>
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
    <span className="p-0 m-0 h-[2px]  w-full bg-gradient-to-r from-[#ddb92b8f] to-[#8f6d1c] "></span>
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
