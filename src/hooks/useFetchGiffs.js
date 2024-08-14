
import { useEffect, useState } from "react";
import { getGiffs } from "../helpers/getGiffs";

export const useFetchGiffs = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Parecería lógico usar async/await dado que el getGiffs devuelve una promesa, pero useEffect debe devolver una función, no una promesa, así que no es correcto
  // useEffect(async() => {  
  //   const newImages = await getGiffs(category);
  //   setImages(newImages);
  // }, []); 
  
  //Sí que podemos crear una función asíncrona que llame al getGiffs y usarla en el useEffect
  const getImages = async() => {
    const newImages = await getGiffs(category);
    setImages(newImages);
    setIsLoading(false);
  }
  
  useEffect(() => {  
    getImages();
  }, []); 

  return {
    //images: images,
    //isLoading: isLoading
    //cuando devolvemos una propiedad que apunta a una variable con el mismo nombre, podemos devolverlo directamente así:
    images,
    isLoading
  }
}
