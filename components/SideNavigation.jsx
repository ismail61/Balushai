import Link from "next/link";
import { Router, useRouter } from "next/router";
import React from "react";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SidebarHeader,
  SubMenu,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

function SideNavigation() {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div>
      <ProSidebar
        style={{ width: "180px !important", display: "flex" }}
        collapsed={false}
      >
        <SidebarHeader className="sidebarHeader">
          <div className="flex justify-center flex-col items-center mb-8">
            <div
              className="sidebar-profile-pic"
              style={{ backgroundImage: `url('/balushai.jpg')` }}
            ></div>
            <p>Balushai.com</p>
          </div>
        </SidebarHeader>
        <SidebarContent className="sidebarContent">
          <Menu iconShape="square" className="menu">
            {/* Products */}
            <SubMenu
              title={
                <div
                  className={`${
                    router.pathname === "/products/manage-products" ||
                    router.pathname === "/products/add-product"
                      ? "active-menu"
                      : ""
                  }`}
                >
                  <i className="far fa-users"></i>Products
                </div>
              }
            >
              <MenuItem
                className={`${
                  router.pathname === "/products/manage-products"
                    ? "active-inner-menu"
                    : ""
                }`}
              >
                <Link href="/products/manage-products">
                  <>
                    <i className="far fa-angle-double-right"></i>Manage products
                  </>
                </Link>
              </MenuItem>

              <MenuItem
                className={`${
                  router.pathname === "/products/add-product" ? "active-inner-menu" : ""
                }`}
              >
                <Link href="/products/add-product">
                  <>
                    <i className="far fa-angle-double-right"></i>Add products
                  </>
                </Link>
              </MenuItem>
            </SubMenu>

            {/* Order */}
            <SubMenu
              title={
                <div
                  className={`${
                    router.pathname === "/manage-orders" ||
                    router.pathname === "/manage-reviews"
                      ? "active-menu"
                      : ""
                  }`}
                >
                  <i className="far fa-users"></i>Orders & Reviews
                </div>
              }
            >
              <MenuItem
                className={`${
                  router.pathname === "/orders"
                    ? "active-inner-menu"
                    : ""
                }`}
              >
                <Link href="/orders/manage-orders">
                  <>
                    <i className="far fa-angle-double-right"></i>Manage products
                  </>
                </Link>
              </MenuItem>

              <MenuItem
                className={`${
                  router.pathname === "/orders/manage-orders" ? "active-inner-menu" : ""
                }`}
              >
                <Link href="/orders/manage-orders">
                  <>
                    <i className="far fa-angle-double-right"></i>Manage Reviews
                  </>
                </Link>
              </MenuItem>
            </SubMenu>
            {/* Products */}
            <SubMenu
              title={
                <div
                  className={`${
                    router.pathname === "/products" ||
                    router.pathname === "/input-customer"
                      ? "active-menu"
                      : ""
                  }`}
                >
                  <i className="far fa-users"></i>Promotions
                </div>
              }
            >
              <MenuItem
                className={`${
                  router.pathname === "/customer-list"
                    ? "active-inner-menu"
                    : ""
                }`}
              >
                <Link href="/customer-list">
                  <>
                    <i className="far fa-angle-double-right"></i>Manage products
                  </>
                </Link>
              </MenuItem>

              <MenuItem
                className={`${
                  router.pathname === "/lens-list" ? "active-inner-menu" : ""
                }`}
              >
                <Link href="/lens-list">
                  <>
                    <i className="far fa-angle-double-right"></i>Promotions
                  </>
                </Link>
              </MenuItem>
            </SubMenu>
            {/* Products */}
            <SubMenu
              title={
                <div
                  className={`${
                    router.pathname === "/products" ||
                    router.pathname === "/input-customer"
                      ? "active-menu"
                      : ""
                  }`}
                >
                  <i className="far fa-users"></i>Store Decoration
                </div>
              }
            >
              <MenuItem
                className={`${
                  router.pathname === "/customer-list"
                    ? "active-inner-menu"
                    : ""
                }`}
              >
                <Link href="/customer-list">
                  <>
                    <i className="far fa-angle-double-right"></i>Manage products
                  </>
                </Link>
              </MenuItem>

              <MenuItem
                className={`${
                  router.pathname === "/lens-list" ? "active-inner-menu" : ""
                }`}
              >
                <Link href="/lens-list">
                  <>
                    <i className="far fa-angle-double-right"></i>Growth Center
                  </>
                </Link>
              </MenuItem>
            </SubMenu>

            {/* Products */}
            <SubMenu
              title={
                <div
                  className={`${
                    router.pathname === "/products" ||
                    router.pathname === "/input-customer"
                      ? "active-menu"
                      : ""
                  }`}
                >
                  <i className="far fa-users"></i>Business Advisor
                </div>
              }
            >
              <MenuItem
                className={`${
                  router.pathname === "/customer-list"
                    ? "active-inner-menu"
                    : ""
                }`}
              >
                <Link href="/customer-list">
                  <>
                    <i className="far fa-angle-double-right"></i>Manage products
                  </>
                </Link>
              </MenuItem>

              <MenuItem
                className={`${
                  router.pathname === "/lens-list" ? "active-inner-menu" : ""
                }`}
              >
                <Link href="/lens-list">
                  <>
                    <i className="far fa-angle-double-right"></i>Add products
                  </>
                </Link>
              </MenuItem>
            </SubMenu>
            {/* Products */}
            <SubMenu
              title={
                <div
                  className={`${
                    router.pathname === "/products" ||
                    router.pathname === "/input-customer"
                      ? "active-menu"
                      : ""
                  }`}
                >
                  <i className="far fa-users"></i>Finance
                </div>
              }
            >
              <MenuItem
                className={`${
                  router.pathname === "/customer-list"
                    ? "active-inner-menu"
                    : ""
                }`}
              >
                <Link href="/customer-list">
                  <>
                    <i className="far fa-angle-double-right"></i>Manage products
                  </>
                </Link>
              </MenuItem>

              <MenuItem
                className={`${
                  router.pathname === "/lens-list" ? "active-inner-menu" : ""
                }`}
              >
                <Link href="/lens-list">
                  <>
                    <i className="far fa-angle-double-right"></i>Add products
                  </>
                </Link>
              </MenuItem>
            </SubMenu>

            {/* Products */}
            <SubMenu
              title={
                <div
                  className={`${
                    router.pathname === "/products" ||
                    router.pathname === "/input-customer"
                      ? "active-menu"
                      : ""
                  }`}
                >
                  <i className="far fa-users"></i>Seller Support
                </div>
              }
            >
              <MenuItem
                className={`${
                  router.pathname === "/customer-list"
                    ? "active-inner-menu"
                    : ""
                }`}
              >
                <Link href="/customer-list">
                  <>
                    <i className="far fa-angle-double-right"></i>Manage products
                  </>
                </Link>
              </MenuItem>

              <MenuItem
                className={`${
                  router.pathname === "/lens-list" ? "active-inner-menu" : ""
                }`}
              >
                <Link href="/lens-list">
                  <>
                    <i className="far fa-angle-double-right"></i>Add products
                  </>
                </Link>
              </MenuItem>
            </SubMenu>
            {/* Products */}
            <SubMenu
              title={
                <div
                  className={`${
                    router.pathname === "/products" ||
                    router.pathname === "/input-customer"
                      ? "active-menu"
                      : ""
                  }`}
                >
                  <i className="far fa-users"></i>Account & Settings
                </div>
              }
            >
              <MenuItem
                className={`${
                  router.pathname === "/customer-list"
                    ? "active-inner-menu"
                    : ""
                }`}
              >
                <Link href="/customer-list">
                  <>
                    <i className="far fa-angle-double-right"></i>Manage products
                  </>
                </Link>
              </MenuItem>

              <MenuItem
                className={`${
                  router.pathname === "/lens-list" ? "active-inner-menu" : ""
                }`}
              >
                <Link href="/lens-list">
                  <>
                    <i className="far fa-angle-double-right"></i>Add products
                  </>
                </Link>
              </MenuItem>
            </SubMenu>

            {/* Products */}
            <SubMenu
              title={
                <div
                  className={`${
                    router.pathname === "/products" ||
                    router.pathname === "/input-customer"
                      ? "active-menu"
                      : ""
                  }`}
                >
                  <i className="far fa-users"></i>Seller Documents
                </div>
              }
            >
              <MenuItem
                className={`${
                  router.pathname === "/customer-list"
                    ? "active-inner-menu"
                    : ""
                }`}
              >
                <Link href="/customer-list">
                  <>
                    <i className="far fa-angle-double-right"></i>Manage products
                  </>
                </Link>
              </MenuItem>

              <MenuItem
                className={`${
                  router.pathname === "/lens-list" ? "active-inner-menu" : ""
                }`}
              >
                <Link href="/lens-list">
                  <>
                    <i className="far fa-angle-double-right"></i>Add products
                  </>
                </Link>
              </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter className="sidebarFooter">
          {/**
           *  You can add a footer for the sidebar ex: copyright
           */}
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
}

export default SideNavigation;
