import { Carousel, Space, Row, Col, Image, Divider as AntDivider } from "antd";

/* Styles */
import {
  Wrapper,
  Slogan,
  InfoWrapper,
  Divider,
  Title,
  Body,
  RotatingItemContainer,
  BackgroundBallImg,
  BackgroundCubicImg,
  BackgroundTriangleImg,
  ImageWrapper,
  InfoBody,
  FooterText,
} from "@styles/mobile/HomePage";

import Circle from "@assets/icons/Circles";
import Navbar from "@mobile/Navbar";
import SurveyForm from "@desktop/SurveyForm";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Carousel autoplay>
          <RotatingItemContainer>
            <Title>公司结构优化</Title>
            <Body>
              在公司转型或者降本增效阶段，帮助识别需要优化的岗位,
              评估员工人效率，并与同行业标杆行业对标，识别可以被优化或能力需要加强的员工,优化汇报线结构，减轻管理人员管理负担，同时提高业绩管理效率。
            </Body>
            <ImageWrapper>
              <BackgroundBallImg />
            </ImageWrapper>
          </RotatingItemContainer>
          <RotatingItemContainer>
            <Title>员工日常管理</Title>
            <Body>
              提高日常绩效管理效率,优化薪酬结构，充分调动员工积极性，以提高业绩和方便管理,员工日常技能培训。
            </Body>
            <ImageWrapper>
              <BackgroundCubicImg />
            </ImageWrapper>
          </RotatingItemContainer>
          <RotatingItemContainer>
            <Title>人员队伍扩张</Title>
            <Body>
              精准识别人才需求，匹配相应人才以适应公司快速的业务扩张,对接相应人才，缩短新员工适应时间，保证公司扩张过程中的平稳过度,智能化提效简历初筛等招聘流程
            </Body>
            <ImageWrapper>
              <BackgroundTriangleImg />
            </ImageWrapper>
          </RotatingItemContainer>
        </Carousel>
        <Slogan>即刻开启AI高效管理体验</Slogan>
        <InfoWrapper>
          <Space>
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
        </InfoWrapper>
        <Divider />
        {/* <Button
          variant={BUTTON_TYPE.GHOST}
          overrideStyle={{ margin: "40px" }}
          onClick={() => {
            navigate(DEMO_PAGE);
          }}
        >
          预约体验
        </Button> */}
        <SurveyForm />

        <AntDivider style={{ background: "#6e6b5d", marginTop: "2vh" }} />
        <FooterText>Copywrite @2023 息纵 All Rights Reserved</FooterText>
        <FooterText>
          <a href="http://beian.miit.gov.cn" style={{ color: "white" }}>
            沪ICP备2023014199号
          </a>
        </FooterText>
        <FooterText>隐私条款</FooterText>
      </Wrapper>
    </>
  );
};

export default HomePage;
