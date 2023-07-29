import React, {useState} from 'react'
import Child from './Child'

function Parent() {
  const [cartItems, setcartItems] = useState([
      {Id:1, Name:'Apple', Price:100, Qty:1},
      {Id :2, Name:'Orange', Price:200, Qty:1},
      {Id :3, Name:'Banana', Price:300, Qty:1},    ]    
    );

  function  handleAddItemToCart(item){
    setcartItems([...cartItems, item]);
  };


  function  handleDeleteCartItem (id){
    setcartItems(cartItems.filter((item) => item.Id !== id));
  }
  
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <div className='input'> <span>Item Name:  </span> <input type="text" id="txtItemName" /> <span>Item Price: </span> <input type="text" id="txtItemPrice" /> </div><button onClick={() => handleAddItemToCart({Id:cartItems.length+1, Name:document.getElementById("txtItemName").value, Price:document.getElementById("txtItemPrice").value, Qty:1})}>Add Item</button>
       <br />     
      <Child  cartItems={cartItems}    onDeleteClicked={handleDeleteCartItem} />      
    </div>
  );
}

export default Parent;

//{cartItems,onDeleteClicked