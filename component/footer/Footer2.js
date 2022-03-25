import React from "react";

const Footer2 = () => {
  return (
    <div
      className="container-flex"
      style={{ background: "white", height: "100%", marginBottom: "50px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-5 col-6">
            <div className="row">
              <p className="col-8">Payment Method</p>
              <div className="col-12 d-flex justify-content-between align-items-center">
                <img
                  style={{
                    height: "55px",
                    width: "55px",
                    marginTop: "31px",
                  }}
                  src="/images/payMent/cod.jpg"
                />
                <img
                  style={{ height: "30px", width: "81px", marginTop: "31px" }}
                  src="/images/payMent/visa.png"
                />
                <img
                  style={{ height: "51px", width: "88px", marginTop: "31px" }}
                  src="/images/payMent/mastercard.jpg"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-6">
            <p style={{ float: "left" }}>Daraz International</p>
          </div>
          <div className="col-lg-3 col-md-5 col-6">
            <p style={{ float: "left" }}>Follow Us</p>
          </div>
          <div className="col-lg-3 col-md-5 col-6">
            <p style={{ float: "left" }}>Verified by</p>
          </div>
        </div>
        <p style={{ float: "left", marginTop: "10px" }}>
          © Daraz {new Date().getFullYear}
        </p>
      </div>
    </div>
  );
};
export default Footer2;
