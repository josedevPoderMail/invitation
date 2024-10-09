import React from 'react'

export const Function = () => {

  const firebaseConfig = {
    apiKey: "AIzaSyAKYzENkbZYz1X23axJU0_4RvxHw3PvZWQ",
      authDomain: "invitation-e71f9.firebaseapp.com",
      projectId: "invitation-e71f9",
      storageBucket: "invitation-e71f9.appspot.com",
      messagingSenderId: "944468801010",
      appId: "1:944468801010:web:7c285fa821cdac30efe76b",
      measurementId: "G-YB1XDX4X81"
    };
    const app = initializeApp(firebaseConfig);
    const [representativeName, setRepresentativename] = useState('')
    const [companions, setCompanions] = useState('')
    const [invitations, setInvitations] = useState([])
    const [message, setMessage] = useState('Esperando mensaje....')
    
     const db = getFirestore(app)
  const dontHandleInout = (e) => {
    e.preventDefault()
  }
  const hadleSubmit = async  () =>{
    try {
      const res = await addDoc(collection(db, 'invitations'),{
      name:   representativeName,
      companions:  parseInt(companions)
      });
      setRepresentativename('')
      setCompanions('')
      console.log(res)
      setMessage('Invitacion enviada')
    } catch (error) {
      console.log(error)
      setMessage('Error al enviar la invitacion')
    }
  }
  
  
  const getData =async() =>{
  await getDocs(collection(db, 'invitations'))
  .then((querySnapshot)=>{
    const data = querySnapshot.docs
    .map(doc=>({...doc.data(), id:doc.id}))
    const totalCompanions = data.reduce((acc, item)=>{
      return acc + item.companions
    },0)
    setInvitations(totalCompanions+data.length)
  })
  .catch((error)=>{
    console.log(error)
  })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>   <div style={{display:'flex', gap:'20px '}}>
    <input  style={{
      padding:'20px',
    }}   type="text"  placeholder='Nombre del representante'
    onChange={(e) => {
      setRepresentativename(e.target.value)
    }}
    value={representativeName}
     />



    <input 
    value={companions}
    onChange={(e) => {
      setCompanions(e.target.value)
    }}
    style={{
      padding:'20px',
    }}   type="number" name="companions" id="numberCompanions" placeholder='Numero de acompañantes'
    min={1} max={5} onKeyDown={dontHandleInout}
    />
   </div>

   <button style={{
        padding:'20px',
        margin:'20px',
        borderRadius:'5px',
        backgroundColor:'white',
        color:'black'

   }} onClick={hadleSubmit} >Enviar</button>
  <p>Mensaje: {message}</p>
  <p>Numero de invitados confirmados: {invitations}</p></div>
  )
}
