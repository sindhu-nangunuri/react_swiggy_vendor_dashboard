import React, {useState} from 'react'

const AddFirm = () => {
  
  const [firmName, setFirmName] = useState("")
  const [area, setArea] = useState("")
  const [Category, setCategory] = useState([])
  const [region, setRegion] = useState([])
  const [offer, setOffer] = useState("")
  const [file, setFile] = useState(null)


  return (
    <div className="firmSection">
        <form className="tableForm">
            <h2>Add Firm</h2>
            <label>Firm Name</label>
            <input type="text" name="firmName" />
            <label>Area</label>
            <input type="text" name="area" />
            <div className="checkInp">
              <label>Category</label>
              <div className="inputsContainer">
                <div className="checkboxContainer">
                  <label>Veg</label>
                  <input type="checkbox" checked="" value="veg" />
                </div>
                <div className="checkboxContainer">
                  <label>Non-Veg</label>
                  <input type="checkbox" checked="" value="non-veg" />
                </div>
              </div>
            </div>
            <div className="checkInpReg">
              <label>Region</label>
              <div className="inputsContainerreg">
                <div className="checkboxContainerreg">
                  <label>South-Indian</label>
                  <input type="checkbox" checked=""  value="south-indian" />
                </div>
                <div className="checkboxContainerreg">
                  <label>North-Indian</label>
                  <input type="checkbox" checked="" value="north-indian" />
                </div>
                <div className="checkboxContainerreg">
                  <label>Chinese</label>
                  <input type="checkbox" checked="" value="chinese" />
                </div>
                <div className="checkboxContainerreg">
                  <label>Bakery</label>
                  <input type="checkbox" checked=""  value="bakery" />
                </div>
              </div>
            </div>
            <label>Offer</label>
            <input type="text" name="offer" />
            <label>Firm Image</label>
            <input type="file" /> <br />
            <div className="btnSubmit">
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AddFirm
