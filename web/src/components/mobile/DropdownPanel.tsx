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

type PropsType = { setShouldChangeHeight: (bol: boolean) => void };

const DropdownPanel = ({ setShouldChangeHeight }: PropsType) => {
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
