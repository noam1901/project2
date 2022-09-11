import React, { useEffect, useState } from 'react'
import Api from '../../../DAL/api'
import './Wishlist.css'
import WishlistCard from './WishListCard/WishlistCard'

const Wishlist = () => {
  const [items,setItems] = useState([])
  const cookie = document.cookie.split('=')
  async function getData(){
    const response = await Api.getWishlistByUserId(cookie[1])
    setItems(response)
  }
  useEffect(()=>{
    getData()
  },[])
  async function clearAllWishlist(userid){
    await Api.clearWishlist(userid)
    getData()
  }
  return (
    <div className='wishlist-container'>
        <h1>Wishlist</h1>
        {items.length===0?<h1>No Items In wishlist</h1>:items.map(item=><WishlistCard key={item.productid}
        instock={item.UnitInStock}
        discount={item.discount}
        img={item.imgurl}
        name={item.productname}
        rating={item.rating}
        price={item.unitprice}
        prodid={item.productid}
        onRemove={getData}></WishlistCard>)}
        <button onClick={()=>clearAllWishlist(cookie[1])} className="form-button">Clear wishlist</button>
    </div>
  )
}

export default Wishlist