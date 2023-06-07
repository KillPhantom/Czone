import { useState, useRef, useEffect } from "react";
import { BarsOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { HOME_PAGE } from "../../Routes";

/* Components */
import Dropdown from "@mobile/DropdownPanel";

/* Styles */
import {
  Wrapper,
  MainContent,
  LogoContainer,
  LogoTitle,
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
              <LogoImg />
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
