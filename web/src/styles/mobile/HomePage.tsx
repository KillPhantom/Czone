import styled from "styled-components";
import BallImg from "@assets/images/golden_ball.png";
import CubicImg from "@assets/images/cubic.png";
import Triangle from "@assets/images/triangle.png";

export const Wrapper = styled.div`
  width: 100%;
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
  padding-bottom: 2vh;
`;

export const RotatingItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6vh;
  padding: 80px 30px 30px;
  max-width: 84vw;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const BackgroundBallImg = styled.img.attrs({ src: BallImg })`
  margin-top: -20px;
  width: 240px;
`;
export const BackgroundCubicImg = styled.img.attrs({ src: CubicImg })`
  width: 240px;
  margin-top: -20px;
`;
export const BackgroundTriangleImg = styled.img.attrs({ src: Triangle })`
  margin-top: -40px;
  width: 280px;
`;

export const Slogan = styled.div`
  font-weight: 600;
  font-size: 26px;
  text-align: center;
  margin-top: 20px;
  letter-spacing: 0.05em;
  background: linear-gradient(126.9deg, #f8f3d1 8.11%, #fce29c 61.63%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
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

  background: linear-gradient(89.92deg, #fdfbf7 17.3%, #ffeba4 59%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
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
