import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  left: -1000px;
`;

export const DimmingEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.6), transparent);
`;

export const CounterText = styled.div`
  font-family: "PingFang HK";
  font-weight: 600;
  font-size: 60px;

  background: linear-gradient(126.9deg, #f8f3d1 8.11%, #fce29c 61.63%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  display: flex;
`;

export const CounterTextSmall = styled.div`
  font-family: "PingFang HK";
  font-weight: 600;
  font-size: 60px;

  background: linear-gradient(126.9deg, #f8f3d1 8.11%, #fce29c 61.63%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  display: flex;
`;
