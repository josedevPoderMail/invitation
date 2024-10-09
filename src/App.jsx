import './App.css'

function App() {

  return (
    <>
      <section className='w-screen h-screen ' >
      <div className=' h-full w-full overflow-hidden  bg-[url("/public/fondo.png")] bg-center bg-contain relative'>
      <Stain sizw='200px'  styles='absolute left-20 -top-20'/>
      <Stain sizw='550px'  styles='absolute -left-40 top-52'/>
      <VerticalRectangle image='/public/decorations/3.png' prop='absolute top-0 md:-left-14  md:-top-16 -left-4' />
        <VerticalRectangle image='public/decorations/2.png' prop='absolute top-0 md:-right-14 md:-top-16 -right-4' />
        <HorizontalRectangle image='/public/decorations/19.png' props='absolute bottom-0 left-0 md:-left-10  md:-bottom-3  ' />
        <HorizontalRectangle image='public/decorations/20.png' props='absolute bottom-0 right-0 md:-right-10 md:-bottom-3   ' />
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
    <div className={`w-1/2    md:h-[250px] md:w-[400px]  ${props}`} >
      <img className='h-full w-full object-cover' src={image} alt="Imagen de una rosa como decoracion" />

    </div>
  )
}
const Stain =({styles, sizw}) =>{
  return(
    <>
    <img  className={`h-[${sizw}] w-[${sizw}] ${styles}`}  src="public/decorations/7.png" alt="Imagen de mancha ara decoracion" />
    </>
  )
}
export default App
