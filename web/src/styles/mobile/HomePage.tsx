import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background: #131312;
  padding-bottom: 2vh;
  padding-top: 12vh;
`;

export const RotatingItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  align-items: center;
  background: #32302b;
`;

export const Slogan = styled.div`
  font-weight: 600;
  font-size: 26px;
  text-align: center;
  margin-top: 40px;
  letter-spacing: 0.05em;
  margin-bottom: 10px;
  max-width: 80%;
  font-family: "PingFang HK";
  background: linear-gradient(126.9deg, #f8f3d1 8.11%, #fce29c 61.63%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const SloganBody = styled.div`
  font-weight: 600;
  font-size: 13px;
  text-align: center;
  margin-top: 4px;
  letter-spacing: 0.05em;
  color: #eee8e6;
  max-width: 80%;
  margin-bottom: 10px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Divider = styled.div`
  width: 80%;
  margin: 20px 10vw;
  border: 1px solid #6e6b5d;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 30px;
  text-align: center;
  margin-top: -20px;

  background: linear-gradient(126.9deg, #f8f3d1 8.11%, #fce29c 61.63%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const Body = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  /* identical to box height */
  padding: 18px;
  display: flex;
  text-align: center;
  color: #eee8e6;
`;

export const InfoBody = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  padding-bottom: 4px;
  margin-left: 8px;
  color: white;
`;

export const FooterText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  padding-bottom: 4px;
  color: white;
  margin: 10px 10vw;
`;

export const CounterText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;
