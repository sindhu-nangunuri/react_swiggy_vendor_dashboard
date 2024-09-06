import React, {useState} from 'react'
import { API_URL } from '../../data/ApiPath'

const AddProduct = () => {

  const [productName, setProductName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState([])
  const [bestSeller, setBestSeller] = useState(false)
  const [image, setImage] = useState(null)
  const [description, setDescription] = useState("")

  const handleCategoryChange = (e) => {
    const value = e.target.value 
    if(category.includes(value)){
      setCategory(category.filter((item) => item !== value))

    }
    else{
      setCategory([...category, value])
    }
  }

  const handleBestSeller = (e) => {
    const value = e.target.value === 'true'
    setBestSeller(value)
  }

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0]
    setImage(selectedImage)
  }



  const handleAddProduct = async(e) => {
    e.preventDefault()
    try {
      const loginToken = localStorage.getItem('loginToken')
      const firmId = localStorage.getItem('firmId')
      if(!loginToken || !firmId){
        console.log("user nor athuenticated")
      }

      const formData = new FormData()
      formData.append('productName', productName)
      formData.append('price', price)
      formData.append('description', description)
      formData.append('image', image)

      category.forEach((value) => {
        formData.append('category', value)
      })

      const response = await fetch(`${API_URL}/product/add-product/${firmId}`, {
        method: 'POST',
        body: formData
      })
      console.log(response)
      const data = await response.json()
      if(response.ok){
        alert("Product added successfully")
      }
      setProductName("")
      setPrice("")
      setCategory([])
      setBestSeller(false)
      setImage(null)
      setDescription("")

    } catch (error) {
      console.log(data.message)
      alert("Failed to add product")
    }
  }



  return (
    <div className="firmSection">
        <form className="tableForm" onSubmit={handleAddProduct}>
            <h2>Add Product</h2>
            <label>Product Name</label>
            <input type="text" value={productName} onChange={(e)=> setProductName(e.target.value)}/>
            <label>Price</label>
            <input type="text" value={price} onChange={(e)=> setPrice(e.target.value)}/>
            {/* <label>Category</label>
            <input type="text" /> */}
            <div className="checkInp">
              <label>Category</label>
              <div className="inputsContainer">
                <div className="checkboxContainer">
                  <label>Veg</label>
                  <input type="checkbox" value="veg" checked={category.includes('veg')} onChange={handleCategoryChange} />
                </div>
                <div className="checkboxContainer">
                  <label>Non-Veg</label>
                  <input type="checkbox" value="non-veg" checked={category.includes('non-veg')} onChange={handleCategoryChange} />
                </div>
              </div>
            </div>
            {/* <label>Best Seller</label>
            <input type="text" /> */}
            <div className="checkInp">
              <label>Best Seller</label>
              <div className="inputsContainer">
                <div className="checkboxContainer">
                  <label>Yes</label>
                  <input type="radio" value="true" checked={bestSeller === true} onChange={handleBestSeller} />
                </div>
                <div className="checkboxContainer">
                  <label>No</label>
                  <input type="radio" value="false" checked={bestSeller === false} onChange={handleBestSeller} />
                </div>
              </div>
            </div>
            <label>Description</label>
            <input type="text" value={description} onChange={(e)=> setDescription(e.target.value)} />
            <label>Firm Image</label>
            <input type="file" onChange={handleImageUpload} /> <br />
            <div className="btnSubmit">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AddProduct
