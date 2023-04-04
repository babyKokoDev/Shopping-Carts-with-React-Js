import { logDOM } from '@testing-library/react';
import React, { useState } from 'react';
import { FaPlusSquare, FaMinusSquare, FaShoppingBasket} from 'react-icons/fa'
import Bag from '../assets/bag.png'
import Headset from '../assets/headset.png'
import Laptop from '../assets/laptop.png'
import Powerbank from '../assets/powerbank.png'
import Refrigerator from '../assets/Refrigerator.png'
import Shoe from '../assets/shoe.png'
import Speaker from '../assets/speaker.png'
import Television from '../assets/Television.png'
import Wristwatch from '../assets/Wristwatch.png'



const ShoppingCarts = () => {

    let [state, setState] = useState({
        products : [
          {
            serial : "AA001",
            image : Bag,
            name : "Bag",
            price : 3000,
            quantity : 1,
            total : ""
          },
          {
            serial : "AA002",
            image : Headset,
            name : "Headset",
            price : 5000,
            quantity : 1,
            total : ""
          },
          {
            serial : "AA003",
            image : Laptop,
            name : "Laptop",
            price : 200000,
            quantity : 1,
            total : ""
          },
          {
            serial : "AA004",
            image : Powerbank,
            name : "PowerBank",
            price : 15000,
            quantity : 1,
            total : ""
          },
          {
            serial : "AA005",
            image : Refrigerator,
            name : "Refrigerator",
            price : 90000,
            quantity : 1,
            total : ""
          },
          {
            serial : "AA006",
            image : Shoe,
            name : "Shoe",
            price : 4000,
            quantity : 1,
            total : ""
          },
          {
            serial : "AA007",
            image : Speaker,
            name : "Speaker",
            price : 35000,
            quantity : 1,
            total : ""
          },
          {
            serial : "AA008",
            image : Television,
            name : "Television",
            price : 50000,
            quantity : 1,
            total : ""
          },
          {
            serial : "AA009",
            image : Wristwatch,
            name : "Wristwatch",
            price : 5000,
            quantity : 1,
            total : ""
          }
        ]
      })
    
      let {products} = state

      const increase = (index) => {
        
        let items = products.map((item, ind)=> {
            if (ind === index){
                return {
                    ...item,
                    quantity: item.quantity + 1 > 0 ? item.quantity + 1 : 1
                }
            }
            return item
        })

        setState((state)=> ({
            products : [...items]
        }))
        
      }
      const decrease = (index) => {
        let items = products.map((item, ind)=> {
            if (ind === index){
                return {
                    ...item,
                    quantity: item.quantity - 1 > 0 ? item.quantity - 1 : 1
                }
            }
            return item
        })

        setState((state)=> ({
            products : [...items]
        }))
     }

     const grandTotal = () => {
         let totalprice = 0
         for (let i=0; i<products.length; i++){
             totalprice += products[i].price * products[i].quantity
         }
         return totalprice
     }
     

  return (
    <>
      <nav className='navbar bg-secondary opacity-7 p-3 mb-3'>
      <div className="navbrand">
        <FaShoppingBasket className='text-white' size={50} />
      </div>
      <div className='text-white fs-4'>Shopping Cart with React Js Event Handling</div>
    </nav>
     <div className='container text-warning fs-5'>Online shopping sites are now part of our everyday lives, because everyone enjoys the possibility of being able to buy whatever they need, whether it’s clothing or electronics, without having to move an inch. It’s even better when you can buy everything you’re looking for, all from the same store. This is what we offers and that’s what makes it one of the best online shopping websites in Nigeria.</div>

     <table className='table table-striped text-secondary text-center mt-4 container'>
       <thead className='table-dark text-white'>
         <tr>
           <th>S/N</th>
           <th>Image</th>
           <th>Name</th>
           <th>Price</th>
           <th>Qty</th>
           <th>Total</th>
         </tr>
       </thead>
       <tbody className='fw-bold table-secondary'>
         {
           products.map((product, index)=> (
            
            <tr key={index}>
              <td>{product.serial}</td>
              <td><img src={product.image} width={30} height={30} alt="" /></td>
              <td>{product.name}</td>
              <td>${(product.price).toLocaleString("en-US")}</td>
              <td><FaMinusSquare onClick={()=>decrease(index)} className='cursor' size={25} /><span className='border border-secondary border-3 bg-info rounded-2 px-3 py-1'>{product.quantity}</span><FaPlusSquare onClick={()=>increase(index)} size={25} className='cursor'/></td>
              <td>${(product.price * product.quantity).toLocaleString("en-US")}</td>
            </tr>
           )
           )
          }
          <tr className='text-success fw-bold'>
              <td colSpan={5}></td>
              <td>Grand Total : ${grandTotal().toLocaleString("en-US")} </td>
          </tr>
       </tbody>
     </table>
    </>
  )
}

export default ShoppingCarts