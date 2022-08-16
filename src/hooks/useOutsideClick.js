import { useEffect, useRef } from "react";

export const useOutsideClick = (callbackFunction) => {
  const ref = useRef(); // Gerando uma referência para servir como seletor
  
  useEffect(() => {
    function handleOutclick(event){
      const target = event.target; //Elemento clicado

      //Se o elemento clicado está contido na referência
      if(!ref.current.contains(target)){
        callbackFunction(); //Executa função callback
      }
    }

    //Adicionando evento handleOutclick na montagem
    document.addEventListener('mousedown', handleOutclick);

    //Removendo evento handleOutclick desmontagem
    return () => {
      document.removeEventListener('mousedown', handleOutclick)
    }
  }, [])

  return ref;
}