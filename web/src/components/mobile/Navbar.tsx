import React, { useState, useRef, useEffect } from "react";
import { BarsOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { DEMO_PAGE, HOME_PAGE } from "../../Routes";

/* Components */
import LogoWithText from "@assets/icons/Heart";
import Button, { BUTTON_TYPE } from "@common/Button";
import Dropdown from "@mobile/DropdownPanel";

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
} from "@styles/mobile/Navbar";

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
  const [shouldChangeHeight, setShouldChangeHeight] = useState(false); // [TODO
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
  }, [shouldChangeHeight]);

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
              <div style={{ display: "flex" }}>
                <LogoImg />
                <LogoTitle>息纵</LogoTitle>
              </div>
            </LogoContainer>
          </div>
          <BarsOutlined
            style={{
              color: "white",
              fontSize: "34px",
              marginRight: "20px",
              marginTop: "-10px",
            }}
            onClick={() => setIsDropdownVisible(!isDropdownVisible)}
          />
        </MainContent>
        {isDropdownVisible && (
          <Dropdown setShouldChangeHeight={setShouldChangeHeight} />
        )}
      </Wrapper>
    </>
  );
};

export default Navbar;
