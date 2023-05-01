import styled from "styled-components";

export const Wrapper = styled.div`
  width: 360px;
  margin-left: 40px;
  min-height: 200px;
  position: relative;
  background: rgba(21, 19, 19, 0.68) 55.02%;
  box-shadow: 0px 4px 4px rgba(32, 32, 32, 0.2);
  border-radius: 40px;
`;
export const IconWrapper = styled.div`
  position: absolute;
  top: 30px;
  left: 40px;
`;

export const Title = styled.div`
  font-family: "Hiragino Maru Gothic Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  margin-left: 100px;
  margin-top: 30px;
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;
  width: 60%;
  color: #eee8e6;
`;

export const Body = styled.div`
  font-family: "Hiragino Maru Gothic Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  /* identical to box height */
  padding: 18px;
  display: flex;
  text-align: left;

  color: #eee8e6;
`;
