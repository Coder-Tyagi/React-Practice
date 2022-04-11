import React, {useState} from 'react'
import './Home.css'
import add4 from '../Images/item4.png';
import add2 from '../Images/item2.jpg';
import add3 from '../Images/item3.jpg';
import cart from '../Images/cart.jpg';




function Home() {
  const[counter,setCounter]=useState(0)
function Counter(){
  setCounter(counter+1);
  console.warn("function called");
}
  return (
    <>
<img className='cart' src={cart}/>
<h3>Item added:{counter}</h3>
      <div>
        <span>
    <img src= {add4} />
    Rs.20000
          <button onClick={()=>Counter()}>Add To Cart</button>
        </span>

        <span>
        <img src= {add2} />
        Rs.18000
          <button onClick={()=>Counter()}>Add To Cart</button>
        </span>

        <span>
        <img src= {add3} />
        Rs.17999
          <button onClick={()=>Counter()}>Add To Cart</button>
          
        </span>
      </div>
    </>
  )
}
export default Home