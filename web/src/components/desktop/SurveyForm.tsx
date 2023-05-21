import { Wrapper, Title, Subtitle, Divider } from "@styles/desktop/SurveyForm";
import { Form, Input, Select, Modal } from "antd";
import Button, { BUTTON_TYPE } from "@common/Button";

// @actions
import { connect } from "react-redux";
import SaveCompanyInfoService from "@services/SaveCompanyInfoService";

const mapDispatchToProps = (dispatch: any) => ({
  saveInfo: (surveyForm: any) => SaveCompanyInfoService(surveyForm),
});

type PropsType = ReturnType<typeof mapDispatchToProps>;

const SurveyForm = ({ saveInfo }: PropsType) => {
  const [form] = Form.useForm();

  const onSubmit = (values: any) => {
    saveInfo(values);
    Modal.success({
      content: "感谢提交信息！我们将尽快与您取得联系",
    });
  };

  const options = [
    {
      value: "company",
      label: "公司结构优化",
    },
    {
      value: "employee",
      label: "员工日常管理",
    },
    {
      value: "recruitment",
      label: "人员队伍扩张",
    },
  ];

  const peopleOptions = [
    {
      value: 1,
      label: "小于10人",
    },
    {
      value: 2,
      label: "10 ~ 50 人",
    },
    {
      value: 3,
      label: "50 ~ 100 人",
    },
    {
      value: 4,
      label: "100 ~ 500 人",
    },
    {
      value: 5,
      label: "500 人以上",
    },
  ];
  return (
    <Wrapper>
      <Title>预约产品演示</Title>
      <Subtitle>提交信息后，专属顾问将会在1个工作日内与您取得联系</Subtitle>
      <Divider />
      <Form
        form={form}
        name="collect_info"
        onFinish={onSubmit}
        style={{ width: "80%", margin: "20px auto" }}
      >
        <Form.Item
          name="companyName"
          rules={[{ required: true, message: "公司名称不能为空" }]}
        >
          <Input
            placeholder="公司全称"
            style={{
              height: "50px",
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
              height: "50px",
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
              height: "50px",
              borderRadius: "10px",
              fontSize: "14px",
              padding: "20px",
            }}
          />
        </Form.Item>
        <Form.Item
          name="companySize"
          rules={[{ required: true, message: "人数选项不能为空" }]}
        >
          <Select placeholder="公司人数" options={peopleOptions} />
        </Form.Item>
        <Form.Item
          name="topic"
          rules={[{ required: true, message: "产品不能为空" }]}
        >
          <Select placeholder="兴趣产品" options={options} />
        </Form.Item>

        <Form.Item>
          <Button
            variant={BUTTON_TYPE.GHOST}
            overrideStyle={{
              width: "200px",
              height: "20px",
              fontSize: "16px",
              borderRadius: "10px",
              margin: "0 auto",
            }}
            onClick={() => form.submit()}
          >
            免费预约
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  );
};

export default connect(null, mapDispatchToProps)(SurveyForm);
