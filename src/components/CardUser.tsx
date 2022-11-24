import { useEffect, useState } from "react"
import { CardUserStyle } from "./CardUserStyle"


type CardUserProps = {
    user: {
        login?: string
        avatar_url?: string
        name?: string
        html_url?: string
    }
}

export function CardUser({ user }: CardUserProps) {
    const [textLink, setTextLink] = useState("");
    useEffect(() => {
        if (user.html_url)
            setTextLink("Perfil no Github");
        else
            setTextLink("")
    })

    return (
        <CardUserStyle>
            <img src={user.avatar_url} />
            <h3>{user.name || user.login}</h3>
            <a href={user.html_url}>{textLink}</a>
        </CardUserStyle>
    )
}