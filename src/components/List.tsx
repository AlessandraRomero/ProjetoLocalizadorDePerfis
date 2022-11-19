import { useEffect, useState } from "react";

import { BarLoader, BeatLoader } from 'react-spinners'
import { getUsers } from "../api/users";
import { CardUser } from "./CardUser";


export function List() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoadng] = useState(false)

    const listUsers = async () => {
        setIsLoadng(true)
        const list = await getUsers();
        setIsLoadng(false)
        setUsers(list.results);
    }

    useEffect(() => {
        listUsers();
    }, [])

    return (
        <div>
            {isLoading ? <BeatLoader /> : ""}
            {
                users.map(user => <CardUser key={user.login} user={user} textButton="Ver Perfil" />)
            }
        </div>
    )
}