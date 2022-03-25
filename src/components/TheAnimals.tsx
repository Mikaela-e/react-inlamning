import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import "./TheAnimals.css";

export const TheAnimals = () => {
    const [animal, setAnimal] = useState<IAnimal[]>([]);
    const [animalsId, setAnimalsId] = useState(0);
    const [theAnimalIsFed, setTheAnimalIsFed] = useState(false)
    const [theAnimalsNotFed, setTheAnimalsNotFed] = useState(false)

    let p = useParams();

    useEffect(()=>{
        if(p.id){
        setAnimalsId(+p.id)
        }
    })
    function feedTheAnimal(){
        setTheAnimalIsFed(true);
        setTheAnimalsNotFed(true);
    }
    useEffect(()=>{
        let animalLS = sessionStorage.getItem("Animals")
        if(animalLS){
            setAnimal(JSON.parse(animalLS));
        }
    },[]);

    let theAnimalDetails =  animal.map((animal: IAnimal)=>{
        let theDate = new Date()
        let theTimeForToDay = "Datum:" + " " + theDate.getFullYear() + '-' + (theDate.getMonth() + 1) + '-' + theDate.getDate()
        + " " + "Klockan:" + theDate.getHours()+":"+theDate.getMinutes()

    if(animalsId === animal.id){
        return(
        <>
        <div className="animalsContainer">
        <div key={animal.id}>
        <h1>{animal.name}</h1>
        <img src={animal.imageUrl} className="picture1" width="300px"/>
        <p>{animal.latinName}</p>
        <p>Beskrivning om djuret:</p>
        <p>{animal.longDescription}</p>
        <p>Föddes: {animal.yearOfBirth}</p>
        <p>Medicin till djuret: {animal.medicine}</p>
        <button className="btn" disabled={theAnimalsNotFed} onClick={feedTheAnimal}>Mata Djuret</button>
        <div>{theAnimalIsFed && <p>Djuret matades senast: {theTimeForToDay}</p> }</div>
        </div></div></>)
        }
    })
    

    return(<>
        <div>{theAnimalDetails}</div>
        <Link to="/Animals" className="theLink">Gå tillbaks till alla djuren</Link>
        </>)
}