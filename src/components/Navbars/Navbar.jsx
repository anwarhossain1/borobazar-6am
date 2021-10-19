import React, { useEffect, useState } from "react";
import { Menu, Dropdown, Button, Modal, Input } from "antd";
import {
  MenuOutlined,
  DownOutlined,
  MailOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  ArrowDownOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import logo from "../../assets/images/logo.png";
import ukLogo from "../../assets/images/uk.png";
import saLogo from "../../assets/images/saudi-arabia.png";
import spainLogo from "../../assets/images/spain.png";
import israelLogo from "../../assets/images/israel.png";
import germanyLogo from "../../assets/images/germany.png";
import chainaLogo from "../../assets/images/china.png";
import Search from "../Search/Search";
import "./Navbar.css";
const { SubMenu, Item, Group } = Menu;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  //taking the scroll size
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (visible) {
      return (
        <Modal
          style={{ top: 70, height: 100 }}
          top
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          width={900}
        >
          <Input
            placeholder="What are you looking for..."
            style={{ height: "50px" }}
          />
        </Modal>
      );
    }
  }, []);

  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }
  // const menu = (
  //   <Menu>
  //     <Item key="0">
  //       <a>
  //         <img alt="uk" src={saLogo} className="lan-images" /> عربى - AR
  //       </a>
  //     </Item>
  //     <Item key="1">
  //       <a href="https://www.aliyun.com">
  //         {" "}
  //         <img alt="uk" src={ukLogo} className="lan-images" />
  //         English - EN
  //       </a>
  //     </Item>

  //     <Item key="2">
  //       <img alt="uk" src={chainaLogo} className="lan-images" />
  //       中国人 - ZH
  //     </Item>
  //     <Item key="2">
  //       <img alt="uk" src={germanyLogo} className="lan-images" /> Deutsch - DE
  //     </Item>
  //     <Item key="2">
  //       <img alt="uk" src={israelLogo} className="lan-images" />
  //       rעברית - HE
  //     </Item>
  //     <Item key="2">
  //       <img alt="uk" src={spainLogo} className="lan-images" />
  //       Español - ES
  //     </Item>
  //   </Menu>
  // );
  return (
    <Menu
      className={navbarClasses.join(" ")}
      mode="horizontal"
      style={{ padding: "5px", fontSize: "15px" }}
    >
      <Item>
        <img
          alt="logo"
          src={logo}
          className={scrolled ? "logoVisible" : "logoHide"}
        />
      </Item>

      <>
        <SubMenu title="Demos" style={{ marginTop: "14px" }}>
          <Item>
            <a>Modern</a>
          </Item>
          <Item>Classic</Item>
          <Item>Vintage</Item>
          <Item>Standard</Item>
          <Item>Minimal</Item>
          <Item>Trendy</Item>
          <Item>Elegant</Item>
        </SubMenu>
        <SubMenu key="smenu" title="Categories" style={{ marginTop: "14px" }}>
          <Item className="ant-dropdown-link">Fresh Vegetables</Item>
          <Item>Diet Nutrition</Item>
          <Item> Healthy Foods</Item>
          <Item> Grocery Items</Item>
          <Item> Beaf Steak</Item>
        </SubMenu>
        <SubMenu key="ssmenu" title="Dietary" style={{ marginTop: "14px" }}>
          <Item className="ant-dropdown-link"> Vegetarian</Item>
          <Item> Kakogenic</Item>
          <Item> Mediterranean</Item>
          <Item>Organic</Item>
        </SubMenu>
        <Item style={{ marginTop: "14px" }}>Search</Item>
        <SubMenu
          title="Pages"
          style={{ marginRight: "auto", marginTop: "14px" }}
        >
          <SubMenu title="Users">
            <Item>My Account</Item>
            <Item>Sign In</Item>
            <Item>Sign Up</Item>
          </SubMenu>
          <Item>FAQ About Us</Item>
          <Item>Privacy Policy</Item>
          <Item>Terms & Condition</Item>
          <Item>Contact Us</Item>
          <Item>Checkout</Item>
          <Item>404</Item>
        </SubMenu>
      </>

      {/* <Item style={{ marginTop: "14px" }}>
        <Dropdown overlay={menu} trigger={["click"]}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <img alt="uk" src={ukLogo} className="lan-images" />
            English - EN <DownOutlined />
          </a>
        </Dropdown>
      </Item> */}
      {scrolled ? (
        <>
          <Item style={{ marginTop: "14px" }}>
            <Button
              type="text"
              icon={<SearchOutlined style={{ fontSize: "20px" }} />}
              onClick={() => setVisible(true)}
            />
          </Item>
          <Item style={{ marginTop: "14px" }}>
            <Button
              icon={<ShoppingCartOutlined style={{ fontSize: "20px" }} />}
              type="text"
              size="large"
            >
              Cart
            </Button>
          </Item>
          <Item style={{ marginTop: "14px" }}>
            <Button
              icon={<UserOutlined style={{ fontSize: "20px" }} />}
              type="text"
              shape="round"
            >
              Sign In
            </Button>
          </Item>
        </>
      ) : (
        <>
          <Item style={{ marginTop: "14px" }}>
            <Button
              icon={<ShoppingCartOutlined style={{ fontSize: "20px" }} />}
              type="text"
              size="large"
            >
              Delivery: <span>Address</span> <ArrowDownOutlined />
            </Button>
          </Item>
        </>
      )}
    </Menu>
  );
};

export default Navbar;
