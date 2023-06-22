
import "./ItemListContainer.css"
import UserList from '../UserList/UserList'


import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import CardUser from '../../components/CardUser/CardUser'


const ItemListContainer = () => {
  return (
    <div>
        <h1>Home Page</h1>
        <UserList/>
    </div>
  )
}

export default ItemListContainer