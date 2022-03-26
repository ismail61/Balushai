import React from "react";
import { SideNavigation, TopNavigation } from "../../components";
import { Icon, IconButton } from "@mui/material";
import ReactToPrint from "react-to-print";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";


function manage_reviews() {
  const handleSearch = () => {};
  const addNew = () => {};

  return (
    <div className="flex w-screen min-h-screen">
      <SideNavigation />
      <div className="w-full">
        <TopNavigation />

        <div className="p-6">
          <div className="shadow-md p-2 flex justify-between items-center bg-white">
            <div>
              <div className="flex">
                <span
                  className="bg-gray-400 text-white px-4 py-2 rounded-l-sm"
                  id="basic-addon1"
                >
                  <i className="far fa-search text-success"></i>
                </span>
                <input
                  className="px-2 rounded-sm-r border-[1px]"
                  autoFocus={true}
                  onChange={handleSearch}
                  type="text"
                  placeholder="Search"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <Icon href=""></Icon>
              </div>
            </div>
            <span>Reviews Management</span>
            <div>
              <button className="border px-4 py-2 mr-2">
                <i className="far fa-arrow-alt-circle-down"></i> PDF
              </button>
              <button className="border px-4 py-2 mr-2">
                <i className="far fa-arrow-alt-circle-down"></i> EXCEL
              </button>

              <ReactToPrint
                trigger={() => (
                  <button className="border px-4 py-2 mr-2">
                    <i className="far fa-print"></i> Print
                  </button>
                )}
                content={() => document.getElementById("printID")}
              />

              <button onClick={addNew} className="border px-4 py-2 mr-2">
                <i className="far fa-plus"></i> ADD NEW
              </button>
            </div>
          </div>
          <table className="shadow-md overflow-hidden">
            <thead>
              <tr>
                <th>SL</th>
                <th>Order</th>
                <th>Content</th>
                <th>Product</th>
                <th>Rating</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((product, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>Nikon Camera</td>
                  <td>Nikon</td>
                  <td>Camera</td>
                  <td>14,500</td>
                  <td>5</td>
                  <td className="w-[150px]">
                    <div className="flex justify-end">
                      <IconButton color="primary" size="small">
                        <VisibilityOutlinedIcon />
                      </IconButton>
                      <IconButton color="warning" size="small">
                        <EditOutlinedIcon />
                      </IconButton>
                      <IconButton color="error" size="small">
                        <DeleteOutlineIcon />
                      </IconButton>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default manage_reviews