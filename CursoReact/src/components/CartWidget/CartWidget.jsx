import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./CartWidget.css"

const CartWidget = () => {
    return (
        <div className='CartWidget'>
            <AddShoppingCartIcon/>
            <p>4</p>
        </div>
    )
}

export default CartWidget