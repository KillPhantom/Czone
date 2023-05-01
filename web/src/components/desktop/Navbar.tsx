import React, { useState, useRef, useEffect } from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button as AntButton, message, Space, Tooltip } from "antd";

/* Components */
import LogoWithText from "@assets/icons/Heart";
import Button, { BUTTON_TYPE } from "@common/Button";
import Dropdown from "@desktop/Dropdown";

/* Styles */
import {
  Wrapper,
  MainContent,
  LogoContainer,
  LogoBody,
  LogoTitle,
  ButtonGroup,
  MenuItem,
} from "@styles/desktop/Navbar";

const items: MenuProps["items"] = [
  {
    label: <MenuItem>公司效率诊断</MenuItem>,
    key: "1",
  },
  {
    label: <MenuItem>员工效率诊断</MenuItem>,
    key: "2",
  },
  {
    label: <MenuItem>智能人才招聘</MenuItem>,
    key: "3",
  },
];

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    message.info("Click on left button.");
    console.log("click left button", e);
  };

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
    }
  }, []);

  return (
    <>
      <Wrapper
        ref={ref}
        initialHeight={height}
        showDropdown={isDropdownVisible}
        onMouseLeave={() => setIsDropdownVisible(false)}
      >
        <MainContent>
          <div style={{ display: "flex" }}>
            <LogoContainer>
              <div style={{ display: "flex" }}>
                <LogoWithText overrideStyle={{ marginRight: "8px" }} />
                <LogoTitle>C-Zone</LogoTitle>
              </div>
              <LogoBody>boost productivity with one click</LogoBody>
            </LogoContainer>
            <Button
              variant={BUTTON_TYPE.LINK}
              overrideStyle={{
                color: "#FCE29C",
                boxShadow: "none",
                justifyContent: "left",
                marginLeft: "4vw",
              }}
              onMouseEnter={() => setIsDropdownVisible(true)}
            >
              解决方案
              <DownOutlined style={{ marginLeft: "20px" }} />
            </Button>
          </div>
          <ButtonGroup>
            <Button
              variant={BUTTON_TYPE.GHOST}
              overrideStyle={{ width: "200px", color: "#FCE29C" }}
            >
              参与内测
            </Button>
            <Button
              overrideStyle={{
                width: "200px",
                marginLeft: "20px",
                color: "black",
              }}
            >
              联系我们
            </Button>
          </ButtonGroup>
        </MainContent>
        {isDropdownVisible && <Dropdown />}
      </Wrapper>
    </>
  );
};

export default Navbar;
