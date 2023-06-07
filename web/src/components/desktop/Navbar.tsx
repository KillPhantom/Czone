import React, { useState, useRef, useEffect } from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { DEMO_PAGE, HOME_PAGE } from "../../Routes";

/* Components */
import LogoWithText from "@assets/icons/Heart";
import Button, { BUTTON_TYPE } from "@common/Button";
import Dropdown from "@desktop/DropdownSection";

/* Styles */
import {
  Wrapper,
  MainContent,
  LogoContainer,
  LogoBody,
  LogoTitle,
  ButtonGroup,
  MenuItem,
  LogoImg,
} from "@styles/desktop/Navbar";

const items: MenuProps["items"] = [
  {
    label: <MenuItem>公司结构优化</MenuItem>,
    key: "1",
  },
  {
    label: <MenuItem>员工日常管理</MenuItem>,
    key: "2",
  },
  {
    label: <MenuItem>人员队伍扩张</MenuItem>,
    key: "3",
  },
];

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);
  const navigate = useNavigate();

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
    navigate(DEMO_PAGE);
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
            <LogoContainer onClick={() => navigate(HOME_PAGE)}>
              <LogoImg />
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
            {/* <Button
              variant={BUTTON_TYPE.GHOST}
              overrideStyle={{ width: "200px", color: "#FCE29C" }}
            ></Button> */}
            <Button
              overrideStyle={{
                width: "200px",
                marginLeft: "20px",
                color: "black",
              }}
              onClick={() => navigate(DEMO_PAGE)}
            >
              预约演示
            </Button>
          </ButtonGroup>
        </MainContent>
        {isDropdownVisible && <Dropdown />}
      </Wrapper>
    </>
  );
};

export default Navbar;
