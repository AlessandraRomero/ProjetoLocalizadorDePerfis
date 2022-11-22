import { FaGithub } from "react-icons/fa";
import { HeaderStyle } from "./HeaderStyle";


export function HeaderApp(props:any) {
  return (
    <HeaderStyle>
      <FaGithub size={45} /> 
      <h3> LOCALIZADOR DE PERFIS</h3>
    </HeaderStyle>
  )
}