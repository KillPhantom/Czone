import styled from "styled-components";

export const ButtonWrapper = styled.div<{
  disable?: boolean;
  cssString?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  background: linear-gradient(
    180deg,
    #f9ba3d 0%,
    rgba(184, 175, 155, 0.87) 150.36%
  );
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 74px;
  color: #f8db91;
  ${({ cssString }) => cssString}
`;
