import { useState } from "react"
import { animalData } from "./animal-data"
import NavBar from "./navBar"
import AdoptButton from "./adoptButton"
import pitbullPath from "./american-pitbull-1.jpg"
export default function App() {
  const [animalList, setanimalList] = useState(animalData)
  const [searchTerm, setsearchTerm] = useState("")
  const searchResults = animalList.filter(animal => animal.breed.includes(searchTerm))
  const deleteAnimal = (animalId: string) => {
    setanimalList(animalList.filter(animal => animal.id !== animalId));
  };
  const [dogFact, setdogFact] = useState("")
  async function getDogFact(){
   const response = await fetch("https://dogapi.dog/api/v1/facts?number=1")
  const data = await response.json()
  setdogFact(data.facts[0])
}
  function addAnimal() {
    const newAnimal = {
      name: "Nova",
      id: crypto.randomUUID(),
      age: "7 months",
      size: "Medium",
      breed: "Pit Bull Terrier",
      image: pitbullPath
    }
    setanimalList([...animalList,newAnimal])
  }
  return (
    <div className="bg-amber-50">
      <NavBar searchTerm={searchTerm} setsearchTerm={setsearchTerm}></NavBar>
      <div className="flex">
      <button onClick={addAnimal}className="bg-zinc-800 m-4 text-slate-50 flex rounded-xl p-2 ">Add Pet</button>
      <button onClick={getDogFact} className="bg-zinc-800 m-4 text-slate-50 flex rounded-xl p-2">dog fact</button>
      </div>
      {dogFact}
      {searchResults.map((x) => (
        <div className="w-150 p-3 m-3 rounded-xl inset-shadow-sm bg-white flex gap-3  ">
          <img className="size-50 rounded-md" src={x.image}></img>
          <div>
            <h1 className="text-xl">name: {x.name}</h1>
            <h3 className="text-xl">Age: {x.age}</h3>
            <h3 className="text-xl">Breed: {x.breed}</h3>
            <AdoptButton onAdopt={() => deleteAnimal(x.id)} />
          </div>
        </div>
      ))}
    </div>
  )
}


//form