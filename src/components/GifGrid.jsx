import { GifItem } from './GifItem'; 
import { useFetchGifs } from '../hooks/useFetchGifs'; 
 
// Definimos un componente funcional llamado GifGrid que toma una categoría como prop 
export const GifGrid = ({ category }) => { 
 
    // Usamos el hook useFetchGifs para obtener las imágenes y el estado de carga 
    const { images, isLoading } = useFetchGifs( category ); 
     
    // Devolvemos el JSX que se renderizará 
    return ( 
        <> 
            <h3>{ category }</h3> 
            { 
                isLoading && ( <h2>Cargando...</h2> ) 
            }
             <div className="card-grid"> 
                { 
                    images.map( ( image ) => ( 
                        <GifItem  
                            key={ image.id }  
                            { ...image } 
                        /> 
                    )) 
                } 
                 
            </div> 
 
        </> 
    ) 
} 