import { useState } from "react";
import {
  Wrapper,
  Text,
  TextContainer,
  Divider,
  DetailText,
} from "@styles/desktop/DropdownSection";

type PropsType = { shouldRenderMobileComponent: boolean };

const DropdownSection = () => {
  const [detailText, setDetailText] = useState(0);

  return (
    <Wrapper>
      <TextContainer>
        <Divider />
        <Text
          onMouseEnter={() => setDetailText(1)}
          onMouseLeave={() => setDetailText(0)}
        >
          公司结构优化
        </Text>
        <Text
          onMouseEnter={() => setDetailText(2)}
          onMouseLeave={() => setDetailText(0)}
        >
          员工日常管理
        </Text>
        <Text
          onMouseEnter={() => setDetailText(3)}
          onMouseLeave={() => setDetailText(0)}
        >
          人员队伍扩张
        </Text>
      </TextContainer>
      {detailText === 1 && (
        <div style={{ display: "block" }}>
          <DetailText>岗位优化 - 甄别可以增加、兼并的岗位</DetailText>
          <DetailText>绩效对标 - 对标同行业同岗位绩效</DetailText>
          <DetailText>架构梳理 - 组织架构、汇报线梳理优化</DetailText>
        </div>
      )}
      {detailText === 2 && (
        <div style={{ display: "block" }}>
          <DetailText>绩效考核 - 提高日常绩效管理效率 </DetailText>
          <DetailText>
            薪酬管理 - 优化薪酬结构，充分调动员工积极性，以提高业绩和方便管理
          </DetailText>
          <DetailText>
            员工培训 - 提供定制化培训和职业发展项目，满足多样化员工职业发展需求
          </DetailText>
        </div>
      )}
      {detailText === 3 && (
        <div style={{ display: "block" }}>
          <DetailText>
            精准需求 -
            咨询顾问团队定制化分析公司人才需求，细化人才技能和专业背景画像
          </DetailText>
          <DetailText>
            人才对接 - 定制题库，精准识别候选人，平均入职周期缩短30%
          </DetailText>
          <DetailText>招聘加速 - 行业独家人才库，快速覆盖候选人</DetailText>
        </div>
      )}
    </Wrapper>
  );
};

export default DropdownSection;
