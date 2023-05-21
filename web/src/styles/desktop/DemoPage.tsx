import styled from "styled-components";
import BackgroundImage from "@assets/images/form_back.png";
export const Wrapper = styled.div`
  background: linear-gradient(
      125.12deg,
      rgba(78, 58, 40, 0.65) 25.61%,
      rgba(53, 52, 52, 0.65) 53.21%,
      rgba(16, 15, 14, 0.65) 90.01%
    ),
    linear-gradient(
      278.84deg,
      rgba(0, 0, 0, 0.89) 38.84%,
      rgba(27, 22, 22, 0.6) 103.28%
    );
  padding: 200px 6vw 40px;
`;

export const MainContent = styled.div`
  display: flex;
  padding-bottom: 100px;
`;

export const Divider = styled.div`
  border: 1px solid #f9d744;
  max-width: 200px;
  margin-top: 60px;
`;

export const InfoBody = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #fde29d;
  padding-bottom: 4px;
  margin-left: 8px;
`;

export const BackgroundImg = styled.img.attrs({ src: BackgroundImage })`
  position: relative;
  right: 0px;
  top: -50vh;
  max-width: 70vw;
  z-index: 0;
`;
