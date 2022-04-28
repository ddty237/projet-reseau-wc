import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBook } from "../../utils/fakeApi";

function CardDetails(props) {
    
    let params = useParams()

    const [livre,setLivre] = useState(getBook(params.index))

    return (
        <>
            <nav className="w-full flex flex-row justify-between px-10 py-5 border-b-2 shadow-lg">
                <div className="text-xl">
                <img className="w-8 h-8" src="LogoENSPY.jpg" alt='logo'/>
                </div>
                <div>
                    <ul className="flex flex-row justify-between">
                        <li className="mx-2 pt-1">
                           <span>Profil</span>
                        </li>
                        <li className="mx-2 pt-1">
                            <p>
                                Déconnexion
                            </p>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="mx-auto min-w-full h-screen px-10 flex">
                <div className="w-64 h-64 bg-gray-800 flex justify-center mt-10 text-white items-center text-center">
                    Image du livre
                </div>
                <div className="flex flex-1 h-screen ml-6 flex-col mt-10">
                    <div className="text-gray-800 text-3xl font-semibold">
                        {livre.name}
                    </div>
                    <div className="text-lg mt-4">
                        {livre.detail}
                    </div>
                    <div className="text-lg mt-4 text-orange-500">
                        {livre.auteur}
                    </div>
                </div>

            </div>
            <div className="flex justify-end py-4 px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 object-cover rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                </div>
        </>
    )
}

export default CardDetails;