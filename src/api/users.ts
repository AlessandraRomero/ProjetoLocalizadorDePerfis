
export async function getUsers() {
    try {
        let response = await fetch('https://api.github.com/users')
        let dados = await response.json()
        return dados;
    } catch (error) {
        return []
    }
}