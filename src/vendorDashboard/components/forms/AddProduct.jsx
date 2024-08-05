import React from 'react'

const AddProduct = () => {
  return (
    <div className="firmSection">
        <form className="tableForm">
            <h2>Add Product</h2>
            <label>Product Name</label>
            <input type="text" />
            <label>Price</label>
            <input type="text" />
            {/* <label>Category</label>
            <input type="text" /> */}
            <div className="checkInp">
              <label>Category</label>
              <div className="inputsContainer">
                <div className="checkboxContainer">
                  <label>Veg</label>
                  <input type="checkbox" value="veg" />
                </div>
                <div className="checkboxContainer">
                  <label>Non-Veg</label>
                  <input type="checkbox" value="non-veg" />
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
                  <input type="checkbox" value="yes" />
                </div>
                <div className="checkboxContainer">
                  <label>No</label>
                  <input type="checkbox" value="no" />
                </div>
              </div>
            </div>
            <label>Description</label>
            <input type="text" />
            <label>Firm Image</label>
            <input type="file" /> <br />
            <div className="btnSubmit">
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AddProduct
