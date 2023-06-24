import { useNavigate } from "react-router-dom";
import { DEMO_PAGE } from "../../Routes";
import { motion, useScroll, useSpring } from "framer-motion";

/* Components */
import { Space, Form, Input, Select, Modal } from "antd";
import Button, { BUTTON_TYPE } from "@common/Button";
import Navbar from "@desktop/Navbar";
import BottomContent from "@desktop/BottomSection";
import { connect } from "react-redux";
import SaveCompanyInfoService from "@services/SaveCompanyInfoService";
import ContentCard from "@desktop/ContentCard";
import Counter from "@common/AnimatedCounter";

/* Styles */
import {
  Wrapper,
  Content,
  BackgroundImg,
  TitleContainer,
  Slogan,
  SloganHeader,
  SloganBody,
  Divider,
  BottomSection,
  BottomSectionHeader,
  AnimationLeftContainer,
  AnimationRightContainer,
  CounterContainer,
  CounterText,
} from "@styles/desktop/HomePage";
import IconSlider from "./IconSlider";
import StaticGraph from "@desktop/animation/StaticGraph";
import PeopleGraph from "@desktop/animation/PeopleGraph";
import EfficiencyGraph from "@desktop/animation/EfficiencyGraph";

import { PRODUCT_OPTIONS, PEOPLE_OPTIONS } from "@data/Constants";

const mapDispatchToProps = (dispatch: any) => ({
  saveInfo: (surveyForm: any) => SaveCompanyInfoService(surveyForm),
});

type PropsType = ReturnType<typeof mapDispatchToProps>;

const HomePage = ({ saveInfo }: PropsType) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onSubmit = (values: any) => {
    saveInfo(values);
    Modal.success({
      content: "感谢提交信息！我们将尽快与您取得联系",
    });
  };

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <>
      <Navbar />
      <Wrapper>
        <Content>
          <TitleContainer>
            <SloganHeader>Artificial Intelligence</SloganHeader>
            <Slogan>企业人力效率管理加速器</Slogan>
            <SloganBody>
              AI自动化绩效管理、人才招聘、企业培训等流程, 提高管理效率
            </SloganBody>
            <Button
              variant={BUTTON_TYPE.GHOST}
              overrideStyle={{ marginTop: "40px", maxWidth: "300px" }}
              onClick={() => {
                navigate(DEMO_PAGE);
              }}
            >
              参与内测
            </Button>
          </TitleContainer>
          <BackgroundImg />
        </Content>
        <motion.div
          animate={Number(scrollYProgress) > 0.3 ? "visible" : "hidden"}
          style={{ scaleX }}
        >
          <Divider />
        </motion.div>
        <AnimationRightContainer>
          <ContentCard
            title={"AI + 海量数据库极速招聘"}
            texts={[
              {
                hint: "优化候选人画像,对标行业龙头",
              },
              { hint: "海量人才库搜索,对接500w+高校本硕博人才" },
              { hint: "大模型AI简历初筛, 秒级确认候选人名单" },
              { hint: "深度学习定制面试题库, 提高面试效率, 确保适配度" },
            ]}
          />
          <PeopleGraph />
        </AnimationRightContainer>
        <AnimationLeftContainer>
          <StaticGraph />
          <ContentCard
            alignDirection="right"
            title={"中小型企业精准化高效队伍扩张"}
            texts={[
              {
                hint: "制定业务增长目标,定制化业务发展优先级",
              },
              { hint: "对标同时期行业发展,识别需求岗位" },
              { hint: "根据现有业务,高效定制人才画像" },
              { hint: "算法筛选人才库,快速对接入职" },
              { hint: "一体化培训方案,快速上手业务" },
            ]}
          />
        </AnimationLeftContainer>
        <AnimationRightContainer>
          <ContentCard
            title={"中型企业降本增效"}
            texts={[
              {
                hint: "业务流程梳理 + 低效环节识别",
              },
              { hint: "优化员工人数结构 + 优化工作内容" },
              { hint: "科学跨部门合作, 理清部门权责, 设定相关KPI和权责" },
            ]}
          />
          <EfficiencyGraph />
        </AnimationRightContainer>
        <CounterContainer>
          <div style={{ color: "white" }}>
            <Counter value={900} suffix="w+" />
            中国高校本硕毕业生数据
          </div>
          <CounterText>
            <Counter value={2000} suffix="+" />
            海外知名公司对标数据
          </CounterText>
        </CounterContainer>

        <IconSlider />
        <Divider />
        <BottomSection>
          <BottomSectionHeader>即刻开启AI高效管理体验</BottomSectionHeader>
          <Form
            form={form}
            name="collect_info"
            layout="inline"
            onFinish={onSubmit}
          >
            <Space style={{ justifyContent: "center", margin: "10px auto" }}>
              <Form.Item
                name="companyName"
                rules={[{ required: true, message: "公司名称不能为空" }]}
              >
                <Input
                  placeholder="公司全称"
                  style={{
                    height: "40px",
                    borderRadius: "10px",
                    fontSize: "14px",
                    padding: "20px",
                  }}
                />
              </Form.Item>
              <Form.Item
                name="contactName"
                rules={[{ required: true, message: "联系人名称不能为空" }]}
              >
                <Input
                  placeholder="联系人名称"
                  style={{
                    height: "40px",
                    borderRadius: "10px",
                    fontSize: "14px",
                    padding: "20px",
                  }}
                />
              </Form.Item>
              <Form.Item
                name="contactNumber"
                rules={[{ required: true, message: "手机号码不能为空" }]}
              >
                <Input
                  placeholder="手机号码"
                  style={{
                    height: "40px",
                    borderRadius: "10px",
                    fontSize: "14px",
                    padding: "20px",
                  }}
                />
              </Form.Item>
              <Form.Item
                name="contactEmail"
                rules={[{ required: true, message: "电子邮箱地址不能为空" }]}
              >
                <Input
                  placeholder="电子邮箱地址"
                  style={{
                    height: "40px",
                    borderRadius: "10px",
                    fontSize: "14px",
                    padding: "20px",
                  }}
                />
              </Form.Item>
              <Form.Item
                name="productType"
                rules={[{ required: true, message: "产品不能为空" }]}
              >
                <Select
                  placeholder="兴趣产品"
                  options={PRODUCT_OPTIONS}
                  style={{ width: "160px" }}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  variant={BUTTON_TYPE.GHOST}
                  overrideStyle={{
                    width: "140px",
                    height: "16px",
                    fontSize: "18px",
                    borderRadius: "10px",
                  }}
                >
                  免费预约
                </Button>
              </Form.Item>
            </Space>
          </Form>
          <BottomContent />
        </BottomSection>
      </Wrapper>
    </>
  );
};

export default connect(null, mapDispatchToProps)(HomePage);
