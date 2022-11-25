import { FormContainer, FormStyle } from './FormStyle';
import { getUser } from "../api/users";
import { useState } from 'react';
import { CardUser } from './CardUser';
import { BeatLoader } from 'react-spinners'

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
        setUserData({name: "Usuário não encontrado"});

      console.log("Usuario não encontrado");
    }
    else {
      console.log("deu ruim");
      setUserData({name: "Usuário não encontrado"});
    }
  }

  return (
    <FormContainer>
      <FormStyle>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <button onClick={buscar}>Buscar</button>
      </FormStyle>
      {Object.keys(userData).length !== null ? <CardUser user={userData} /> : null}
    </FormContainer>
  )
}