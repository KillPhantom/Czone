import styled from "styled-components";

export const Wrapper = styled.div`
  margin-left: 4vw;
  width: 50vw;
  min-height: 400px;
  background: linear-gradient(167.18deg, #302d2e 36.42%, #000000 98.46%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  padding: 40px 60px;

  @media (max-width: 768px) {
    background: none;
    box-shadow: none;
    width: 80vw;
    padding: 40px 20px;
    border-radius: none;
    margin: 60px 20px;
  }
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 40px;
  display: block;
  align-items: center;
  text-align: center;

  background: linear-gradient(89.92deg, #fdfbf7 17.3%, #ffeba4 59%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: block;
  text-align: center;
  margin-top: 10px;

  background: linear-gradient(89.92deg, #fdfbf7 17.3%, #ffeba4 59%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Divider = styled.div`
  margin-top: 20px;
  display: block;
  border: 1px solid #6e6b5d;
`;
