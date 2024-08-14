import { GiffItem } from "./GiffItem"
import { useFetchGiffs } from "../hooks/useFetchGiffs";

export const GiffGrid = ({category}) => {
  
  // const [images, setImages] = useState() 

  // const getImages = async() => {
  //   const newImages = await getGiffs(category);
  //   setImages(newImages)
  // }
  
  // useEffect(() => {  
  //   getImages();
  // }, []); 

  //En vez de usar todo lo que está comentado arriba, usamos un custom hook, donde pondremos todo ese código para que sea reutilizable
  const {images, isLoading} = useFetchGiffs(category);

  //Nunca hay que colocar la ejecución de una función dentro de un functional component, porque cada vez que se renderice el componente volverá a llamar la función
  //getGiffs(category)

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && <h2>Cargando...</h2>
      }
      
      <div className="card-grid">
        {
          images.map((image) => (
            <GiffItem 
              key={image.id}
              // al usar el operador spread (...) le pasamos todas las propiedades del objeto image como properties
              {...image}
            />
          ))
        }
      </div>
    </>
  )
}
