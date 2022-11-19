import { CardUserStyle } from "./CardUserStyle"


type CardUserProps = {
    user: {
        login: string
        avatar_url: string
        html_url: string
    },
}
export function CardUser({ user }: CardUserProps) {
    return (
        <CardUserStyle>
            <img src={user.avatar_url} />
            <div className='info'>

            </div>
        </CardUserStyle>


    )
}