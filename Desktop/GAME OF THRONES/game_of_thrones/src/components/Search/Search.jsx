
import { useForm } from "react-hook-form";



export default function Search({onSubmit}){
const {register, handleSubmit} = useForm();


 return(
      
      <form onSubmit={handleSubmit(onSubmit)}>
       <input {...register("name")} type="text"/>
      </form>


    )
  
}
    // const [ busqueda, setBusqueda ] = useState("");
    // const { characters, setCharacters } = useContext(GoTcontext);
  
    // const handleChange=e=>{
    //     setBusqueda(e.target.value);
    //   filtrar(e.target.value);
    //   // setCharacters([])
    //     }
        
    // const filtrar = (terminoBusqueda)=>{
    //  const resultadosBusqueda = characters.filter((character) =>{
    //     if(character.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
    //         return character;
    //     }
         
    // })
    //   setCharacters(resultadosBusqueda)

    // }    
    // return(
    //   <>
    //    <input {...register("name")} type="search" value={busqueda} placeholder="" onChange={handleChange}/>
    //   </>
   


