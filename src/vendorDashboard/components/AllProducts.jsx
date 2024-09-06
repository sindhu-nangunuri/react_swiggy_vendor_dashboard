import React, {useState, useEffect} from 'react'
import { API_URL } from '../data/ApiPath'

const AllProducts = () => {
    const [products, setProducts] = useState([])

    const productsHandler = async() => {
        const firmId = localStorage.getItem('firmId')
        try {
            const response = await fetch(`${API_URL}/product/${firmId}/products`)
            const newProductsData = await response.json()
            setProducts(newProductsData.products)
            console.log(newProductsData.products)
        } catch (error) {
            console.log("failed to fetch products", error)
            alert('failed to fetch products')
        }
    }

    useEffect(()=> {
        productsHandler()
        console.log("this is useEffect")
    },[])

    const deleteProductById = async(productId)=> {
        try {
            
            const alertResponse = confirm("are you sure?")
            console.log(alertResponse)
            if(alertResponse){
                alert("product deleted successfully")
                setProducts(products.filter(product => product._id !== productId))
            const response = await fetch(`${API_URL}/product/${productId}`, {
                method: 'DELETE'
            })
            //setProducts(products.filter(product => product._id !== productId))

            }
            
            
            
            
            // if(response.ok){
            //     console.log(products)
                
            //     return response.status(200)
                
            // }

        } catch (error) {
            console.log("Failed to delete product")
            
        }
    }
  return (
    <div>
      {!products ? (
        <p>No products found</p>
      ) : (
        <table className="product-table">
            <thead>
                <tr>
                    <th>Product Name</th> 
                    <th>Price</th>
                    <th>Image</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {products.map((item)=> {
                    return(
                
                            <tr key={item._id} >
                                <td>{item.productName}</td>
                                <td>{item.price}</td>
                                <td>
                                    {item.image && (
                                        <img src={`${API_URL}/uploads/${item.image}`}
                                         alt={item.productName}
                                         style={{width: '50px', height: '50px'}}
                                        />
                                    )}
                                </td>
                                <td>
                                    <button onClick={()=> deleteProductById(item._id)}>Delete</button>
                                </td>
                            </tr>
            
                    )
                })}

            </tbody>
        </table>
      )}
    </div>
  )
}

export default AllProducts
