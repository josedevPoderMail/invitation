import { initializeApp } from "firebase/app";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { VerticalRectangle } from "../components/VerticalRectangle";
import { Stain } from "../components/Stain";
import { ContentRoses } from "../components/ContentRoses";
import "../App.css";
const firebaseConfig = {
  apiKey: "AIzaSyAKYzENkbZYz1X23axJU0_4RvxHw3PvZWQ",
  authDomain: "invitation-e71f9.firebaseapp.com",
  projectId: "invitation-e71f9",
  storageBucket: "invitation-e71f9.appspot.com",
  messagingSenderId: "944468801010",
  appId: "1:944468801010:web:7c285fa821cdac30efe76b",
  measurementId: "G-YB1XDX4X81",
};


export const Guests = () => {
  const app = initializeApp(firebaseConfig);

  const [invitations, setInvitations] = useState([]);
  const [guests, setGuests] = useState([]);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const db = getFirestore(app);
  const getData = async () => {
    await getDocs(collection(db, "invitations"))
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        const totalCompanions = data.reduce((acc, item) => {
          return acc + item.companions;
        }, 0);
        setInvitations(totalCompanions + data.length);
        setGuests(data);
        console.log(data);
      })
      .catch((error) => {
        throw new Error("Error al obtener los documentos" + error);
      });
  };

  const handleDelte = async (id) => {
    try {
      setLoadingDelete(true);
      const docRef = doc(db, "invitations", id);
      await deleteDoc(docRef);
      getData();
    } catch (error) {
      throw new Error("Error al eliminar el documento" + error);
    } finally {
      setLoadingDelete(false);
    }
  };

    useEffect(() => {
      getData();
    }, []);
  return (
    <div className='h-screen w-screen  overflow-hidden relative bg-[url("public/background.png")]'>
      {loadingDelete && <LoadingDelete />}
      <VerticalRectangle
        image="/decorations/3.png"
        prop=" w-[30%] h-[150px] md:h-[350px] md:w-auto absolute -top-10 md:-left-24  md:-top-16 -left-4"
      />
      <VerticalRectangle
        image="/decorations/2.png"
        prop=" w-[30%] h-[150px] md:h-[350px] md:w-auto absolute -top-10 md:-right-24 md:-top-16 -right-4"
      />

      <div className="absolute bottom-0 h-20  w-full flex flex-col items-center justify-center">
        <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
          <p className="text-white">{invitations}</p>
        </div>
        <p className="text-primary font-cormorant text-2xl font-bold">
          Asistentes Confirmados
        </p>
      </div>
      <Stain styles="absolute z-10 left-20 -top-20 " size="200px" />
      <Stain styles="absolute -left-[200px] bottom-[10px] " size="500px" />
      <Stain styles="absolute right-[300px] -top-[300px] " size="500px" />
      <Stain styles="absolute -right-40 top-0 bottom-0 m-auto" size="650px" />
      <ContentRoses
        styles="xl:h-44 xl:w-[120px]  h-[90px] bottom-[200px] xl:hidden block   absolute  -left-2 rotate-45 xl:rotate-0 "
        image="/decorations/4.png"
      />
      <ContentRoses
        styles="xl:h-44 xl:w-[120px]  h-[100px] top-[150px]  xl:hidden block  absolute xl:-right-10 xl:top-[35%] right-0  xl:rotate-45"
        image="/decorations/4.png"
      />

      <section className="absolute top-[100px] bottom-20 left-0 right-0 m-auto  flex flex-col items-center">
            <h2 className=" text-5xl  text-center font-pinyon text-primary  ">
                Lista de invitados
            </h2>
            <div className="w-[80%] flex-1  overflow-y-auto">
                {
                    guests.length === 0 ? (
                        <h1 className="text-2xl text-black font-cormorant">
                            No tienes invitados aun
                        </h1>
                    ) : (
                        guests.map((guest) => (
                            <CardGuest
                                fnRemove={handleDelte}
                                key={guest.id}
                                id={guest.id}
                                nameRepresentative={guest.name}
                                companions={guest.companions}
                            />
                        ))
                    )
                }
            </div>
      </section>

    </div>
  );
};

const CardGuest = ({ nameRepresentative, companions, id, fnRemove }) => {
  return (
    <>
      <div className="w-full  mb-5    flex  justify-between items-center gap-5">
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => {
              fnRemove(id);
            }}
            className="close-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-trash-2"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              <line x1="10" x2="10" y1="11" y2="17" />
              <line x1="14" x2="14" y1="11" y2="17" />
            </svg>
          </button>
          <h3 className="font-cormorant text-xl xl:text-3xl text-black font-semibold">
            {nameRepresentative}
          </h3>
        </div>
        <p className="font-cormorant text-xl xl:text-3xl text-primary font-bold">
          +{companions}P
        </p>
      </div>
    </>
  );
};

export const LoadingDelete = () => {
  return (
    <>
      <div className="w-full h-full bg-primary/60 flex justify-center items-center  absolute top-0 bottom-0 left-0 right-0 z-40">
        <span class="loader2"></span>
      </div>
    </>
  );
};
