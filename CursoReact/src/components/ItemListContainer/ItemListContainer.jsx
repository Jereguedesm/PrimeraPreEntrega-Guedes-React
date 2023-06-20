import React from 'react'
import "./ItemListContainer.css"

function ItemListContainer({greeting}) {
  return (
    <>
    <div>
        <p className='greeting'>
            {greeting}
        </p>
    </div>
    <div>
        <p>
            
        </p>
        
    </div>
    </>
  )
}

export default ItemListContainer