import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  opacity: 0;
  z-index: 3;
  display: flex;
  animation: slideIn 0.8s ease-in-out forwards;
  @keyframes slideIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 767px) {
    height: 50vh;
  }
`;

export const TextContainer = styled.div`
  margin-left: 280px;
  padding-left: 20px;
  min-width: 180px;
`;

export const Divider = styled.div`
  border: 1px solid #f8db91;
  margin-bottom: 10px;
`;

export const Text = styled.div`
  padding: 14px 30px;
  font-weight: 400;
  font-size: 18px;
  text-align: left;
  color: #f8db91;
  cursor: pointer;
  border-radius: 14px;
  margin-top: 20px;
  :hover {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  }
`;

export const DetailText = styled.div`
  margin-left: 100px;
  width: 400px;
  color: white;
  font-size: 14px;
  margin-top: 20px;
  letter-spacing: 1px;
  line-height: 30px;

  animation: slideIn 0.8s ease-in-out forwards;
  @keyframes slideIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
