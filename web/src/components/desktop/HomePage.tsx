import { useNavigate } from "react-router-dom";
import { DEMO_PAGE } from "../../Routes";

/* Components */
import { Space, Form, Input, Select } from "antd";
import Button, { BUTTON_TYPE } from "@common/Button";
import Navbar from "@desktop/Navbar";
import Card from "@common/Card";
import BottomContent from "@desktop/BottomSection";

/* Styles */
import {
  Wrapper,
  Content,
  BackgroundImg,
  TitleContainer,
  Slogan,
  SloganHeader,
  SloganBody,
  CardWrapper,
  Divider,
  BottomSection,
  BottomSectionHeader,
} from "@styles/desktop/HomePage";

import Circle from "@assets/icons/Circles";
import Earth from "@assets/icons/Earth";
import Rects from "@assets/icons/Rects";

const HomePage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onSubmit = (values: any) => {
    console.log("Finish:", values);
  };
  const options = [
    {
      value: 1,
      label: "智能效率诊断",
    },
    {
      value: 2,
      label: "智能人才管理",
    },
  ];
  return (
    <>
      <Navbar />
      <Wrapper>
        <Content>
          <TitleContainer>
            <SloganHeader>Artificial Intelligence</SloganHeader>
            <Slogan>企业人力效率管理加速器</Slogan>
            <SloganBody>
              AI自动化绩效管理、人才招聘、企业培训等流程,
              提高管理效率,加强公司凝聚力。AI自动化绩效管理、人才招聘、企业培训等流程
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
        <CardWrapper>
          <Card
            title="精简人力管理流程"
            body="AI自动化绩效管理、人才招聘、企业培训等流程, 提高管理效率，加强公司凝聚力"
            icon={<Rects />}
          />
          <Card
            title="定制化提高人效"
            body="利用独有行业数据库，对标企业同行标杆，筛查低效人力、管理环节，精简企业人力结构，助力公利用最小人力成本实现最大营收回报"
            icon={<Earth />}
          />
          <Card
            title="精准捕捉人才需求"
            body="根据企业发展阶段、利用AI定制化人才需求画像、筛选候选人，缩短招聘流程，提高招聘效率，帮助公司出海、转型、迈上行业新台阶"
            icon={<Circle />}
          />
        </CardWrapper>
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
                name="phoneNumber"
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
                name="productType"
                rules={[{ required: true, message: "产品不能为空" }]}
              >
                <Select
                  placeholder="兴趣产品"
                  options={options}
                  style={{ width: "180px" }}
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

export default HomePage;
