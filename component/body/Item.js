import React from "react";
import Link from "next/link";
import { FcNext } from "react-icons/fc";

const Item = () => {
  return (
    <div
      className="container-flex"
      style={{ background: "#F5F5F5", height: "60px" }}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-2 rounded"
            style={{
              marginRight: "2%",
              height: "35px",
              background: "white",
              textAlign: "left",
              marginTop: "10px",
              width: "18%",
            }}
          >
            <div
              style={{
                marginLeft: "170px",
                fontSize: "large",
                paddingTop: "4px",
              }}
            >
              <FcNext />
            </div>
            <Link href="/"><a style={{ textDecoration: "none", padding: "30px" }}>
              <img
                style={{
                  height: "30px",
                  width: "30px",
                  marginLeft: "-38px",
                  marginTop: "-55px",
                }}
                src="/images/i1.gif"
              />
              <p style={{ marginLeft: "30px", marginTop: "-49px" }}>Mall</p>
              </a>
            </Link>
          </div>
          <div
            className="col-2 rounded"
            style={{
              marginRight: "2%",
              height: "35px",
              background: "white",
              textAlign: "left",
              marginTop: "10px",
              width: "18%",
            }}
          >
            <div
              style={{
                marginLeft: "170px",
                fontSize: "large",
                paddingTop: "4px",
              }}
            >
              <FcNext />
            </div>
            <Link href="/"><a style={{ textDecoration: "none", padding: "30px" }}>
              <img
                style={{
                  height: "30px",
                  width: "30px",
                  marginLeft: "-38px",
                  marginTop: "-55px",
                }}
                src="/images/i2.gif"
              />
              <p style={{ marginLeft: "30px", marginTop: "-49px" }}>
                Free Shipping
              </p>
              </a>
            </Link>
          </div>
          <div
            className="col-2 rounded"
            style={{
              marginRight: "2%",
              height: "35px",
              background: "white",
              textAlign: "left",
              marginTop: "10px",
              width: "18%",
            }}
          >
            <div
              style={{
                marginLeft: "170px",
                fontSize: "large",
                paddingTop: "4px",
              }}
            >
              <FcNext />
            </div>
            <Link href="/"><a style={{ textDecoration: "none", padding: "30px" }}>
              <img
                style={{
                  height: "30px",
                  width: "30px",
                  marginLeft: "-38px",
                  marginTop: "-55px",
                }}
                src="/images/i1.gif"
              />
              <p style={{ marginLeft: "30px", marginTop: "-49px" }}>
                Super Market
              </p>
              </a>
            </Link>
          </div>
          <div
            className="col-2 rounded"
            style={{
              marginRight: "2%",
              height: "35px",
              background: "white",
              textAlign: "left",
              marginTop: "10px",
              width: "18%",
            }}
          >
            <div
              style={{
                marginLeft: "170px",
                fontSize: "large",
                paddingTop: "4px",
              }}
            >
              <FcNext />
            </div>
            <Link href="/"><a style={{ textDecoration: "none", padding: "30px" }}>
              <img
                style={{
                  height: "30px",
                  width: "30px",
                  marginLeft: "-38px",
                  marginTop: "-55px",
                }}
                src="/images/i4.gif"
              />
              <p style={{ marginLeft: "30px", marginTop: "-49px" }}>Fashion</p>
              </a>
            </Link>
          </div>
          <div
            className="col-2 rounded"
            style={{
              marginRight: "2%",
              height: "35px",
              background: "white",
              textAlign: "left",
              marginTop: "10px",
              width: "18%",
            }}
          >
            <div
              style={{
                marginLeft: "170px",
                fontSize: "large",
                paddingTop: "4px",
              }}
            >
              <FcNext />
            </div>
            <Link href="/"><a style={{ textDecoration: "none", padding: "30px" }}>
              <img
                style={{
                  height: "30px",
                  width: "30px",
                  marginLeft: "-38px",
                  marginTop: "-55px",
                }}
                src="/images/i5.gif"
              />
              <p style={{ marginLeft: "30px", marginTop: "-49px" }}>
                Beauty & Glamour
              </p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;
