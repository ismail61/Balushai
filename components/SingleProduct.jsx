import React from "react";
import { Button } from 'reactstrap';


function SingleProduct() {
  return (
    <div className='container-flex'>
      <div className='container' style={{ "marginLeft": "18px", "marginTop": "16px", "width": "800px", "background": "#F7F8FA" }}>
        <p style={{ "marginBottom": "10px" }}>Basic Information</p>
        <form>
          <div className="form-group row" style={{ "marginBottom": "15px" }}>
            <label className="col-sm-2 col-form-label">Product Name</label>
            <div className="col-sm-10" style={{ "marginLeft": "20px", "marginTop": "-22px", "display": "inline-block" }}>
              <input type="text" placeholder="Product Name" className="form-control" style={{}} />
            </div>
            <p style={{ "display": "inline-block", "marginLeft": "10px" }}>Add MultiLanguage</p>
          </div>
          <div className="form-group row" style={{ "marginBottom": "15px" }}>
            <label className="col-sm-2 col-form-label">Category</label>
            <div className="col-sm-10" style={{ "marginLeft": "55px", "marginTop": "-22px", "display": "inline-block" }} >
              <input type="password" placeholder="Product Name" className="form-control" style={{}} />
            </div>
            <p style={{ "display": "inline-block", "marginLeft": "10px" }}>Recently Used</p>
          </div>
          <div className="form-group row" style={{ "marginBottom": "15px" }}>
            <label className="col-sm-2 col-form-label">Video URL</label>
            <div className="col-sm-10" style={{ "marginLeft": "43px", "marginTop": "-22px", "display": "inline-block" }} >
              <input type="password" placeholder="Video Link Here" className="form-control" style={{}} />
            </div>
          </div>
          <p>Product Attributes</p>
          <p>Boost your items searchability by filling-up the Key Product Information marked with KEY. The more you fill-up, the easier for buyers to find your product.</p>
          <Button style={{ "border": "1px solid", "marginRight": "15px", "float": "right" }}>Clear All</Button>
        </form>




        <form style={{ "marginTop": "45px", "border": "1px solid" }}>
          <div className="form-group row" style={{ "marginBottom": "15px", "marginTop": "17px", "marginLeft": "94px" }}>
            <label className="col-sm-2 col-form-label">Brand</label>
            <div className="col-sm-10" style={{ "marginLeft": "20px", "marginTop": "-22px", "display": "inline-block" }}>
              <input type="text" placeholder="Please Select" className="form-control" style={{}} />
            </div>
            <p style={{ "display": "inline-block", "marginLeft": "10px" }}>No brand</p>
          </div>
          <div className="form-group row" style={{ "marginBottom": "15px", "marginTop": "21px", "marginLeft": "92px", "display": "inline-block" }}>
            <label className="col-sm-2 col-form-label">Model</label>
            <div className="col-sm-10" style={{ "marginLeft": "20px", "marginTop": "-22px", "display": "inline-block" }}>
              <input type="text" placeholder="Input Here" className="form-control" style={{}} />
            </div>
          </div>
          <div className="form-group row" style={{ "marginBottom": "15px", "display": "contents" }}>
            <label className="col-sm-2 col-form-label" style={{ "marginTop": "40px", "marginLeft": "149" }}>Camera Brand</label>
            <div className="col-sm-10" style={{ "marginLeft": "20px", "marginTop": "25px", "display": "inline-block" }}>
              <Button style={{ "border": "1px solid" }}>Setting</Button>
            </div>
          </div>
          <div className="form-group row" style={{ "marginBottom": "15px", "marginTop": "17px", "marginLeft": "52px", "display": "inline-block" }}>
            <label className="col-sm-2 col-form-label">Less Mount</label>
            <div className="col-sm-10" style={{ "marginLeft": "20px", "marginTop": "-22px", "display": "inline-block" }}>
              <input type="text" placeholder="Input Here" className="form-control" style={{}} />
            </div>
          </div>
          <div className="form-group row" style={{ "marginBottom": "15px", "marginTop": "17px", "marginLeft": "52px", "display": "inline-block" }}>
            <label className="col-sm-2 col-form-label">Maximum Aperture</label>
            <div className="col-sm-10" style={{ "marginLeft": "20px", "marginTop": "-22px", "display": "inline-block" }}>
              <input type="text" placeholder="Input Here" className="form-control" style={{}} />
            </div>
          </div>
          <div className="form-group row" style={{ "marginBottom": "15px", "marginTop": "17px", "marginLeft": "5px", "display": "inline-block" }}>
            <label className="col-sm-2 col-form-label">Minimum Aperture</label>
            <div className="col-sm-10" style={{ "marginLeft": "20px", "marginTop": "-22px", "display": "inline-block" }}>
              <input type="text" placeholder="Input Here" className="form-control" style={{}} />
            </div>
          </div>
          <div className="form-group row" style={{ "marginBottom": "15px", "marginTop": "17px", "marginLeft": "83px", "display": "inline-block" }}>
            <label className="col-sm-2 col-form-label">Leg Lock Type</label>
            <div className="col-sm-10" style={{ "marginLeft": "20px", "marginTop": "-22px", "display": "inline-block" }}>
              <input type="text" placeholder="Input Here" className="form-control" style={{}} />
            </div>
          </div>
          <div className="form-group row" style={{ "marginBottom": "15px", "marginTop": "17px", "marginLeft": "52px", "display": "inline-block" }}>
            <label className="col-sm-2 col-form-label">ISO Range</label>
            <div className="col-sm-10" style={{ "marginLeft": "20px", "marginTop": "-22px", "display": "inline-block" }}>
              <input type="text" placeholder="Input Here" className="form-control" style={{}} />
            </div>
          </div>
          <div className="form-group row" style={{ "marginBottom": "15px", "marginTop": "17px", "marginLeft": "93px", "display": "inline-block" }}>
            <label className="col-sm-2 col-form-label">Effective Pixe</label>
            <div className="col-sm-10" style={{ "marginLeft": "20px", "marginTop": "-22px", "display": "inline-block" }}>
              <input type="text" placeholder="Input Here" className="form-control" style={{}} />
            </div>
          </div>
          <div className="form-group row" style={{ "marginBottom": "15px", "marginTop": "17px", "marginLeft": "25px", "display": "inline-block" }}>
            <label className="col-sm-2 col-form-label">App Controlled</label>
            <div className="col-sm-10" style={{ "marginLeft": "20px", "marginTop": "-22px", "display": "inline-block" }}>
              <input type="text" placeholder="Input Here" className="form-control" style={{}} />
            </div>
          </div>
          <div className="form-group row" style={{ "marginBottom": "15px", "marginTop": "17px", "marginLeft": "140px", "display": "inline-block" }}>
            <label className="col-sm-2 col-form-label">Sensor</label>
            <div className="col-sm-10" style={{ "marginLeft": "20px", "marginTop": "-22px", "display": "inline-block" }}>
              <input type="text" placeholder="Input Here" className="form-control" style={{}} />
            </div>
          </div>
          <div className="form-group row" style={{ "marginBottom": "15px", "marginTop": "17px", "marginLeft": "10px", "display": "inline-block" }}>
            <label className="col-sm-2 col-form-label">Compatible With</label>
            <div className="col-sm-10" style={{ "marginLeft": "20px", "marginTop": "-22px", "display": "inline-block" }}>
              <input type="text" placeholder="Input Here" className="form-control" style={{}} />
            </div>
          </div>
          <div className="form-group row" style={{ "marginBottom": "15px", "marginTop": "17px", "marginLeft": "95px", "display": "inline-block" }}>
            <label className="col-sm-2 col-form-label">Watchs Water</label>
            <div className="col-sm-10" style={{ "marginLeft": "20px", "marginTop": "-22px", "display": "inline-block" }}>
              <input type="text" placeholder="Input Here" className="form-control" style={{}} />
            </div>
          </div>
          <div className="form-group row" style={{ "marginBottom": "15px", "marginTop": "17px", "marginLeft": "57px", "display": "inline-block" }}>
            <label className="col-sm-2 col-form-label">Flim Type</label>
            <div className="col-sm-10" style={{ "marginLeft": "20px", "marginTop": "-22px", "display": "inline-block" }}>
              <input type="text" placeholder="Input Here" className="form-control" style={{}} />
            </div>
          </div>
          <div className="form-group row" style={{ "marginBottom": "15px", "marginTop": "17px", "marginLeft": "121px", "display": "inline-block" }}>
            <label className="col-sm-2 col-form-label">Lens Type</label>
            <div className="col-sm-10" style={{ "marginLeft": "20px", "marginTop": "-22px", "display": "inline-block" }}>
              <input type="text" placeholder="Input Here" className="form-control" style={{}} />
            </div>
          </div>
          <Button style={{ "display": "block", "marginLeft": "400px", "marginTop": "20px", "border": "1px solid" }}>Less</Button>
        </form>
        <p>Detailed Description</p>



        <p>Price & Stock</p>
        <p>Tip: Add variants when the product have different versions, such as color and size.</p>
        <form style={{ "marginBottom": "20px" }}>
          <div className="form-group row" style={{ "marginBottom": "15px" }}>
            <label className="col-sm-2 col-form-label">Color Family</label>
            <div className="col-sm-10" style={{ "marginLeft": "98px", "marginTop": "-22px" }} >
              <input type="password" placeholder="Please Input" className="form-control" style={{}} />
            </div>
          </div>
          <p>Variation Information</p>
          <Button style={{ "border": "1px solid" }}>+ Add New SKU</Button>
        </form>
        <p>Service & Delivery</p>
        <p>Service</p>
        <form>
          <div className="form-group row" style={{ "marginBottom": "15px" }}>
            <label className="col-sm-2 col-form-label">Warranty Type</label>
            <div className="col-sm-10" style={{ "marginLeft": "43px", "marginTop": "-22px", "display": "inline-block" }} >
              <input type="password" placeholder="Video Link Here" className="form-control" style={{}} />
            </div>
          </div>
        </form>
        <Button style={{ "border": "1px solid", "marginLeft": "360px" }}>More</Button>
        <p>Delivery</p>
        <form>
          <div className="form-group row" style={{ "marginBottom": "15px" }}>
            <label className="col-sm-2 col-form-label">Package Weight (kg)</label>
            <div className="col-sm-10" style={{ "marginLeft": "43px", "marginTop": "-22px", "display": "inline-block" }} >
              <input type="password" className="form-control" style={{}} />
            </div>
          </div>
          <div className="form-group row" style={{ "marginBottom": "15px" }}>
            <label className="col-sm-2 col-form-label">Package Dimensions (cm)</label>
            <div className="col-sm-10" style={{ "marginLeft": "43px", "marginTop": "-22px", "display": "inline-block" }} >
              <input type="password" placeholder="Length(cm)" className="form-control" style={{ "width": "160px" }} />
              <input type="password" placeholder="Length(cm)" className="form-control" style={{ "width": "160px" }} />
              <input type="password" placeholder="Length(cm)" className="form-control" style={{ "width": "160px" }} />
            </div>
          </div>
        </form>
        <Button style={{ "border": "1px solid", "marginLeft": "360px", "marginBottom": "100px" }}>More</Button>
      </div>
    </div>
  );
}

export default SingleProduct;
