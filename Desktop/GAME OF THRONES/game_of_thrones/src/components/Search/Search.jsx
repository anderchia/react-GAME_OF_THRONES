
import "./Search.scss";
import {useForm} from "react-hook-form";


export default function Search({onSubmit}) {
  const { register, handleSubmit } = useForm();

  return (<form onSubmit={handleSubmit(onSubmit)}>
      <img className="searchIcon" src="/images/lupa.png" alt="searchIcon"/>
      <input className="buscador" {...register("title")} type="text" placeholder="      Buscar..."/>
    </form>
  );
}

//import useState, { useContext }  from "react";
// import { GoTcontext } from "../../contexts/GoTcontext";

// export default function Search(){
//     const [ busqueda, setBusqueda ] = useState("");
//     const { characters, setCharacters } = useContext(GoTcontext);

//     const handleChange=e=>{
//       console.log("TARGET",e.target);
//       setBusqueda(e.target.value);
//     filtrar(e.target.value);

//       }

//     const filtrar = (terminoBusqueda)=>{
//      console.log("FILTRO", characters);
//      let resultadosBusqueda = characters.filter((character) =>{
//         if(character.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
//             return character;
//         }

//     })
//       setCharacters(resultadosBusqueda)

//     }
//     return(
//       <div>
//        <p>HOLA ESTOY PASANDO</p>
//        <input value={busqueda} placeholder="...buscar" onChange={handleChange}/>
//       </div>

//     )

// }
