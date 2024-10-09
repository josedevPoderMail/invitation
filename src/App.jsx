import './App.css'

function App() {

  return (
    <>
      <section className='w-screen h-screen overflow-x-hidden scroll' >
        <div className=' h-full w-full overflow-hidden   bg-[url("/public/fondo.png")] bg-center bg-contain relative'>
          <VerticalRectangle image='/public/decorations/3.png' prop='absolute -top-10 md:-left-14  md:-top-16 -left-6' />
          <VerticalRectangle image='/public/decorations/2.png' prop='absolute -top-10 md:-right-14 md:-top-16 -right-6' />
          <HorizontalRectangle image='/public/decorations/19.png' props='absolute -bottom-10 -left-10 md:-left-10  md:-bottom-3  ' />
          <HorizontalRectangle image='/public/decorations/20.png' props='absolute -bottom-10 -right-10 md:-right-10 md:-bottom-3   ' />
          <Stain styles='absolute left-20 -top-20 ' size='200px' />
          <Stain styles='absolute -left-[200px] bottom-[10px] ' size='700px' />
          <Stain styles='absolute right-[300px] -top-[300px] ' size='500px' />
          <Stain styles='absolute -right-40 top-0 bottom-0 m-auto' size='650px' />
          <section className='h-full w-full  flex justify-center items-center '>
            <div className=' h-[95%] w-full md:w-2/5 flex flex-col justify-center items-center  relative ' >
              <img className='object-cover h-1/2' src="/public/decorations/1.png" alt="Imagen de los novios, sosteniendo las manos uno al otro" />
              <div className='flex flex-col gap-3 items-center justify-center text-center mt-10' >
                <p className=' text-secondary  text-5xl font-pinyon'>Nos Casamos</p>
                <p className=' text-primary text-6xl font-pinyon '>Raquel y angel</p>
                <h6 className=' text-sm font-playfair'>Este dia tan especial estaremos junto a <br /> nuestros sere queridos </h6>
              </div>
              <div className=' h-[150px] w-full  my-10 flex gap-2 justify-between item-center'>
                <div className='h-full flex flex-col flex-1 px-1 justify-center items-center gap-6'  >
                  <LineStyle />
                  <h2 className='text-primary font-cormorant text-3xl font-bold'>SÁBADO</h2>
                  <LineStyle />
                </div>
                <div className='h-full flex flex-col justify-center items-center gap-1'  >
                  <h2 className=' p-0 m-0 font-playfair text-primary font-bold text-[95px] '>9</h2>
                  <h3 className='font-cormorant text-xl' >NOVIEMBRE</h3>
                </div>
                <div className='h-full flex flex-col flex-1 px-1 justify-center items-center gap-6'  >
                  <LineStyle />
                  <h2 className='text-primary font-cormorant text-3xl font-bold'>6:00 PM</h2>
                  <LineStyle />
                  </div>
                  
              </div>
            <ContentRoses styles='absolute -left-10 top-[50%] ' image='/public/decorations/4.png'/>
            <ContentRoses styles='absolute -right-10 top-[35%] rotate-45' image='/public/decorations/4.png'/>
            </div>
          </section>
        </div>

        <div className=' h-full w-full    bg-[url("/public/fondo.png")] bg-center bg-contain relative'>
        </div>
      </section>
    </>
  )
} 

const ContentRoses = ({image, styles})=>{
  return(
    <div className={`h-54 w-[250px]  ${styles}`}>
    <img className='object-fill h-full ' src={image} alt="Imagen de una rosa" />
    </div>
  )
}

const LineStyle = () => {
 return ( <span className='p-0 m-0 h-1  w-full bg-gradient-to-r from-[#ddb92b8f] to-[#8f6d1c] ' ></span>)
}
const VerticalRectangle = ({ prop, image }) => {
  return (
    <div className={`w-[35%] h-[250px] md:h-[400px] md:w-[300px] 0 ${prop}`} >
      <img className='h-full w-full object-cover' src={image} alt="Imagen de una rosa como decoracion" />
    </div>
  )

}

const HorizontalRectangle = ({ image, props }) => {
  return (
    <div className={`w-1/2 md:h-[350px] md:w-[500px]  ${props}`} >
      <img className='h-full w-full object-cover' src={image} alt="Imagen de una rosa como decoracion" />

    </div>
  )
}
const Stain = ({ styles, size }) => {
  return (
    <>
      <div
        style={{ height: size, width: size }}
        className={` ${styles} md:block hidden  `} >
        <img className={` h-full w-full `} src="/public/decorations/7.png" alt="Imagen de mancha ara decoracion" />
      </div>
    </>
  )
}
export default App
