import { FaGithub } from "react-icons/fa";
import { HeaderStyle } from "./HeaderStyle";

export function HeaderApp(props:any) {
  return (
    <HeaderStyle>
      <FaGithub size={50} color={"#000000"} /> 
      <h3> LOCALIZADOR DE PERFIS</h3>
    </HeaderStyle>
  )
}