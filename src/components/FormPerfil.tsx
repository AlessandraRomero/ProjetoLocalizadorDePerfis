import { FormContainer, FormStyle } from './FormStyle';
import { getUser } from "../api/users";
import { useState } from 'react';
import { CardUser } from './CardUser';
import { ClipLoader } from 'react-spinners'
import { CardUserStyle } from './CardUserStyle';

export function FormPerfil() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoadng] = useState(false)

  async function buscar() {
    setIsLoadng(true)
    if (username) {
      const data = await getUser(username);
      setIsLoadng(false)

      if (data)
        setUserData(data);

      else
        setUserData({ name: "Usuário não encontrado" });
    }
    else {
      console.log("deu ruim");
      setUserData({ name: "Usuário não encontrado" });
    }
  }

  return (
    <FormContainer>
      <FormStyle>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <button onClick={buscar}>Buscar</button>
      </FormStyle>
      <CardUserStyle>
        {isLoading ? <ClipLoader
          color="#fff"
          size={50}
        /> : <CardUser user={userData} />}
      </CardUserStyle>
    </FormContainer>
  )
}