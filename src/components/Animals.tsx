import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";

import "./Animals.css";
export const Animals = () =>{
     
    const [animals, setAnimals] = useState<IAnimal[]>([]);

   useEffect(() => {
       
    if(IAnimal.length > 0){

    axios.get<IAnimal[]>('https://animals.azurewebsites.net/api/animals')
    .then((response =>{
        setAnimals(response.data);
        
   }))};
},[]);;

let AnimalsApi = animals.map((animal: IAnimal) => {
     let linkAnimal = `/theanimals/${animal.id}`;

   return (
       <li key={animal.id} className="theList">
           <h1 className="animalName">{animal.name}</h1>
           <img src={animal.imageUrl} className="picture" width="200px"/>
           <p className="description">Kort Beskrivning om djuret:</p>
           <p>{animal.shortDescription}</p>
           <p>Link to the Animal:</p>
           <Link to={linkAnimal} className="theLinks">{animal.name}</Link>
       </li>  
        
   )
   });
   sessionStorage.setItem("Animals", JSON.stringify(animals));
    return(<ul>{AnimalsApi}</ul>)

}