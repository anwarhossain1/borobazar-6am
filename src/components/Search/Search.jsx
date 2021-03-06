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
    </>
  );
};

export default Search;
