import { Wrapper, Title, Subtitle, Divider } from "@styles/desktop/SurveyForm";
import { Form, Input, Select, Modal } from "antd";
import Button, { BUTTON_TYPE } from "@common/Button";

// @actions
import SaveCompanyInfoService from "@services/SaveCompanyInfoService";
import { PRODUCT_OPTIONS, PEOPLE_OPTIONS } from "@data/Constants";

const SurveyForm = () => {
  const [form] = Form.useForm();

  const onSubmit = async (values: any) => {
    Modal.success({
      content: "感谢提交信息！我们将尽快与您取得联系",
    });
    await SaveCompanyInfoService(values);
  };

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
          name="companySize"
          rules={[{ required: true, message: "人数选项不能为空" }]}
        >
          <Select placeholder="公司人数" options={PEOPLE_OPTIONS} />
        </Form.Item>
        <Form.Item
          name="topic"
          rules={[{ required: true, message: "产品不能为空" }]}
        >
          <Select placeholder="兴趣产品" options={PRODUCT_OPTIONS} />
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

export default SurveyForm;
