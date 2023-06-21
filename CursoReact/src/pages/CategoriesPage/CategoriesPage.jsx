import React from 'react'
import {useParams} from "react-router-dom"




const CategoriesPage = () => {

let {category} = useParams()

  return (
    <div>CategoriesPage</div>
  )
}

export default CategoriesPage