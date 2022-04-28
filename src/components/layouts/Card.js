import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
    return (
        <Link to={"/livre/" + props.index} >
            <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                <div>
                    <h2 className="text-gray-800 text-3xl font-semibold">{props.name}</h2>
                    <p className="mt-2 text-gray-600">{ props.description }</p>
                </div>
                    <div className="flex justify-end mt-4">
                        <p className="text-xl font-medium text-orange-500">{props.auteur}</p>
                    </div>
            </div>
        </Link>
        
    )
}

export default Card;