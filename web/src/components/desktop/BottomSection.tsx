import { Row, Col, Image, Divider as AntDivider } from "antd";
import { InfoHeader, InfoBody } from "@styles/desktop/HomePage";

const BottomSection = () => {
  return (
    <>
      <Row style={{ marginTop: "10vh", marginLeft: "200px" }}>
        <Col span={8}>
          <InfoHeader>解决方案</InfoHeader>
          <InfoBody>公司效率诊断</InfoBody>
          <InfoBody>员工绩效诊断</InfoBody>
          <InfoBody>人才管理优化</InfoBody>
          <InfoBody>薪资福利优化</InfoBody>
        </Col>
        <Col span={8}>
          <InfoHeader>了解我们</InfoHeader>
          <InfoBody>团队介绍</InfoBody>
          <InfoBody>算法介绍</InfoBody>
          <InfoBody>荣誉资质</InfoBody>
        </Col>
        <Col span={8}>
          <InfoHeader style={{ textAlign: "left" }}>联系我们</InfoHeader>
          <Image
            width={140}
            src="https://www.beisen.com/public/mobile/index/images/foter3.jpg"
          />
        </Col>
      </Row>
      <AntDivider style={{ background: "#f8db91", marginTop: "10vh" }} />
      <Row style={{ marginTop: "2px", marginLeft: "200px" }}>
        <Col span={8}>
          <InfoBody>Copywrite @2023 息纵 All Rights Reserved</InfoBody>
        </Col>
        <Col span={8}>
          <InfoBody>沪ICP备09051952号-6</InfoBody>
        </Col>
        <Col span={8}>
          <InfoBody>隐私条款</InfoBody>
        </Col>
      </Row>
    </>
  );
};

export default BottomSection;
