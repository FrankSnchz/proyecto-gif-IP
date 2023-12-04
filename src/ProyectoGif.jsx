import { useState } from "react"; 
import { AddCategory } from './components/AddCategory'; 
import { GifGrid } from './components/GifGrid'; 
export const ProyectoGif = () => { 
   

  const [categories, setCategories] = useState(["emos blingee"]); 
  // Definimos una función onAddCategory que toma un argumento newCategory 
  const onAddCategory = (newCategory) => { 
    
    if (categories.includes(newCategory)) return; 
    
    setCategories([newCategory, ...categories]); 
  }; 
 
  // Devolvemos el JSX que se renderizará 
  return ( 
    <>
     <h1>Proyecto final</h1> 
      {/* // Renderizamos el componente AddCategory y le pasamos una función que se 
activará cuando se agregue una nueva 
      categoría */} 
      <AddCategory onNewCategory={(value) => onAddCategory(value)} /> 
      {/* // Mapeamos las categorías a componentes GifGrid, cada uno con una clave única 
y una categoría */} 
      {categories.map((category) => ( 
        <GifGrid key={category} category={category} /> 
      ))} 
    </> 
  ); 
}; 