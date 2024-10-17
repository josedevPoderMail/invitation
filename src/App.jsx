import "./App.css";
import Countdown from "react-countdown";
import { CustomCounter } from "./components/Counter";
import { Stain } from "./components/Stain";
import { HorizontalRectangle } from "./components/Horizontalrectangle";
import { VerticalRectangle } from "./components/VerticalRectangle";
import { LineStyle } from "./components/LineStyle";
import { ContentRoses } from "./components/ContentRoses";

function App() {
  return (
    <>
      <section className="w-screen h-screen overflow-x-hidden   bg-[url(/background.png)] bg-center bg-contain relative ">
        <div className=" h-full w-full relative">
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
                <h6 className=" text-xl font-playfair">
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
        <div className="h-full w-full relative ">
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
          <Stain styles="absolute left-20 -top-20 " size="200px" />
          <Stain styles="absolute -left-[200px] bottom-[10px] " size="500px" />
          <Stain
            styles="absolute -right-40 top-0 bottom-0 m-auto"
            size="650px"
          />
          <section className="w-full h-full flex flex-col items-center justify-center gap-10 ">
            {/* Textos de gracias */}
            <div className="w-[90%] xl:w-[60%]  flex flex-col items-center justify-center gap-5">
              <h2 className="font-pinyon text-center text-primary/60 font-semibold text-3xl xl:text-6xl ">
                En este día especial <br /> te invitamos a celebrar nuestra
                unión
              </h2>
              <p className="text-center font-cormorant font-black/80 text-xl xl:text-2xl">
                Con la bendición de Dios y de nuestros <br /> padres
              </p>
            </div>
            <div className="w-full xl:w-[60%]  flex flex-col gap-10 justify-evenly items-center ">
              {/* Nombre de los padres de la novia */}
              <div className="w-full text-center">
                <h2 className="my-2 font-cormorant font-bold text-3xl xl:text-5xl text-black/80">
                  Padres de la novia
                </h2>
                <h3 className=" font-cormorant  text-xl xl:text-3xl  text-black/70 font-semibold">
                  Sr. Roberto Bolaños Ibarra
                </h3>
                <h3 className="font-cormorant  text-xl xl:text-3xl  text-black/70 font-semibold">
                  Sra. Verónica Corzo Rios
                </h3>
              </div>

              {/* Nombres de los padres del novio*/}
              <div className="w-full text-center">
                <h2 className="my-2 font-cormorant font-bold text-3xl xl:text-5xl text-black/80">
                  Padres del novio
                </h2>
                <h3 className=" font-cormorant  text-xl xl:text-3xl  text-black/70 font-semibold">
                  Sr. Rigoberto Hernández García
                </h3>
                <h3 className="font-cormorant  text-xl xl:text-3xl  text-black/70 font-semibold">
                  Sra. Clara Luz Hernández Pérez
                </h3>
              </div>
            </div>
          </section>
        </div>
        <div className="h-full w-full relative ">
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
          <Stain styles="absolute left-20 -top-20 " size="200px" />
          <Stain
            styles="absolute -right-40 top-0 bottom-0 m-auto"
            size="650px"
          />

          <div className="w-full h-full flex flex-col justify-center items-center ">
            <section
              className="w-full h-full xl:w-[60%] xl:h-[80%] flex flex-col 
            xl:gap-10 gap-10 
            justify-center items-center  "
            >
              <h2 className="font-pinyon text-primary   text-[90px]  xl:text-[180px] tracking-widest">
                Faltan
              </h2>
              <span className=" flex justify-around w-[90%]">
                <CustomCounter />
              </span>
              <h3 className="font-pinyon text-primary   text-5xl  xl:text-[80px]">
                para nuestro día
              </h3>
            </section>
          </div>
        </div>

        {/* Ubicacion de la boda */}
        <div className="w-full h-full relative">
          <div className="w-full h-[98%] relative  ">
            <VerticalRectangle
              image="/decorations/9.png"
              prop="  h-[120px] xl:h-[200px] md:w-auto 
        rotate-[30deg]
            absolute  xl:-left-5   xl:top-0 -left-10 top-0"
            />
            <VerticalRectangle
              image="/decorations/9.png"
              prop="  h-[220px] md:h-[300px] md:w-auto 
            -rotate-[30deg]
            absolute top-[20%] xl:-right-6 xl:top-4 -right-20 "
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
            <Stain
              styles="absolute -left-[200px] bottom-[10px] "
              size="500px"
            />
            <Stain
              styles="absolute -right-40 top-0 bottom-0 m-auto"
              size="650px"
            />
          </div>
          <div className="w-full h-full absolute top-0 bottom-0 left-0 right-0  flex justify-center">
            {/* Informacion de la ubicacion */}
            <section className="w-[90%] xl:w-[60%] h-full  flex flex-col justify-center items-center gap-10 py-4">
              <h2 className="font-pinyon text-primary xl:text-[90px] text-6xl text-center  tracking-tighter">
                Lugar del <br className="xl:hidden block" /> evento
              </h2>
              {/* imagen del lugar del evento */}
              <div className="h-[30%] xl:h-1/2 xl:w-[60%] w-full  rounded-2xl overflow-hidden border-4 border-white  ">
                <img
                  className="w-full h-full"
                  src="\decorations\salon-campeador.jpg"
                  alt="Imagen del salon del evento"
                />
              </div>
              {/*  Informacion del lugar y el call to action almapa de google */}
              <div className="w-full flex flex-col items-center gap-4">
                <h2 className="font-cormorant text-black text-4xl  xl:text-5xl text-center font-bold">
                  Salón Campeador
                </h2>
                <h3 className="text-center text-xl xl:text-2xl text-black/80 font-semibold font-cormorant">
                  2a Calle Norte Poniente Num. 134. Barrio La Candelaria, 30060{" "}
                  <br className="hidden xl:block" />
                  Comitán De Dominguez, Chiapas
                </h3>
                <button className=" font-cormorant bg-[#3C281D] text-white border-4 py-3 px-20 border-white rounded-xl">
                  Ver Mapa
                </button>
              </div>
            </section>
          </div>
        </div>

        <div className="w-full h-full my-10">
          <section className="w-full h-full relative">
            <VerticalRectangle
              image="/decorations/10.png"
              prop="  h-[120px] xl:h-[200px] md:w-auto 
            absolute  xl:-left-5   xl:top-0 -left-14 -top-5"
            />
            <VerticalRectangle
              image="/decorations/10.png"
              prop="  h-[100px] xl:h-[200px] md:w-auto 
            absolute  xl:-right-5   xl:top-0 -right-10 top-20"
            />

            <HorizontalRectangle
              image="/decorations/19.png"
              props="absolute bottom-0 -left-10 md:-left-10  md:-bottom-3  "
            />
            <HorizontalRectangle
              image="/decorations/20.png"
              props="absolute bottom-0 -right-10 md:-right-10 md:-bottom-3   "
            />
            <Stain
              styles="absolute -left-[100px] bottom-[10px] "
              size="500px"
            />
            <Stain
              styles="absolute -right-40 top-0 -bottom-24 m-auto"
              size="400px"
            />
            <div className="w-full h-full  absolute top-0 bottom-0 right-0 left-0 z-10 flex items-center justify-center">
              {/* horarios e iconos */}
              <section className=" h-[70%] xl:h-[70%]  w-full xl:w-1/2  flex flex-col gap-10 justify-evenly items-center ">
                <h2 className="font-pinyon text-primary xl:text-[90px] text-[70px] ">
                  Horarios
                </h2>
                <h3 className="font-cormorant text-black text-5xl text-center font-semibold">
                  Recepción <br /> <p>05:30 pm</p>
                </h3>
                <img
                  className="object-cover h-[120px] xl:h-[220px]"
                  src="\decorations\11.png"
                  alt="Imagen de una puertas"
                />
                <h4 className="xl:hidden block text-xl font-cormorant text-black font-semibold">
                  ¡No llegues tarde!
                </h4>
              </section>
            </div>
          </section>
        </div>

        {/* Horarios de cremonia y convivio */}
        <div className="w-full h-full ">
          <section className="w-full h-full relative">
            <VerticalRectangle
              image="/decorations/10.png"
              prop="  h-[120px] xl:h-[200px] md:w-auto 
            absolute  xl:-left-5   xl:top-0 -left-14 -top-5"
            />
            <VerticalRectangle
              image="/decorations/10.png"
              prop="  h-[100px] xl:h-[200px] md:w-auto 
            absolute  xl:-right-5   xl:top-0 -right-10 top-20"
            />

            <HorizontalRectangle
              image="/decorations/19.png"
              props="absolute bottom-0 -left-10 md:-left-10  md:-bottom-3  "
            />
            <HorizontalRectangle
              image="/decorations/20.png"
              props="absolute bottom-0 -right-10 md:-right-10 md:-bottom-3   "
            />

            <div className="w-full h-full  absolute top-0 bottom-0 right-0 left-0 z-10 flex items-center justify-center">
              {/* Horarios  */}
              <section className="w-full xl:w-[70%]   relative   overflow-hidden  flex xl:flex-row flex-col gap-10 ">
                {/* Horario de la ceremonia */}
                <div className="w-full  xl:h-auto relative  h-full flex flex-col justify-center gap-10 items-center">
                  <Stain styles="absolute top-20" size="150px" />
                  <div className="text-center tras text-2xl xl:text-4xl font-cormorant   font-semibold ">
                    <h2>Ceremonia</h2>
                    <p>06:00 pm</p>
                  </div>
                  <img
                    className="object-cover  h-[120px] xl:h-[300px]"
                    src="\decorations\12.png"
                    alt="Imagen de dos siluetas de hombre y mujer"
                  />
                </div>
                {/* Horario del evento */}
                <div className="w-full xl:h-auto relative  h-full flex flex-col justify-center gap-10 items-center">
                  <Stain styles="absolute  top-20" size="150px" />
                  <div className="text-center  text-2xl xl:text-4xl font-cormorant   font-semibold ">
                    <h2>Convivio</h2>
                    <p>08:00 pm</p>
                  </div>
                  <img
                    className="object-cover  h-[120px] xl:h-[300px]"
                    src="\decorations\13.png"
                    alt="Imagen de copas de vino"
                  />
                </div>
                <ContentRoses
                  styles=" xl:hidden block xl:h-44 xl:w-[120px]  h-[180px] bottom-[200px]    absolute xl:-left-10  xl:top-[50%] -left-10 rotate-45 xl:rotate-0 "
                  image="/decorations/4.png"
                />
                <ContentRoses
                  styles=" xl:hidden block xl:h-44 xl:w-[120px]  h-[180px] bottom-[100px]    absolute xl:-right-10 xl:top-[35%] -right-8  xl:rotate-45"
                  image="/decorations/4.png"
                />
              </section>
            </div>
          </section>
        </div>

        <div className="w-full h-full my-10 ">
          <section className="w-full h-full relative ">
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

            <div className=" w-full h-[90%] 5 absolute top-0 bottom-0 right-0 left-0 z-10 flex items-center justify-center">
              <section className="xl:w-[80%]  w-full  h-[80%] relative flex flex-col items-center justify-center gap-10">
              <ContentRoses
                  styles=" xl:hidden block xl:h-44 xl:w-[120px]  h-[180px] bottom-[200px]    absolute xl:-left-10  xl:top-[50%] -left-10 rotate-45 xl:rotate-0 "
                  image="/decorations/4.png"
                />
                <ContentRoses
                  styles=" xl:hidden block xl:h-44 xl:w-[120px]  h-[180px] bottom-[100px]    absolute xl:-right-10 xl:top-[35%] -right-8  xl:rotate-45"
                  image="/decorations/4.png"
                />
                {/* Titulo de la secion y mensaje*/}
                <div className="flex flex-col gap-2 text-center">
                  <h2 className="font-pinyon text-primary xl:text-[90px] text-6xl">
                    Estas invitado
                  </h2>
                  <p className="text-black font-cormorant xl:text-2xl text-md font-semibold">
                    Estaremos muy agradecios que confirmen su asistencia <br />
                    para poder asignarles mesa junto a sus familiares
                  </p>
                </div>
                {/* Formulario de invitados */}
                <div className="flex xl:flex-row flex-col xl:gap-20 gap-4 w-[60%] xl:w-full  h-auto  justify-center">
                  {/* Input del representante */}
                  <div
                    className="bg-primary rounded-2xl text-white font-bold text-center
                  p-5 justify-center items-center
                  font-cormorant flex flex-col gap-2 xl:gap-10"
                  >
                    <h3 className="text-xl font-cormorant ">
                      Representante de <br /> la familia
                    </h3>
                    <input
                    className="border-0 bg-primary border-b-2  placeholder:text-white/80"
                      type="text"
                      placeholder="Jose Alejandro Cruz Perez"
                    />
                  </div>
                  {/* Numero de acompaniantes */}
                  <div
                    className="bg-primary rounded-2xl text-white font-bold text-center
                  p-5 justify-center items-center
                  font-cormorant flex flex-col gap-2 xl:gap-10"
                  >
                    <h2 className="font-cormorant text-xl">
                      NO. De <br /> acompañantes
                    </h2>
                    <CompanionsInput />
                  </div>
                </div>
                {/* Boton de confirmar */}
                <button
                  className="bg-primary px-10 py-4 text-center font-cormorant
                rounded-2xl
                text-xl text-white font-semibold"
                >
                  Confirmar mis datos
                </button>
              </section>
            </div>
          </section>
        </div>


        <div className="w-full h-[1200px] bg-[url('public/decorations/pareja.jpg')]   bg-cover bg-center ">

          <section className="w-full h-full relative">
     
            <div className="  w-[95%] xl:w-[60%]  flex flex-col justify-center items-center 
            bg-cover bg-[url('public/decorations/15.png')] 
            absolute left-0 right-0 m-auto rounded-br-[40px] rounded-bl-[40px] ">
                <h2 className="p-0 m-0 text-center text-2xl xl:text-3xl font-cormorant font-bold">Eclesiastés 4:9-12</h2>
              <p  className="text-center text-md xl:text-xl font-cormorant">
              9 La verdad, «más valen dos que uno», porque sacan más provecho de lo que hacen. 
10 Además, si uno de ellos se tropieza, el otro puede levantarlo. Pero ¡pobre del que cae y no tiene quien lo ayude a levantarse! 
11 Y también, si dos se acuestan juntos, entran en calor; pero uno solo se muere de frío. 12 Una sola persona puede ser vencida, pero dos ya pueden defenderse; y si tres unen sus fuerzas, ya no es fácil derrotarlas
              </p>
              <img className="w-[70%] "  src="public/decorations/14.png" alt="imagen de una decoracion" />
            </div>
        
            <VerticalRectangle
              image="/decorations/16.png"
              prop=" w-[30%] h-[100px] md:h-[350px] md:w-auto absolute xl:left-0 -left-4 -top-2"
            />
         
            <HorizontalRectangle
              image="/decorations/17.png"
              props="absolute bottom-0 right-0 rotate-90   "
            />
            
          </section>
        </div>
      </section>
    </>
  );
}
// TODO: Terminar esto: Disenio
const CompanionsInput = () => {
  return (
    <>
      <div className="flex gap-4">
        <button className="  bg-white p-2 rounded-full  ">
          <img src="\src\assets\svgs\increment.svg" alt="" />
        </button>
        <p className="text-2xl text-center font-bold  font-cormorant p-0 m-0">
          01
        </p>
        <button className="  bg-white p-2 rounded-full  ">
          <img src="\src\assets\svgs\decrement.svg" alt="" />
        </button>
      </div>


    </>
  );
};

export default App;
