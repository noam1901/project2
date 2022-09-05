
export default class Api {
    static async loginPost(values){
        console.log(values);
        const response = await fetch('http://localhost:3001/api/users/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email: values.email,
                password: values.password
            }) 
        })
        const data = await response.json()
        return data
    }
}
