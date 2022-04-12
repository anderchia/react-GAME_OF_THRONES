
import useState, { useContext }  from "react";
import { GoTcontext } from "../../contexts/GoTcontext";


export default function Search(){
    const [ busqueda, setBusqueda ] = useState("");
    const { characters, setCharacters } = useContext(GoTcontext);
  
    const handleChange=e=>{
        setBusqueda(e.target.value);
      filtrar(e.target.value);
setCharacters([])
        }
    const filtrar = (terminoBusqueda)=>{

     let resultadosBusqueda = characters.filter((character) =>{
        if(character.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
            return character;
        }
         
    })
      setCharacters(resultadosBusqueda)

    }    
    return(
      <>
       <input value={busqueda} placeholder="...buscar" onChange={handleChange}/>


      </>



    )
  
}


