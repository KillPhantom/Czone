import { Divider as AntDivider } from "antd";
/* Styles */
import {
  Wrapper,
  Slogan,
  SloganBody,
  InfoWrapper,
  Divider,
  Title,
  Body,
  RotatingItemContainer,
  FooterText,
  CounterText,
} from "@styles/mobile/HomePage";

import Navbar from "@mobile/Navbar";
import SurveyForm from "@desktop/SurveyForm";
import StaticGraph from "@desktop/animation/StaticGraph";
import PeopleGraph from "@desktop/animation/PeopleGraph";
import EfficiencyGraph from "@desktop/animation/EfficiencyGraph";
import Button, { BUTTON_TYPE } from "@common/Button";
import { useRef } from "react";
import Counter from "@common/AnimatedCounter";

const HomePage = () => {
  const ref = useRef();
  return (
    <>
      <Navbar />
      <Wrapper>
        <InfoWrapper>
          <Slogan>即刻开启AI高效人力管理体验</Slogan>
          <SloganBody>
            息纵结合增强型人工智能，全国高素质人才数据库以及优秀海外公司人力数据，为您提供专业高效的人力组织优化方案
          </SloganBody>
          <Button
            variant={BUTTON_TYPE.GHOST}
            overrideStyle={{
              width: "40%",
              marginTop: "10px",
              fontSize: "14px",
              padding: "2px 10px",
            }}
            onClick={() => {
              if (ref.current) {
                // @ts-ignore
                ref.current.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            预约体验
          </Button>
        </InfoWrapper>

        <InfoWrapper style={{ marginTop: "40px" }}>
          <Slogan>10倍招聘提效体验</Slogan>
          <SloganBody>
            有100+家企业的咨询服务经验,累计帮助企业节省成本超千万元,帮助4家中大型企业增加了100名以上高潜人才,人均招聘周期缩短了40+天
          </SloganBody>
        </InfoWrapper>

        <RotatingItemContainer>
          <PeopleGraph width="100%" />
          <Title>AI + 海量数据库极速招聘</Title>
          <Body>
            优化候选人画像,对标行业龙头
            <br />
            海量人才库搜索,对接500w+高校本硕博人才
            <br />
            大模型AI简历初筛, 秒级确认候选人名单
            <br />
            深度学习定制题库, 提高面试效率, 确保适配度
          </Body>
        </RotatingItemContainer>
        <RotatingItemContainer>
          <StaticGraph width="100%" />
          <Title>中小型企业精准化高效队伍扩张</Title>
          <Body>
            制定业务增长目标,定制化业务发展优先级
            <br />
            对标同时期行业发展,识别需求岗位
            <br />
            根据现有业务,高效定制人才画像
            <br />
            算法筛选人才库,快速对接入职
          </Body>
        </RotatingItemContainer>
        <RotatingItemContainer>
          <EfficiencyGraph width="80%" marginTop="10px" />
          <Title style={{ marginTop: "10px" }}>中型企业降本增效</Title>
          <Body style={{ marginTop: "10px" }}>
            业务流程梳理 + 低效环节识别
            <br />
            优化员工人数结构 + 优化工作内容
            <br />
            科学跨部门合作, 理清部门权责, 设定KPI
          </Body>
        </RotatingItemContainer>

        <Divider />

        <CounterText>
          <Counter value={900} suffix="w+" isMobileText />
          中国高校本硕毕业生数据
        </CounterText>

        <CounterText ref={ref}>
          <Counter value={2000} suffix="+" isMobileText />
          海外知名公司对标数据
        </CounterText>
        <Divider />

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
