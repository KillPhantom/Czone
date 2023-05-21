import styled from "styled-components";
import Logo from "@assets/icons/logo.png";

export const Wrapper = styled.div<{
  showDropdown?: boolean;
  initialHeight: number;
}>`
  position: fixed;
  width: 100%;
  z-index: 2;
  border-bottom: 1px solid #f8db91;
  padding: 30px 0 14px;
  background-color: #32302b;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const LogoContainer = styled.div`
  margin-left: 4vw;
  cursor: pointer;
`;

export const LogoTitle = styled.div`
  font-family: "PingFang TC";
  margin-left: 10px;
  margin-top: -8px;
  font-weight: 600;
  font-size: 22px;
  background: linear-gradient(126.9deg, #f8f3d1 8.11%, #fce29c 61.63%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const LogoBody = styled.div`
  font-family: "Heiti TC";
  font-weight: 400;
  font-size: 12px;
  margin-top: 4px;
  color: #ffffff;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-right: 2vw;
`;

export const MenuItem = styled.div`
  padding: 14px 30px;
  font-weight: 400;
  font-size: 18px;
  text-align: left;
  color: #f8db91;
`;

export const LogoImg = styled.img.attrs({ src: Logo })`
  margin-top: -10px;
  width: 40px;
`;
