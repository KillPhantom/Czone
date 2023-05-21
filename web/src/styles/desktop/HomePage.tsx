import styled from "styled-components";
import robotImg from "@assets/images/robot.png";
import QRCodeImg from "@assets/images/QRCode.png";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  top: 10vh;
  background: linear-gradient(
    298.84deg,
    rgba(0, 0, 0, 0.89) 38.84%,
    rgba(27, 22, 22, 0.6) 203.28%
  );
  padding-bottom: 2vh;
`;

export const Content = styled.div`
  left: 10vw;
  right: 10vw;
  display: flex;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  max-width: 40vw;
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
  margin-left: 10vw;
`;

export const BackgroundImg = styled.img.attrs({ src: robotImg })`
  max-width: 80vw;
  margin-right: 4vw;
`;

export const QRCodeImage = styled.img.attrs({ src: QRCodeImg })`
  width: 180px;
`;

export const Slogan = styled.div`
  font-family: "PingFang HK";
  font-weight: 600;
  font-size: 50px;

  background: linear-gradient(126.9deg, #f8f3d1 8.11%, #fce29c 61.63%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const SloganHeader = styled.div`
  font-family: "Heiti TC";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 62px;

  background: linear-gradient(126.9deg, #fbfdab 8.11%, #dbc73c 61.63%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const SloganBody = styled.div`
  margin-top: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #fde29d;
`;

export const CardWrapper = styled.div`
  display: flex;
  width: 80vw;
  margin-left: 10vw;
  z-index: 2;
`;

export const Divider = styled.div`
  width: 80%;
  margin: 40px 10vw;
  border: 1px solid #f8db91;
`;

export const BottomSection = styled.div`
  margin: 40px 10vw;
`;

export const BottomSectionHeader = styled.div`
  font-size: 25px;
  line-height: 1.5em;
  color: white;
  letter-spacing: 0.1em;
  margin-bottom: 20px;
  text-align: center;
`;

export const InfoHeader = styled.div`
  color: white;
  text-align: left;
  font-size: 20px;
  text-align: left;
  margin-bottom: 60px;
  cursor: pointer;
`;

export const InfoBody = styled.div`
  color: white;
  text-align: left;
  font-size: 14px;
  margin-top: 8px;
  line-height: 1.5em;
  cursor: pointer;
  :hover {
    color: #f9d744;
  }
`;
