import { initializeApp } from 'firebase/app';
import { collection, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { VerticalRectangle } from '../components/VerticalRectangle';
import { HorizontalRectangle } from '../components/Horizontalrectangle';
import { Stain } from '../components/Stain';
import { ContentRoses } from '../components/ContentRoses';
const firebaseConfig = {
    apiKey: "AIzaSyAKYzENkbZYz1X23axJU0_4RvxHw3PvZWQ",
    authDomain: "invitation-e71f9.firebaseapp.com",
    projectId: "invitation-e71f9",
    storageBucket: "invitation-e71f9.appspot.com",
    messagingSenderId: "944468801010",
    appId: "1:944468801010:web:7c285fa821cdac30efe76b",
    measurementId: "G-YB1XDX4X81"
};
export const Guests = () => {
    const app = initializeApp(firebaseConfig);

    const [invitations, setInvitations] = useState([])
    const [guests, setGuests] = useState([])
    const db = getFirestore(app)
    const getData = async () => {
        await getDocs(collection(db, 'invitations'))
            .then((querySnapshot) => {
                const data = querySnapshot.docs
                    .map(doc => ({ ...doc.data(), id: doc.id }))
                const totalCompanions = data.reduce((acc, item) => {
                    return acc + item.companions
                }, 0)
                setInvitations(totalCompanions + data.length)
                setGuests(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div className='h-screen w-screen  overflow-hidden relative bg-[url("public/background.png")]' >

            <div className=" h-full w-full relative">
                <VerticalRectangle
                    image="/decorations/3.png"
                    prop=" w-[30%] h-[150px] md:h-[350px] md:w-auto absolute -top-10 md:-left-24  md:-top-16 -left-4"
                />
                <VerticalRectangle
                    image="/decorations/2.png"
                    prop=" w-[30%] h-[150px] md:h-[350px] md:w-auto absolute -top-10 md:-right-24 md:-top-16 -right-4"
                />
            
                {/* Esfera con el numero de invitados*/}
                <div className=' h-auto  absolute bottom-4 right-0 flex flex-col justify-center items-center'>
                    <div className='h-[70px] w-[70px]  xl:h-44 xl:w-44 rounded-full flex 
                    p-0 m
                    justify-center items-center  bg-primary m-10'>
                        <h2 className='text-center text-2xl xl:text-6xl  font-cormorant font-bold text-white'>
                            {
                                invitations
                            }
                        </h2>
                    </div>
                    <h1 className='p-0 m-0 text-center font-cormorant text-2xl xl:text-3xl font-bold '>Asistentes <br /> Confirmados</h1>
                </div>
                <Stain styles="absolute z-10 left-20 -top-20 " size="200px" />
                <Stain styles="absolute -left-[200px] bottom-[10px] " size="500px" />
                <Stain styles="absolute right-[300px] -top-[300px] " size="500px" />
                <Stain
                    styles="absolute -right-40 top-0 bottom-0 m-auto"
                    size="650px"
                />
                   <ContentRoses
                styles="xl:h-44 xl:w-[120px]  h-[90px] bottom-[200px] xl:hidden block   absolute  -left-2 rotate-45 xl:rotate-0 "
                image="/decorations/4.png"
              />
              <ContentRoses
                styles="xl:h-44 xl:w-[120px]  h-[100px] top-[150px]  xl:hidden block  absolute xl:-right-10 xl:top-[35%] right-0  xl:rotate-45"
                image="/decorations/4.png"
              />
                <div className=' w-[80%] xl:w-[50%]  h-[60%] xl:h-[70%] flex flex-col justify-center 
                items-center absolute m-auto  left-0 right-0 top-20 ' >
                    <h3 className='text-primary text-6xl xl:text-[90px] font-pinyon  text-center'>Lista de invitados</h3>
                    <div className='mt-4 flex flex-col p-4 w-full h-full gap-10  justify-center items-center overflow-y-auto'>

                        {
                            guests.map(guest => (
                                <CardGuest key={guest.id} nameRepresentative={guest.name} companions={guest.companions} />
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )


}


const CardGuest = ({ nameRepresentative, companions }) => {
    return <>
        <div className='w-full h-44    flex  justify-between items-center gap-5'>
            <h3 className='font-cormorant text-xl xl:text-3xl text-black font-semibold'>{nameRepresentative}</h3>
            <p className='font-cormorant text-xl xl:text-3xl text-black font-semibold'>+{companions}P</p>
        </div>
    </>

}