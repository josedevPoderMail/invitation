import './App.css'

function App() {

  return (
    <>
      <section className='w-screen h-screen ' >
      <div className=' h-full w-full overflow-hidden   bg-[url("/public/fondo.png")] bg-center bg-contain relative'>
      <VerticalRectangle image='/public/decorations/3.png' prop='absolute -top-10 md:-left-14  md:-top-16 -left-6' />
        <VerticalRectangle image='/public/decorations/2.png' prop='absolute -top-10 md:-right-14 md:-top-16 -right-6' />
        <HorizontalRectangle image='/public/decorations/19.png' props='absolute -bottom-10 -left-10 md:-left-10  md:-bottom-3  ' />
        <HorizontalRectangle image='/public/decorations/20.png' props='absolute -bottom-10 -right-10 md:-right-10 md:-bottom-3   ' />
      <Stain styles='absolute left-20 -top-20 ' size='200px'/>
      <Stain styles='absolute -left-20 -bottom-40 ' size='550px'/>
      <Stain styles='absolute right-[300px] -top-[250px] ' size='450px'/>
      <Stain styles='absolute right-0 top-0 bottom-0 m-auto' size='450px'/>
      <section className='h-full w-full  flex justify-center items-center'>
        <div className='bg-blue-300 h-[95%] w-full md:w-2/5 flex justify-center items-center' >
          Contenido de las dos personas
        </div>
      </section>
      </div>
      </section>
    </>
  )
}
const VerticalRectangle = ({ prop, image }) => {
  return (
    <div className={`w-[35%] h-[200px] md:h-[300px] md:w-[250px] 0 ${prop}`} >
      <img className='h-full w-full object-cover' src={image} alt="Imagen de una rosa como decoracion" />
    </div>
  )

}

const HorizontalRectangle = ({ image, props }) => {
  return (
    <div className={`w-1/2 md:h-[250px] md:w-[400px]  ${props}`} >
      <img className='h-full w-full object-cover' src={image} alt="Imagen de una rosa como decoracion" />

    </div>
  )
}
const Stain =({styles, size}) =>{
  return(
    <>
    <div
    style={{height:size, width:size}}
     className={` ${styles} md:block hidden  `} >
    <img  className={` h-full w-full `}  src="/public/decorations/7.png" alt="Imagen de mancha ara decoracion" />
    </div>
    </>
  )
}
export default App
