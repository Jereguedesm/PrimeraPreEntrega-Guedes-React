import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import CardUser from '../../components/CardUser/CardUser'






const CategoriesPage = () => {
  const [items, setItems] = useState([])

let {categoryId} = useParams()

console.log("categoryId", categoryId);
  console.log("chars", chars);

let filteredItems = items.filter((item) => {
  return item.category = categoryId
})

console.log("filteredItems", filteredItems);

useEffect(() => {
  axios(`https://fakestoreapi.com/products/`).then(json => setItems(json.data))
}, [])

return (
  <div className="userList">
        {filteredItems && filteredItems.map((item) => {
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