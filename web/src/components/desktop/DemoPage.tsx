import Navbar from "@desktop/Navbar";
import Circle from "@assets/icons/Circles";
/* Styles */
import { TitleContainer, Slogan, SloganHeader } from "@styles/desktop/HomePage";
import {
  Wrapper,
  MainContent,
  Divider,
  InfoBody,
} from "@styles/desktop/DemoPage";
import { Space, Divider as AntDivider } from "antd";
import SurveyForm from "@desktop/SurveyForm";
import BottomContent from "@desktop/BottomSection";

const DemoPage = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <MainContent>
          <TitleContainer>
            <SloganHeader>Artificial Intelligence</SloganHeader>
            <Slogan>即刻开启AI高效管理体验</Slogan>
            <Divider />
            <Space style={{ marginTop: "20px" }}>
              <Circle />
              <InfoBody>专家顾问一对一服务</InfoBody>
            </Space>
            <Space style={{ marginTop: "20px" }}>
              <Circle />
              <InfoBody>企业AI定制化解决方案</InfoBody>
            </Space>
            <Space style={{ marginTop: "20px" }}>
              <Circle />
              <InfoBody>全天候响应问题随时解决</InfoBody>
            </Space>
          </TitleContainer>
          <SurveyForm />
        </MainContent>
        <AntDivider style={{ background: "#f8db91", marginTop: "10vh" }} />
        <BottomContent />
      </Wrapper>
    </>
  );
};

export default DemoPage;
