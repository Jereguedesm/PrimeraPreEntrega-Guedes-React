import "./UserList.css"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import CardUser from "../CardUser/CardUser"





const UserList = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios("https://fakestoreapi.com/products").then(json => setItems(json.data))
        .catch(error => console.error("Error al obtener los datos:", error));
    }, [])


  return (
    <div className="userList">
        {items && items.map((item) => {
            return (
            <div key={item.id}>
                <CardUser/>
            </div>
            );
        })}
    </div>
  )
}

export default UserList