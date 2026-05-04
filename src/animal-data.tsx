import pitbullPath from "./american-pitbull-1.jpg"
import germanPath from "./german-shepherd.webp"
import chihuahuaPath from "./Chihuahua-dog.webp"
import dobermanPath from "./Doberman.png"
import rottweilerPath from "./Rottweiler.webp"
import sharPaiPath from "./shar-pei.jpeg"
import bullDogPath from "./bulldog.jpeg"
import huskyPath from "./siberian husky.webp"
import malinoisPath from "./malinois.webp"
import labradorPath from "./labrador.webp"
export const animalData = [
 {
    name: "Nova",
    id: crypto.randomUUID(),
    age: "7 months",
    size: "Medium",
    breed: "Pit Bull Terrier",
    image: pitbullPath
  },
  {
    name: "Carman",
    id: crypto.randomUUID(),
    age: "5 years",
    size: "Medium",
    breed: "German Shepherd",
    image: germanPath
  },
  {
    name: "Bolto",
    id: crypto.randomUUID(),
    age: "2 years",
    size: "Small",
    breed: "Chihuahua",
    image: chihuahuaPath
  },
  {
    name: "Jax",
    id: crypto.randomUUID(),
    age: "1 years",
    size: "Large",
    breed: "Doberman",
    image: dobermanPath
  },
  {
    name: "Kodiak",
    id: crypto.randomUUID(),
    age: "3 years",
    size: "Large",
    breed: "Rottweiler",
    image: rottweilerPath
  },
  {
    name: "Laxus",
    id: crypto.randomUUID(),
    age: "4 years",
    size: "Medium",
    breed: "Chinese Shar-Pei",
    image: sharPaiPath
  },
  {
    name: "Toby",
    id: crypto.randomUUID(),
    age: "2 years",
    size: "Small",
    breed: "bulldog",
    image: bullDogPath
  },
  {
    name: "Luka",
    id: crypto.randomUUID(),
    age: "4 years",
    size: "Medium",
    breed: "Siberian Husky Mix",
    image: huskyPath
  },
  {
    name: "Milo",
    id: crypto.randomUUID(),
    age: "6 years",
    size: "Large",
    breed: "Malinois",
    image: malinoisPath
  },
  {
    name: "River",
    id: crypto.randomUUID(),
    age: "2 years",
    size: "Large",
    breed: "Labrador Retriever Mix",
    image: labradorPath
  }
];