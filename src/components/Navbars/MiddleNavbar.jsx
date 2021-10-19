import React, { useEffect, useState } from "react";
import { Menu, Dropdown, Button } from "antd";
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
import "./middleNavbar.css";
const { SubMenu, Item, Group } = Menu;

const MiddleNavbar = () => {
  //   const [scrolled, setScrolled] = useState(false);

  //   //taking the scroll size
  //   const handleScroll = () => {
  //     const offset = window.scrollY;
  //     if (offset > 30) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);
  //   }, []);
  //   let navbarClasses = ["navbar"];
  //   if (scrolled) {
  //     navbarClasses.push("scrolled");
  //   }
  const menu = (
    <Menu>
      <Item key="0">
        <a>
          <img alt="uk" src={saLogo} className="lan-images" /> عربى - AR
        </a>
      </Item>
      <Item key="1">
        <a href="https://www.aliyun.com">
          {" "}
          <img alt="uk" src={ukLogo} className="lan-images" />
          English - EN
        </a>
      </Item>

      <Item key="2">
        <img alt="uk" src={chainaLogo} className="lan-images" />
        中国人 - ZH
      </Item>
      <Item key="2">
        <img alt="uk" src={germanyLogo} className="lan-images" /> Deutsch - DE
      </Item>
      <Item key="2">
        <img alt="uk" src={israelLogo} className="lan-images" />
        rעברית - HE
      </Item>
      <Item key="2">
        <img alt="uk" src={spainLogo} className="lan-images" />
        Español - ES
      </Item>
    </Menu>
  );
  return (
    <>
      <Menu mode="horizontal" className="navBar__menu">
        <Item>
          <img
            alt="logo"
            src={logo}
            style={{ marginTop: "15px" }}
            //   className={scrolled ? "logoVisible" : "logoHide"}
          />
        </Item>
        <>
          <Item style={{ marginRight: "auto" }}>
            <Search />
          </Item>

          <Item style={{ marginTop: "10px" }}>
            <Dropdown overlay={menu} trigger={["click"]}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <img alt="uk" src={ukLogo} className="lan-images" />
                English - EN <DownOutlined />
              </a>
            </Dropdown>
          </Item>
          <Item style={{ marginTop: "10px" }}>
            <Button
              icon={<ShoppingCartOutlined style={{ fontSize: "20px" }} />}
              type="text"
              size="large"
            >
              Cart
            </Button>
          </Item>
          <Item style={{ marginTop: "10px" }}>
            <Button
              icon={<UserOutlined style={{ fontSize: "20px" }} />}
              type="text"
              shape="round"
            >
              Sign In
            </Button>
          </Item>
        </>
        {/* {scrolled ? (
        <>
          <Item style={{ marginTop: "14px" }}>
            <Button
              type="text"
              icon={<SearchOutlined style={{ fontSize: "20px" }} />}
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
        <Item style={{ marginTop: "14px" }}>
          <Button
            icon={<ShoppingCartOutlined style={{ fontSize: "20px" }} />}
            type="text"
            size="large"
          >
            Delivery: <span>Address</span> <ArrowDownOutlined />
          </Button>
        </Item>
      )} */}
      </Menu>
    </>
  );
};

export default MiddleNavbar;
