import React from 'react'

export default function Child({cartItems,onDeleteClicked}) {
  return (
    <div className='child'>      
      <ul>
      {cartItems.map((item) => (
        <li  key={item.Id}>
          <span>{item.Name}</span> &nbsp;- &nbsp;$<span>{item.Price}</span>&nbsp; &nbsp;
          <button onClick={() => onDeleteClicked(item.Id)}>Delete</button>
        </li>
      ))}     
     </ul>
    </div>
  )
}
