import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import CardUser from '../../components/CardUser/CardUser'






const CategoriesPage = () => {

let {categoryId} = useParams()

useEffect(() => {
  axios(`https://fakestoreapi.com/products/${id}`).then(json => setItem(json.data))
}, [])



return (
  <div className="userList">
      {items && items.map((item) => {
          return (
          <div key={item.id}>

                  <CardUser item={item}/>

          </div>
          );
      })}
  </div>
)
}

export default CategoriesPage