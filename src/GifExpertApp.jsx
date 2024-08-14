import { useState } from "react"
import { AddCategory, GiffGrid } from "./components";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const handleAddCategory = (newCategory) => {
    //Si la categoría ya existe, no hace nada
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
    //También se podría llamar de la siguiente manera, que es equivalente y ligeramente más clara, pero también más larga
    //setCategories(cat => [newCategory, ...cat])
  }

  return (
    <>
      <h1>GifExpertApp</h1> 
      <AddCategory 
        //Podemos pasar el setState al componente hijo, pero es mejor de la otra forma
        //setCategories={setCategories}
        onNewCategory={handleAddCategory}
      />
      {
        categories.map((category) => (
          <GiffGrid key={category} category={category}/>
        ))
      }       
    </>    
  )
}
