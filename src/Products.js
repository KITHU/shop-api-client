import React ,{useState, useEffect} from 'react'
import axios from 'axios'


function Products() {
    const [products, setproducts] = useState([])
    useEffect(()=>{
        axios.get('https://shop-api-v1.herokuapp.com/api/v1/products/product/')
        .then(res =>{
            console.log(res.data)
            setproducts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    return (
        <div>
           <ul className="list-group">
               {
                  products.map(product=> 
                  <li className="list-group-item" key={product.id}>
                      <p>{product.name} </p>
                      <p>{product.price} </p>
                  </li>)
               }  
               
            </ul>
        </div>
    )
}
export default Products;
