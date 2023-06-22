import axios from 'axios'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import CardUser from '../CardUser/CardUser'


const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    let {id} = useParams()
    console.log(item)

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${id}`).then(json => setItem(json.data))
    }, [id])


  return (
    <div>
        {item.id ? <CardUser item={item}/> : null}
    </div>
  )
}

export default ItemDetailContainer