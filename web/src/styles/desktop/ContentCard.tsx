import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 80px 80px 20px;
  max-width: 600px;
  margin-top: 40px;
  margin-right: 80px;
  background: rgba(21, 19, 19, 0.68) 55.02%;
  box-shadow: 0px 4px 4px rgba(32, 32, 32, 0.2);
  border-radius: 75px;
  margin-left: 80px;
`;

export const WrapperLayer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 80px;
  width: 420px;
  height: 240px;
  top: -40px;
  right: -40px;
  background: #fce29c;
  box-shadow: 0px 4px 4px rgba(32, 32, 32, 0.2);
  border-radius: 75px;
  z-index: -1;
`;

export const Header = styled.div`
  font-family: "PingFang HK";
  font-weight: 600;
  font-size: 32px;

  background: linear-gradient(126.9deg, #f8f3d1 8.11%, #fce29c 61.63%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin-bottom: 20px;
`;

export const BodyItemWrapper = styled.div`
  display: flex;
  margin: 10px 0;
`;

export const BodyItemText = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 1.4px;
  color: #ffffff;
  margin-left: 10px;
  cursor: pointer;
  :hover {
    color: #fce29c;
  }
`;
