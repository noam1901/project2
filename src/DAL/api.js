
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
    static async registerPost(values){
        delete values.confirm_password
        const response = await fetch('http://localhost:3001/api/users/register',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                ...values,
                address: "",
                country: "",
                postalCode: "",
                phone: ""
            })
        })
        const data = await response.json()
        return data
    }
    static async getImagesById(id){
        const response = await fetch(`http://localhost:3001/api/imgs/${id}`,{
            method: 'GET',
        })
        const data = await response.json()
        return data
    }
    static async getAllProductsOnePhoto(){
        const response = await fetch('http://localhost:3001/api/products',{
            method: 'GET'
        })
        const data = await response.json()
        return data
    }
    static async getTopProductsOnePhoto(){
        const response = await fetch('http://localhost:3001/api/products/top',{
            method: 'GET'
        })
        const data = await response.json()
        return data
    }
}
