import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  opacity: 0;
  z-index: 3;
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

export const TextContainer = styled.div`
  padding-left: 20px;
  padding-top: 20px;
  min-width: 180px;
`;

export const Text = styled.div`
  font-weight: 400;
  font-size: 18px;
  text-align: left;
  color: #f8db91;
  cursor: pointer;
`;

export const DetailText = styled.div`
  margin-left: 10px;
  color: #f8db91;
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 40px;
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
