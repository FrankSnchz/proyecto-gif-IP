import { useState } from 'react'; 
 
export const AddCategory = ({ onNewCategory }) => { 
 
    
    const [ inputValue, setInputValue ] = useState(''); 
 
    const onInputChange = ({ target }) => { 
        setInputValue( target.value ); 
    } 
 
    const onSubmit = ( event ) => { 
        event.preventDefault(); 
        if( inputValue.trim().length <= 1) return;
         setInputValue(''); 
         onNewCategory( inputValue.trim() ); 
     } 
  
     // Devolvemos el JSX que se renderizará 
     return ( 
         <form onSubmit={ onSubmit }> 
             <input  
                 type="text" 
                 placeholder="Buscar gifs" 
                 // Vinculamos el valor del campo de entrada a inputValue 
                 value={ inputValue } 
                 // Cuando cambia el valor del campo de entrada, llamamos a onInputChange 
                 onChange={ onInputChange } 
             /> 
         </form> 
     ) 
 } 