import { useState } from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";

const { Panel } = Collapse;

import {
  Wrapper,
  Text,
  TextContainer,
  DetailText,
} from "@styles/mobile/DropdownPanel";

const FIRST_TEXT =
  "通过数字化管理，实现公司标准的落地，根据核心产出的内容物、质量、数量的不同，明确不同任职资格标准，并帮助企业将传统的“等级制”任职资格的能力要求升级为“行为指标”能力要求";

const SECOND_TEXT =
  "运用行业数据和人工智能进行员工效率分析,量身定制人才培养计划,提升员工效率,降低人员流失率,根据企业效能智能分析招聘需求，智能算法筛选简历";

type PropsType = { setShouldChangeHeight: (bol: boolean) => void };

const DropdownPanel = ({ setShouldChangeHeight }: PropsType) => {
  const [detailText, setDetailText] = useState("");
  const { token } = theme.useToken();

  const onChange = (key: string | string[]) => {
    console.log(key);
    key.length > 0 ? setShouldChangeHeight(true) : setShouldChangeHeight(false);
  };
  return (
    <Wrapper>
      <TextContainer>
        <Collapse
          ghost
          bordered={false}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined
              rotate={isActive ? 90 : 0}
              style={{ color: "white" }}
            />
          )}
          style={{ background: "transparent", color: "white" }}
          expandIconPosition="end"
          onChange={onChange}
        >
          <Panel header={<Text>解决方案</Text>} key="1">
            <Collapse
              ghost
              bordered={false}
              style={{ background: "transparent", color: "white" }}
              expandIconPosition="end"
              onChange={onChange}
            >
              <Panel header={<Text>公司结构优化</Text>} key="1_1">
                <DetailText>岗位优化</DetailText>
                <DetailText>绩效对标</DetailText>
                <DetailText>架构梳理</DetailText>
              </Panel>
            </Collapse>
            <Collapse
              ghost
              bordered={false}
              style={{ background: "transparent", color: "white" }}
              expandIconPosition="end"
              onChange={onChange}
            >
              <Panel header={<Text>员工智能管理</Text>} key="1_2">
                <DetailText>绩效考核</DetailText>
                <DetailText>薪酬管理</DetailText>
                <DetailText>员工培训</DetailText>
              </Panel>
            </Collapse>
            <Collapse
              ghost
              bordered={false}
              style={{ background: "transparent", color: "white" }}
              expandIconPosition="end"
              onChange={onChange}
            >
              <Panel header={<Text>人员队伍扩张</Text>} key="1_3">
                <DetailText>精准需求</DetailText>
                <DetailText>人才对接</DetailText>
                <DetailText>招聘加速</DetailText>
              </Panel>
            </Collapse>
          </Panel>
          <Panel
            header={<Text>服务支持</Text>}
            key="2"
            collapsible="disabled"
          ></Panel>
          <Panel
            header={<Text>了解息纵</Text>}
            key="3"
            collapsible="disabled"
          ></Panel>
        </Collapse>
      </TextContainer>
    </Wrapper>
  );
};

export default DropdownPanel;
