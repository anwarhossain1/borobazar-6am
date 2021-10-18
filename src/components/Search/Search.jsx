import React, { useState } from "react";
import { Modal, Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./search.css";

const Search = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Input
        className="search__input"
        suffix={<SearchOutlined style={{ fontSize: "20px" }} />}
        placeholder="What are you looking..."
        onClick={() => setVisible(true)}
      />

      <Modal
        style={{ top: 75, height: 100 }}
        title="What"
        top
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={900}
      ></Modal>
    </>
  );
};

export default Search;
