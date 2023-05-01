import styled from "styled-components";

export const Wrapper = styled.div<{
  showDropdown?: boolean;
  initialHeight: number;
}>`
  position: fixed;
  width: 100%;
  z-index: 2;
  border-bottom: 1px solid #f8db91;
  padding: 30px 0 14px;
  background-color: #32302b;

  ${({ showDropdown, initialHeight }) =>
    showDropdown &&
    `animation-name: grow-animation;
        animation-duration: 0.7s;
        animation-timing-function: ease-out;
        animation-fill-mode: forwards;

        @keyframes grow-animation {
          from {
            height: ${initialHeight}px;
          }
          to {
            height: ${initialHeight + 140}px;
          }
        }`};
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const LogoContainer = styled.div`
  margin-left: 4vw;
`;

export const LogoTitle = styled.div`
  font-family: "Heiti TC";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
`;

export const LogoBody = styled.div`
  font-family: "Heiti TC";
  font-weight: 400;
  font-size: 12px;
  margin-top: 4px;
  color: #ffffff;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-right: 2vw;
`;

export const MenuItem = styled.div`
  padding: 14px 30px;
  font-weight: 400;
  font-size: 18px;
  text-align: left;
  color: #f8db91;
`;
