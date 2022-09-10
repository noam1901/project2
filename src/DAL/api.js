
export default class Api {
    static async loginPost(values){
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
    static async getUserDetails(id){
        const response = await fetch(`http://localhost:3001/api/users/${id}`,{
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
    static async getProductById(prodid){
        const response = await fetch(`http://localhost:3001/api/products/${prodid}`,{
            method: 'GET'
        })
        const data = await response.json()
        return data
    }
    static async getRatingById(prodid){
        const response = await fetch(`http://localhost:3001/api/ratings/${prodid}`,{
            method: 'GET'
        })
        const data = await response.json()
        return data
    }
    static async AddToCart(values){
        const response = await fetch('http://localhost:3001/api/cart',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                ...values
            })
        })
        const data = await response.json()
        return data
    }
    static async getProductsCart(userid){
        const response = await fetch(`http://localhost:3001/api/cart/${userid}`,{
            method: 'GET'
        })
        const data = await response.json()
        return data
    }
    static async getOrdersByUserId(userid){
        const response = await fetch(`http://localhost:3001/api/orders/${userid}`,{
            method: 'GET'
        })
        const data = await response.json()
        return data
    }
    static async removeFromCart(values){
        const response = await fetch(`http://localhost:3001/api/cartdetails`,{
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                cartid: values.cartid,
                productid: values.productid
            }) 
        })
        const data = await response.json()
        return data
    }
    static async clearCart(cartid){
        const response = await fetch(`http://localhost:3001/api/cartdetails/all`,{
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                cartid: cartid
            }) 
        })
        const data = await response.json()
        return data
    }
    static async makeOrder(values){
        const response = await fetch('http://localhost:3001/api/orders',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                cartid : values.cartid,
                userid: values.userid,
                address: values.address,
                country: values.country,
                city: values.city,
                postalCode: values.postalCode
            })
        })
        const data = await response.json()
        return data
    }
    static async updateName(values){
        console.log(values);
        const cookie = document.cookie.split('=')
        const response = await fetch(`http://localhost:3001/api/users/updatename/${cookie[1]}`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstName: values.firstName,
                lastName: values.lastName
            })
        })
        const data = await response.json()
        return data
    }
}
