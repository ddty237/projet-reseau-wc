import React, { useState } from "react";
import { ListBook } from "../../utils/fakeApi";
import Card from "./Card";

function Cards() {
    
    const [livres,setLivres] = useState(ListBook)

    return (
        <>
            {
                livres.map(livre => (
                    <Card key={livre.index} index={livre.index} name={livre.name} description={livre.description} auteur={livre.auteur} />
                ))
            }
        </>
    )
}

export default Cards;