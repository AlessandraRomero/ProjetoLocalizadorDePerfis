export async function getUser(user: string) {
    try {
        let response = await fetch(`https://api.github.com/users/` + user)
        let dados = await response.json()

        if(dados.message)
             return null

        return dados;
    } catch (error) {
        return null
    }
}